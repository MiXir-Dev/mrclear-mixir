import { Link } from "react-router-dom";

interface FooterBottomProps {
  currentYear: number;
}

const FooterBottom = ({ currentYear }: FooterBottomProps) => {
  return (
    <div className="border-t border-white/20 mt-12 pt-8 text-center md:flex md:justify-between md:text-left">
      <p className="opacity-75 text-sm">
        &copy; {currentYear} Mr. Clear. Tous droits réservés.{" "}
        <a href="https://www.mr-clear.com" className="hover:underline">
          mr-clear.com
        </a>
      </p>
      <div className="mt-4 md:mt-0">
        <Link
          to="/confidentialite"
          className="opacity-75 hover:opacity-100 transition-opacity text-sm"
        >
          Politique de confidentialité
        </Link>
      </div>
    </div>
  );
};

export default FooterBottom;
