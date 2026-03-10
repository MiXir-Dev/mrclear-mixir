import { SERVICE_AREAS } from "@/consts/service-areas";
import { splitServiceAreas } from "@/consts/footer";
import { Link } from "react-router-dom";

const FooterServiceAreas = () => {
  const [leftColumn, rightColumn] = splitServiceAreas(SERVICE_AREAS);

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4 border-b border-white/20 pb-2">
        Secteurs desservis
      </h3>
      <div className="grid grid-cols-2">
        <ul className="space-y-2">
          {leftColumn.map((area) => (
            <li key={area.name}>
              <Link to={area.path}>{area.name}</Link>
            </li>
          ))}
        </ul>
        <ul className="space-y-2">
          {rightColumn.map((area) => (
            <li key={area.name}>
              <Link to={area.path}>{area.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FooterServiceAreas;
