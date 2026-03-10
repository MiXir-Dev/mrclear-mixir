import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { SERVICE_AREAS } from "@/consts/service-areas";

const ContactAreas = () => {
  return (
    <div className="flex items-start">
      <div className="bg-white p-3 rounded-full mr-4 shadow-sm">
        <MapPin className="h-5 w-5 text-brand-blue" />
      </div>
      <div>
        <p className="font-medium">Zones desservies</p>
        <p className="text-gray-600 space-x-1 text-justify">
          {SERVICE_AREAS.map((area, index) => (
            <span key={area.name}>
              <Link
                to={area.path}
                className="inline-block hover:text-brand-blue transition"
              >
                {area.name}
              </Link>
              {index < SERVICE_AREAS.length - 1 ? "," : ""}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default ContactAreas;
