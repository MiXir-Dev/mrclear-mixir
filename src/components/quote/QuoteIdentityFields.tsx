import type React from "react";
import { QuoteFormData } from "@/consts/quote";

interface QuoteIdentityFieldsProps {
  formData: QuoteFormData;
  onChange: (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
}

const QuoteIdentityFields = ({
  formData,
  onChange,
}: QuoteIdentityFieldsProps) => {
  return (
    <>
      <div>
        <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
          Nom complet *
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={formData.name}
          onChange={onChange}
          className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-blue"
          placeholder="Votre nom"
        />
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
          Courriel *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={onChange}
          className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-blue"
          placeholder="votre@email.com"
        />
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-2" htmlFor="phone">
          Téléphone *
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          value={formData.phone}
          onChange={onChange}
          className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-blue"
          placeholder="(514) 266-6151"
        />
      </div>
    </>
  );
};

export default QuoteIdentityFields;
