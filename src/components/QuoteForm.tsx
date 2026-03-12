import type React from "react";
import { useState } from "react";
import QuoteFormLayout from "@/components/quote/QuoteFormLayout";
import {
  BUILDING_TYPES,
  DEFAULT_QUOTE_FORM_DATA,
  QuoteFormData,
} from "@/consts/quote";
import { CONTACT } from "@/consts/contact";
import { useToast } from "@/components/ui/use-toast";

const SUBMISSION_COOLDOWN_KEY = "quote_form_last_success_at";
const SUBMISSION_COOLDOWN_MS = 30 * 60 * 1000;
const PROFILE_STORAGE_KEY = "quote_form_profile_v1";
const ADDRESS_VALIDATION_STORAGE_KEY = "quote_form_address_validated_v1";
const BUILDING_TYPE_SET = new Set(BUILDING_TYPES.map((type) => type.value));
const PROFILE_FIELDS = [
  "name",
  "email",
  "phone",
  "address",
  "city",
  "buildingType",
  "floors",
] as const;

type ProfileField = (typeof PROFILE_FIELDS)[number];
type StoredProfile = Pick<QuoteFormData, ProfileField>;

const getDefaultProfile = (): StoredProfile => ({
  name: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  buildingType: DEFAULT_QUOTE_FORM_DATA.buildingType,
  floors: "",
});

const isProfileField = (value: string): value is ProfileField => {
  return PROFILE_FIELDS.includes(value as ProfileField);
};

const getSubmissionBlockedUntil = () => {
  try {
    const lastSubmittedAt = localStorage.getItem(SUBMISSION_COOLDOWN_KEY);
    if (!lastSubmittedAt) {
      return null;
    }
    const lastTimestamp = Number(lastSubmittedAt);
    if (!Number.isFinite(lastTimestamp)) {
      return null;
    }
    const blockedUntil = lastTimestamp + SUBMISSION_COOLDOWN_MS;
    return blockedUntil > Date.now() ? blockedUntil : null;
  } catch {
    return null;
  }
};

const readStoredProfile = (): StoredProfile => {
  const fallback = getDefaultProfile();

  if (typeof window === "undefined") {
    return fallback;
  }

  try {
    const rawValue = localStorage.getItem(PROFILE_STORAGE_KEY);
    if (!rawValue) {
      return fallback;
    }

    const parsed = JSON.parse(rawValue) as Partial<StoredProfile> | null;
    if (!parsed || typeof parsed !== "object") {
      return fallback;
    }

    return {
      name: typeof parsed.name === "string" ? parsed.name : fallback.name,
      email: typeof parsed.email === "string" ? parsed.email : fallback.email,
      phone: typeof parsed.phone === "string" ? parsed.phone : fallback.phone,
      address:
        typeof parsed.address === "string" ? parsed.address : fallback.address,
      city: typeof parsed.city === "string" ? parsed.city : fallback.city,
      buildingType:
        typeof parsed.buildingType === "string" &&
        BUILDING_TYPE_SET.has(parsed.buildingType)
          ? parsed.buildingType
          : fallback.buildingType,
      floors:
        typeof parsed.floors === "string" ? parsed.floors : fallback.floors,
    };
  } catch {
    return fallback;
  }
};

const persistProfile = (profile: StoredProfile) => {
  if (typeof window === "undefined") {
    return;
  }

  try {
    localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(profile));
  } catch {
    // Ignore storage write failure.
  }
};

const updateStoredProfile = (partial: Partial<StoredProfile>) => {
  const nextProfile = {
    ...readStoredProfile(),
    ...partial,
  };
  persistProfile(nextProfile);
  return nextProfile;
};

const readAddressValidationFlag = () => {
  if (typeof window === "undefined") {
    return false;
  }

  try {
    return localStorage.getItem(ADDRESS_VALIDATION_STORAGE_KEY) === "1";
  } catch {
    return false;
  }
};

const persistAddressValidationFlag = (isValid: boolean) => {
  if (typeof window === "undefined") {
    return;
  }

  try {
    localStorage.setItem(ADDRESS_VALIDATION_STORAGE_KEY, isValid ? "1" : "0");
  } catch {
    // Ignore storage write failure.
  }
};

const setSubmissionSuccessTimestamp = () => {
  try {
    localStorage.setItem(SUBMISSION_COOLDOWN_KEY, String(Date.now()));
  } catch {
    // Ignore storage failure and continue UX flow.
  }
};

const formatRetryHour = (timestamp: number) => {
  return new Date(timestamp).toLocaleTimeString("fr-CA", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
};

const QuoteForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<QuoteFormData>(() => ({
    ...DEFAULT_QUOTE_FORM_DATA,
    ...readStoredProfile(),
  }));
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isAddressValidated, setIsAddressValidated] = useState(() => {
    const storedProfile = readStoredProfile();
    return Boolean(storedProfile.address) && readAddressValidationFlag();
  });

  const handleAddressValidatedChange = (isValid: boolean) => {
    setIsAddressValidated(isValid);
    persistAddressValidationFlag(isValid);
  };

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = event.target;
    if (name === "address") {
      handleAddressValidatedChange(false);
    }
    if (isProfileField(name)) {
      updateStoredProfile({ [name]: value } as Partial<StoredProfile>);
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setFormData((prev) => ({
      ...prev,
      services: {
        ...prev.services,
        [name]: checked,
      },
    }));
  };

  const handleAddressSelect = ({
    address,
    city,
  }: {
    address: string;
    city: string;
  }) => {
    const nextCity = city || formData.city;

    updateStoredProfile({
      address,
      city: nextCity,
    });

    setFormData((prev) => ({
      ...prev,
      address,
      city: nextCity,
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!isAddressValidated) {
      toast({
        title: "Adresse non validée",
        description: "Choisissez une adresse proposée avant de soumettre.",
        variant: "destructive",
      });
      return;
    }

    const blockedUntil = getSubmissionBlockedUntil();
    if (blockedUntil) {
      toast({
        title: "Nouvelle soumission temporairement bloquée",
        description: `Vous pourrez renvoyer une demande à ${formatRetryHour(
          blockedUntil
        )}.`,
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/.netlify/functions/send-quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Erreur serveur: ${response.status}`);
      }

      toast({
        title: "Demande envoyée",
        description: "Votre devis a été transmis. Merci !",
      });
      setSubmissionSuccessTimestamp();
      const storedProfile = readStoredProfile();
      setFormData({
        ...DEFAULT_QUOTE_FORM_DATA,
        ...storedProfile,
      });
      handleAddressValidatedChange(
        Boolean(storedProfile.address) && readAddressValidationFlag()
      );
    } catch (error) {
      console.error("Erreur soumission:", error);
      toast({
        title: "Serveur indisponible",
        description: `Nos serveurs ont un problème temporaire. Appelez-nous au ${CONTACT.phoneDisplay}.`,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <QuoteFormLayout
      formData={formData}
      isSubmitting={isSubmitting}
      isAddressValidated={isAddressValidated}
      onSubmit={handleSubmit}
      onChange={handleChange}
      onAddressSelect={handleAddressSelect}
      onAddressValidatedChange={handleAddressValidatedChange}
      onMessageChange={handleMessageChange}
      onCheckboxChange={handleCheckboxChange}
    />
  );
};

export default QuoteForm;
