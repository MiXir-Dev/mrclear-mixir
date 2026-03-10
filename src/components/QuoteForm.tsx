import type React from "react";
import { useState } from "react";
import emailjs from "emailjs-com";
import QuoteFormLayout from "@/components/quote/QuoteFormLayout";
import { DEFAULT_QUOTE_FORM_DATA, QuoteFormData } from "@/consts/quote";
import { useToast } from "@/components/ui/use-toast";

const QuoteForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<QuoteFormData>(
    DEFAULT_QUOTE_FORM_DATA
  );
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = event.target;
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

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formattedServices = Object.entries(formData.services)
      .filter(([, checked]) => checked)
      .map(([key]) => `- ${key.replace(/([A-Z])/g, " $1")}`)
      .join("\n");

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      city: formData.city,
      buildingType: formData.buildingType,
      floors: formData.floors,
      services: formattedServices || "Aucun service sélectionné",
      message: formData.message || "Aucun message.",
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_USER_ID
      )
      .then(() => {
        toast({
          title: "Demande envoyée",
          description: "Votre devis a été transmis. Merci !",
        });
        setIsSubmitting(false);
        setFormData(DEFAULT_QUOTE_FORM_DATA);
      })
      .catch((error) => {
        console.error("Erreur envoi EmailJS:", error);
        toast({
          title: "Erreur",
          description: "Une erreur est survenue. Veuillez réessayer.",
          variant: "destructive",
        });
        setIsSubmitting(false);
      });
  };

  return (
    <QuoteFormLayout
      formData={formData}
      isSubmitting={isSubmitting}
      onSubmit={handleSubmit}
      onChange={handleChange}
      onMessageChange={handleMessageChange}
      onCheckboxChange={handleCheckboxChange}
    />
  );
};

export default QuoteForm;
