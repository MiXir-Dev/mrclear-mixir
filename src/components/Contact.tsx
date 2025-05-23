
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-brand-blue font-medium">Nous Joindre</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Contactez notre équipe</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Besoin d'informations supplémentaires ou prêt à programmer un service ? Contactez-nous par téléphone, courriel ou via notre formulaire en ligne.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 bg-brand-light rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-6">Informations de contact</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-white p-3 rounded-full mr-4 shadow-sm">
                  <Phone className="h-5 w-5 text-brand-blue group-hover:animate-ping" />
                </div>
                <div>
                  <p className="font-medium">Téléphone</p>
                  <a 
                    href="tel:+15142666151" 
                    aria-label="Appeler le 514-266-6151" 
                    className="text-gray-600 hover:text-brand-blue"
                  >
                    (514) 266-6151
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white p-3 rounded-full mr-4 shadow-sm">
                  <Mail className="h-5 w-5 text-brand-blue" />
                </div>
                <div>
                  <p className="font-medium">Courriel</p>
                  <a
                    href="mailto:mrclear.homeservices@gmail.com"
                    className="text-gray-600 hover:text-brand-blue break-all"
                  >
                    mrclear.homeservices@gmail.com
                  </a>
                </div>
              </div>              
              <div className="flex items-start">
              <div className="flex items-start">
                <div className="bg-white p-3 rounded-full mr-4 shadow-sm">
                  <MapPin className="h-5 w-5 text-brand-blue" />
                </div>
                <div>
                  <p className="font-medium">Zones desservies</p>
                  <p className="text-gray-600 space-x-1 text-justify">
                    <Link to="/secteurs/laval" className="inline-block hover:text-brand-blue transition">Laval</Link>,
                    <Link to="/secteurs/montreal" className="inline-block hover:text-brand-blue transition">Montréal</Link>,
                    <Link to="/secteurs/repentigny" className="inline-block hover:text-brand-blue transition">Repentigny</Link>,
                    <Link to="/secteurs/terrebonne" className="inline-block hover:text-brand-blue transition">Terrebonne</Link>,
                    <Link to="/secteurs/mascouche" className="inline-block hover:text-brand-blue transition">Mascouche</Link>,
                    <Link to="/secteurs/assomption" className="inline-block hover:text-brand-blue transition">L'Assomption</Link>,
                    <Link to="/secteurs/boisbriand" className="inline-block hover:text-brand-blue transition">Boisbriand</Link>,
                    <Link to="/secteurs/lorraine" className="inline-block hover:text-brand-blue transition">Lorraine</Link>,
                    <Link to="/secteurs/rosemere" className="inline-block hover:text-brand-blue transition">Rosemère</Link>,
                    <Link to="/secteurs/bois-des-filion" className="inline-block hover:text-brand-blue transition">Bois-des-Filion</Link>
                  </p>
                </div>
              </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white p-3 rounded-full mr-4 shadow-sm">
                  <Clock className="h-5 w-5 text-brand-blue" />
                </div>
                <div>
                  <p className="font-medium">Heures d'ouverture</p>
                  <p className="text-gray-600">
                    Lundi - Vendredi: 8h à 18h
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="font-medium mb-2">Suivez-nous</h4>
              <div className="mt-4 flex space-x-4">
                <a
                  href="https://www.instagram.com/mrclear.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-brand-blue transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="https://www.facebook.com/share/15mFWzf8Aj/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-brand-blue transition-colors duration-200"
                  aria-label="Facebook"
                >
                  <Facebook className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <div className="h-96 rounded-lg overflow-hidden shadow-md">
              <iframe 
                src="https://www.google.com/maps/d/u/0/embed?mid=1keB2LM1SVq9fHTwvC12os0xJ5si6Epo&ehbc=2E312F&noprof=1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Carte Google Maps montrant les zones desservies par Mr. Clear"
                ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
