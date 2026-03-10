import type React from "react";
import { useState } from "react";
import QuoteFormLayout from "@/components/quote/QuoteFormLayout";
import { DEFAULT_QUOTE_FORM_DATA, QuoteFormData } from "@/consts/quote";
import { CONTACT } from "@/consts/contact";
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

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
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
      setFormData(DEFAULT_QUOTE_FORM_DATA);
    } catch (error) {
      console.error("Erreur soumission:", error);
      toast({
        title: "Serveur indisponible",
        description: `Nos serveurs ont un problème temporaire. Réessayez plus tard ou appelez-nous au ${CONTACT.phoneDisplay}.`,
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
      onSubmit={handleSubmit}
      onChange={handleChange}
      onMessageChange={handleMessageChange}
      onCheckboxChange={handleCheckboxChange}
    />
  );
};

export default QuoteForm;
