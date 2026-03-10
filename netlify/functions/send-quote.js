const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Content-Type": "application/json",
};

const SERVICE_LABELS = {
  exteriorWindows: "Nettoyage de vitres extérieur",
  interiorWindows: "Nettoyage de vitres intérieur",
  gutterCleaning: "Vidage de gouttières",
};

const BUILDING_TYPE_LABELS = {
  residential: "Résidentiel",
  commercial: "Commercial",
  industrial: "Industriel",
};

const TELEGRAM_MAX_LENGTH = 4096;

const escapeHtml = (value) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

const toSafeString = (value) => {
  if (typeof value !== "string") {
    return "";
  }
  return value.trim();
};

const truncate = (value, maxLength) => {
  if (value.length <= maxLength) {
    return value;
  }
  const suffix = "\n...[contenu tronqué]";
  return `${value.slice(0, Math.max(0, maxLength - suffix.length))}${suffix}`;
};

const safeErrorMessage = (error) =>
  error instanceof Error ? error.message : String(error);

const getRequestId = (event) => {
  const headers = event?.headers;
  if (!headers || typeof headers !== "object") {
    return "";
  }

  const value = headers["x-nf-request-id"] ?? headers["X-Nf-Request-Id"] ?? "";
  return toSafeString(Array.isArray(value) ? String(value[0]) : String(value));
};

const formatServices = (services) => {
  if (!services || typeof services !== "object") {
    return "Aucun service sélectionné";
  }

  const selectedServices = Object.entries(SERVICE_LABELS)
    .filter(([key]) => Boolean(services[key]))
    .map(([, label]) => `• ${escapeHtml(label)}`);

  if (selectedServices.length === 0) {
    return "Aucun service sélectionné";
  }

  return selectedServices.join("\n");
};

const buildTelegramMessage = (payload) => {
  const name = escapeHtml(toSafeString(payload.name));
  const email = escapeHtml(toSafeString(payload.email));
  const phone = escapeHtml(toSafeString(payload.phone));
  const address = escapeHtml(toSafeString(payload.address));
  const city = escapeHtml(toSafeString(payload.city));
  const floors = escapeHtml(toSafeString(payload.floors));
  const messageDetails = escapeHtml(toSafeString(payload.message) || "Aucun message.");
  const buildingTypeValue = toSafeString(payload.buildingType);
  const buildingType = escapeHtml(
    BUILDING_TYPE_LABELS[buildingTypeValue] || buildingTypeValue || "Non précisé"
  );
  const services = formatServices(payload.services);
  const lines = [
    "<b>Nouvelle soumission Mr. Clear</b>",
    "",
    "<b>Client</b>",
    `Nom: ${name || "Non précisé"}`,
    `Téléphone: ${phone || "Non précisé"}`,
    `Courriel: ${email || "Non précisé"}`,
    "",
    "<b>Adresse</b>",
    `Adresse: ${address || "Non précisée"}`,
    `Ville: ${city || "Non précisée"}`,
    `Type de bâtiment: ${buildingType}`,
  ];

  if (floors) lines.push(`Étages: ${floors}`);

  lines.push(
    "",
    "<b>Services demandés</b>",
    services,
    "",
    "<b>Détails</b>",
    messageDetails
  );

  return lines.join("\n");
};

const buildErrorAlertMessage = ({ payload, errorMessage, requestId }) => {
  const escapedError = escapeHtml(toSafeString(errorMessage) || "Erreur inconnue");
  const escapedDate = escapeHtml(new Date().toISOString());
  const escapedRequestId = escapeHtml(toSafeString(requestId));
  const escapedPayload = escapeHtml(JSON.stringify(payload ?? {}, null, 2));
  const truncatedPayload = truncate(escapedPayload, 1600);
  const submissionPreview = buildTelegramMessage(payload ?? {});

  const lines = [
    "<b>Alerte erreur soumission</b>",
    `Date: ${escapedDate}`,
    escapedRequestId ? `Request ID: ${escapedRequestId}` : "",
    "",
    "<b>Erreur serveur</b>",
    escapedError,
    "",
    "<b>Données de la soumission</b>",
    submissionPreview,
    "",
    "<b>Payload brut</b>",
    `<pre>${truncatedPayload}</pre>`,
  ];

  return truncate(lines.filter(Boolean).join("\n"), TELEGRAM_MAX_LENGTH - 40);
};

const sendTelegramMessage = async ({ botToken, channelId, text }) => {
  const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: channelId,
      text,
      parse_mode: "HTML",
      disable_web_page_preview: true,
    }),
  });

  const responseText = await response.text();

  if (!response.ok) {
    throw new Error(`Messaging provider error (${response.status}): ${responseText}`);
  }
};

const sendErrorAlertIfPossible = async ({
  botToken,
  channelId,
  payload,
  errorMessage,
  requestId,
  context,
}) => {
  if (!botToken || !channelId) {
    return;
  }

  const alertText = buildErrorAlertMessage({ payload, errorMessage, requestId });

  try {
    await sendTelegramMessage({ botToken, channelId, text: alertText });
  } catch (alertError) {
    console.error("Failed to send error alert", {
      context,
      message: safeErrorMessage(alertError),
    });
  }
};

const parseBody = (body) => {
  if (!body) return {};
  if (typeof body === "string") return JSON.parse(body);
  return body;
};

export async function handler(event) {
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 204,
      headers: CORS_HEADERS,
      body: "",
    };
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: CORS_HEADERS,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const channelId = process.env.TELEGRAM_CHANNEL_ID;

  if (!botToken || !channelId) {
    console.error("Messaging provider configuration is missing", {
      hasBotToken: Boolean(botToken),
      hasChannelId: Boolean(channelId),
    });
    return {
      statusCode: 500,
      headers: CORS_HEADERS,
      body: JSON.stringify({
        error: "Server error",
      }),
    };
  }

  let payload;
  try {
    payload = parseBody(event.body);
  } catch (error) {
    await sendErrorAlertIfPossible({
      botToken,
      channelId,
      payload: { rawBody: event.body },
      errorMessage: `Invalid request payload: ${safeErrorMessage(error)}`,
      requestId: getRequestId(event),
      context: "parse-body",
    });

    return {
      statusCode: 400,
      headers: CORS_HEADERS,
      body: JSON.stringify({ error: "Invalid request" }),
    };
  }

  const text = buildTelegramMessage(payload);
  const requestId = getRequestId(event);

  try {
    await sendTelegramMessage({ botToken, channelId, text });

    return {
      statusCode: 200,
      headers: CORS_HEADERS,
      body: JSON.stringify({ ok: true }),
    };
  } catch (error) {
    const errorMessage = safeErrorMessage(error);
    console.error("Send quote function error:", {
      message: errorMessage,
      requestId,
    });

    await sendErrorAlertIfPossible({
      botToken,
      channelId,
      payload,
      errorMessage,
      requestId,
      context: "send-primary-message",
    });

    const statusCode = errorMessage.includes("provider error (") ? 502 : 500;

    console.error("Send quote response error:", {
      statusCode,
      requestId,
    });

    return {
      statusCode,
      headers: CORS_HEADERS,
      body: JSON.stringify({ error: "Server error" }),
    };
  }
}
