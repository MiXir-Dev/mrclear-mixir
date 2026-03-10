import { MapPin } from "lucide-react";

interface ServiceAreaHeroProps {
  city: string;
  imagePath: string;
}

const ServiceAreaHero = ({ city, imagePath }: ServiceAreaHeroProps) => {
  return (
    <div className="h-72 md:h-96 bg-gray-100 relative overflow-hidden">
      <img
        src={imagePath}
        alt={`Lavage de vitres à ${city}`}
        className="w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
        <div className="p-6 md:p-8">
          <div className="flex items-center text-white/80 mb-2">
            <MapPin size={16} className="mr-1" />
            <span>{city}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white shadow-text">
            Lavage de vitres professionnel à {city}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ServiceAreaHero;
