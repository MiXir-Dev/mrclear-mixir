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

  if (floors) {
    lines.push(`Étages: ${floors}`);
  }

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

const parseBody = (body) => {
  if (!body) {
    return {};
  }
  if (typeof body === "string") {
    return JSON.parse(body);
  }
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
    console.error("Messaging provider configuration is missing");
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
    return {
      statusCode: 400,
      headers: CORS_HEADERS,
      body: JSON.stringify({ error: "Invalid request" }),
    };
  }

  const text = buildTelegramMessage(payload);

  try {
    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
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
      }
    );

    if (!telegramResponse.ok) {
      const telegramError = await telegramResponse.text();
      console.error("Messaging provider API error:", telegramError);
      return {
        statusCode: 502,
        headers: CORS_HEADERS,
        body: JSON.stringify({ error: "Server error" }),
      };
    }

    return {
      statusCode: 200,
      headers: CORS_HEADERS,
      body: JSON.stringify({ ok: true }),
    };
  } catch (error) {
    console.error("Send quote function error:", error);
    return {
      statusCode: 500,
      headers: CORS_HEADERS,
      body: JSON.stringify({ error: "Server error" }),
    };
  }
}
