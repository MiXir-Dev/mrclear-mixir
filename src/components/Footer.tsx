
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-footer-blue text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1 flex flex-col items-center md:items-start">
            <div className="mb-6 text-center md:text-left">
              <Link to="/" className="inline-block">
                <h3 className="text-2xl font-bold mb-2">Mr. Clear</h3>
                <div className="w-16 h-1 bg-white rounded mx-auto md:mx-0"></div>
              </Link>
            </div>
            <p className="mb-4 text-center md:text-left">
              Services professionnels de lavage de vitres et entretien extérieur pour particuliers et entreprises.
            </p>
            <div className="flex items-center mb-2">
              <Phone size={18} className="mr-2" />
              <a href="tel:+15142666151" className="hover:underline transition-colors">
                (514) 266-6151
              </a>
            </div>
            <div className="flex items-center mb-2">
              <Mail size={18} className="mr-2" />
              <a href="mailto:mrclear.homeservices@gmail.com" className="hover:underline transition-colors">
                mrclear.homeservices@gmail.com
              </a>
            </div>
            <div className="flex items-center">
              <MapPin size={18} className="mr-2" />
              <span>Rive-Nord, Laval, Montréal</span>
            </div>
            <div className="mt-4 flex space-x-4">
              <a 
                href="https://www.instagram.com/mrclear.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-brand-blue p-2 rounded-full hover:bg-gray-200 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.facebook.com/mrclear.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-brand-blue p-2 rounded-full hover:bg-gray-200 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-white/20 pb-2">Nos Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="opacity-75 hover:opacity-100 transition-opacity hover:translate-x-1 inline-block">
                  Nettoyage de vitres extérieur
                </a>
              </li>
              <li>
                <a href="#services" className="opacity-75 hover:opacity-100 transition-opacity hover:translate-x-1 inline-block">
                  Nettoyage de vitres intérieur
                </a>
              </li>
              <li>
                <a href="#services" className="opacity-75 hover:opacity-100 transition-opacity hover:translate-x-1 inline-block">
                  Vidage de gouttières
                </a>
              </li>
              <li>
                <a href="#services" className="opacity-75 hover:opacity-100 transition-opacity hover:translate-x-1 inline-block">
                  Services commerciaux
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-white/20 pb-2">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <a href="#pourquoi-nous" className="opacity-75 hover:opacity-100 transition-opacity hover:translate-x-1 inline-block">
                  Pourquoi nous choisir
                </a>
              </li>
              <li>
                <a href="#soumission" className="opacity-75 hover:opacity-100 transition-opacity hover:translate-x-1 inline-block">
                  Demande de devis
                </a>
              </li>
              <li>
                <a href="#faq" className="opacity-75 hover:opacity-100 transition-opacity hover:translate-x-1 inline-block">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contact" className="opacity-75 hover:opacity-100 transition-opacity hover:translate-x-1 inline-block">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-white/20 pb-2">Secteurs desservis</h3>
            <div className="grid grid-cols-2">
              <ul className="space-y-2">
              <li>
                  <Link to="/secteurs/laval" className="opacity-75 hover:opacity-100 transition-opacity hover:translate-x-1 inline-block">
                    Laval
                  </Link>
                </li>
                <li>
                  <Link to="/secteurs/montreal" className="opacity-75 hover:opacity-100 transition-opacity hover:translate-x-1 inline-block">
                    Montréal
                  </Link>
                </li>
                <li>
                  <Link to="/secteurs/repentigny" className="opacity-75 hover:opacity-100 transition-opacity hover:translate-x-1 inline-block">
                    Repentigny
                  </Link>
                </li>
                <li>
                  <Link to="/secteurs/terrebonne" className="opacity-75 hover:opacity-100 transition-opacity hover:translate-x-1 inline-block">
                    Terrebonne
                  </Link>
                </li>
                <li>
                  <Link to="/secteurs/mascouche" className="opacity-75 hover:opacity-100 transition-opacity hover:translate-x-1 inline-block">
                    Mascouche
                  </Link>
                </li>
              </ul>
              <ul className="space-y-2">
                <li>
                  <Link to="/secteurs/assomption" className="opacity-75 hover:opacity-100 transition-opacity hover:translate-x-1 inline-block">
                    L'Assomption
                  </Link>
                </li>
                <li>
                  <Link to="/secteurs/boisbriand" className="opacity-75 hover:opacity-100 transition-opacity hover:translate-x-1 inline-block">
                    Boisbriand
                  </Link>
                </li>
                <li>
                  <Link to="/secteurs/lorraine" className="opacity-75 hover:opacity-100 transition-opacity hover:translate-x-1 inline-block">
                    Lorraine
                  </Link>
                </li>
                <li>
                  <Link to="/secteurs/rosemere" className="opacity-75 hover:opacity-100 transition-opacity hover:translate-x-1 inline-block">
                    Rosemère
                  </Link>
                </li>
                <li>
                  <Link to="/secteurs/bois-des-filion" className="opacity-75 hover:opacity-100 transition-opacity hover:translate-x-1 inline-block">
                    Bois-des-Filion
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8 text-center md:flex md:justify-between md:text-left">
          <p className="opacity-75 text-sm">
            &copy; {currentYear} Mr. Clear. Tous droits réservés. <a href="https://www.mr-clear.com" className="hover:underline">mr-clear.com</a>
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex justify-center md:justify-end space-x-6">
              <li>
                <a href="#" className="opacity-75 hover:opacity-100 transition-opacity text-sm">
                  Politique de confidentialité
                </a>
              </li>
              <li>
                <a href="#" className="opacity-75 hover:opacity-100 transition-opacity text-sm">
                  Conditions d'utilisation
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
