
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";

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
                  <a href="mailto:mrclear.homeservices@gmail.com" className="text-gray-600 hover:text-brand-blue">
                    mrclear.homeservices@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white p-3 rounded-full mr-4 shadow-sm">
                  <MapPin className="h-5 w-5 text-brand-blue" />
                </div>
                <div>
                  <p className="font-medium">Zones desservies</p>
                  <p className="text-gray-600">
                    Laval, Montréal, Repentigny,<br />
                    Terrebonne, Mascouche, L'Assomption,<br />
                    Boisbriand, Lorraine, Rosemère,<br />
                    Bois-des-Filion
                  </p>
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
                  href="https://www.facebook.com/mrclear.ca"
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44562.62567594712!2d-73.67010871322489!3d45.69060880406882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc8e43936b99761%3A0xe3029082f8666374!2sTerrebonne%2C%20QC!5e0!3m2!1sfr!2sca!4v1684934562071!5m2!1sfr!2sca"
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
