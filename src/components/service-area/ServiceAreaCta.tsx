import { Mail, Phone } from "lucide-react";
import { CONTACT } from "@/consts/contact";

interface ServiceAreaCtaProps {
  city: string;
}

const ServiceAreaCta = ({ city }: ServiceAreaCtaProps) => {
  return (
    <div className="bg-brand-blue rounded-lg p-6 text-white text-center mb-8">
      <h2 className="text-2xl font-bold mb-3">Contactez-nous</h2>
      <p className="mb-4">
        Notre équipe professionnelle est prête à vous servir à {city}.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href={`tel:${CONTACT.phone}`}
          className="inline-flex items-center justify-center py-2 px-4 rounded-md bg-white text-brand-blue hover:bg-gray-100 transition-colors font-medium"
        >
          <Phone size={18} className="mr-2" />
          {CONTACT.phoneDisplay}
        </a>
        <a
          href={`mailto:${CONTACT.email}`}
          className="inline-flex items-center justify-center py-2 px-4 rounded-md bg-transparent border border-white text-white hover:bg-white/10 transition-colors font-medium"
        >
          <Mail size={18} className="mr-2" />
          Nous écrire
        </a>
      </div>
    </div>
  );
};

export default ServiceAreaCta;
