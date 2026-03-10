import type React from "react";
import { BUILDING_TYPES, QuoteFormData } from "@/consts/quote";

interface QuoteLocationFieldsProps {
  formData: QuoteFormData;
  onChange: (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
}

const QuoteLocationFields = ({
  formData,
  onChange,
}: QuoteLocationFieldsProps) => {
  return (
    <>
      <div>
        <label className="block text-gray-700 font-medium mb-2" htmlFor="address">
          Adresse *
        </label>
        <input
          id="address"
          name="address"
          type="text"
          value={formData.address}
          onChange={onChange}
          required
          className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-blue"
          placeholder="123 rue Principale"
        />
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-2" htmlFor="city">
          Ville *
        </label>
        <input
          id="city"
          name="city"
          type="text"
          required
          value={formData.city}
          onChange={onChange}
          className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-blue"
          placeholder="Terrebonne"
        />
      </div>

      <div>
        <label
          className="block text-gray-700 font-medium mb-2"
          htmlFor="buildingType"
        >
          Type de bâtiment *
        </label>
        <select
          id="buildingType"
          name="buildingType"
          required
          value={formData.buildingType}
          onChange={onChange}
          className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-blue"
        >
          {BUILDING_TYPES.map((type) => (
            <option key={type.value} value={type.value}>
              {type.label}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default QuoteLocationFields;
