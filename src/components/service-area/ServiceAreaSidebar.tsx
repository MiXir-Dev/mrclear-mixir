import { Link } from "react-router-dom";
import { MapPin, ChevronRight } from "lucide-react";
import { SERVICE_AREAS } from "@/consts/service-areas";

interface ServiceAreaSidebarProps {
  city: string;
}

const ServiceAreaSidebar = ({ city }: ServiceAreaSidebarProps) => {
  return (
    <aside className="md:w-1/4">
      <div className="bg-white rounded-lg shadow-sm p-6 sticky top-20">
        <h2 className="text-xl font-semibold mb-4 text-brand-blue">
          Zones desservies
        </h2>
        <div className="space-y-1">
          {SERVICE_AREAS.map((area) => (
            <Link
              key={area.name}
              to={area.path}
              className={`flex items-center p-2 rounded-md transition-colors ${
                area.name === city
                  ? "bg-brand-blue text-white font-medium"
                  : "hover:bg-gray-100"
              }`}
            >
              <MapPin size={16} className="mr-2" />
              {area.name}
              {area.name !== city && (
                <ChevronRight size={16} className="ml-auto" />
              )}
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default ServiceAreaSidebar;
