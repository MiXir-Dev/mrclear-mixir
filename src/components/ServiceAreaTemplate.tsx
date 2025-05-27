import { useState } from "react";
import { Helmet } from 'react-helmet';
import { Link } from "react-router-dom";
import { MapPin, ChevronRight, Phone, Mail } from "lucide-react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";

interface ServiceAreaProps {
  city: string;
  description: string;
  imagePath?: string;
}

const ServiceAreaTemplate = ({ city, description, imagePath = "/images/window-cleaning.png" }: ServiceAreaProps) => {
  const [activeTab, setActiveTab] = useState<'residential' | 'commercial'>('residential');
  
  // All service areas for the sidebar
  const serviceAreas = [
    { name: "Laval", path: "/secteurs/laval" },
    { name: "Montréal", path: "/secteurs/montreal" },
    { name: "Repentigny", path: "/secteurs/repentigny" },
    { name: "Terrebonne", path: "/secteurs/terrebonne" },
    { name: "Mascouche", path: "/secteurs/mascouche" },
    { name: "L'Assomption", path: "/secteurs/assomption" },
    { name: "Boisbriand", path: "/secteurs/boisbriand" },
    { name: "Lorraine", path: "/secteurs/lorraine" },
    { name: "Rosemère", path: "/secteurs/rosemere" },
    { name: "Bois-des-Filion", path: "/secteurs/bois-des-filion" },
  ];

  // Generate schema.org structured data for local business service
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Service de lavage de vitres à ${city}`,
    "description": description,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Mr. Clear",
      "image": "https://mr-clear.com/logo.png",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": city,
        "addressRegion": "Quebec",
        "addressCountry": "CA"
      },
      "telephone": "+15142666151",
      "priceRange": "$$"
    },
    "areaServed": {
      "@type": "City",
      "name": city
    },
    "serviceType": "Lavage de vitres",
    "offers": {
      "@type": "Offer",
      "description": `Service professionnel de nettoyage de vitres à ${city}`,
      "areaServed": city
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Lavage de Vitres {city} | Mr. Clear - Service professionnel</title>
        <meta name="description" content={`Service de lavage de vitres résidentiel et commercial à ${city}. Professionnalisme, fiabilité et résultats impeccables. Demandez un devis gratuit!`} />
        <meta name="keywords" content={`lavage de vitres ${city}, nettoyage de vitres ${city}, lavage de fenêtres ${city}, prix lavage de vitres ${city}, entreprise nettoyage vitres ${city}`} />
        <meta property="og:title" content={`Lavage de Vitres à ${city} | Mr. Clear`} />
        <meta property="og:description" content={`Service professionnel de nettoyage de vitres résidentiel et commercial à ${city}. Demandez votre devis gratuit dès maintenant!`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://mr-clear.com/secteurs/${city.toLowerCase()}`} />
        <meta name="geo.region" content="CA-QC" />
        <meta name="geo.placename" content={city} />
        <link rel="canonical" href={`https://mr-clear.com/secteurs/${city.toLowerCase()}`} />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      <Header />
      
      <div className="py-8 bg-gradient-to-b from-brand-blue/5 to-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Service area sidebar */}
            <aside className="md:w-1/4">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-20">
                <h2 className="text-xl font-semibold mb-4 text-brand-blue">Zones desservies</h2>
                <div className="space-y-1">
                  {serviceAreas.map((area) => (
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
                      {area.name !== city && <ChevronRight size={16} className="ml-auto" />}
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
            
            {/* Main content */}
            <main className="md:w-3/4">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                {/* Hero image */}
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
                
                {/* Content */}
                <div className="p-6 md:p-8">
                  <div className="prose max-w-none">
                    <p className="text-lg text-gray-700 mb-6">
                      {description}
                    </p>
                    
                    {/* Service tabs */}
                    <div className="mb-8">
                      <div className="flex border-b border-gray-200 mb-6">
                        <button 
                          className={`py-2 px-4 font-medium transition-colors ${
                            activeTab === 'residential' 
                              ? 'text-brand-blue border-b-2 border-brand-blue' 
                              : 'text-gray-500 hover:text-gray-700'
                          }`}
                          onClick={() => setActiveTab('residential')}
                        >
                          Résidentiel
                        </button>
                        <button 
                          className={`py-2 px-4 font-medium transition-colors ${
                            activeTab === 'commercial' 
                              ? 'text-brand-blue border-b-2 border-brand-blue' 
                              : 'text-gray-500 hover:text-gray-700'
                          }`}
                          onClick={() => setActiveTab('commercial')}
                        >
                          Commercial
                        </button>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        {activeTab === 'residential' ? (
                          <>
                            <Card className="shadow-sm">
                              <CardContent className="p-6">
                                <h3 className="text-xl font-semibold mb-3">Services résidentiels</h3>
                                <ul className="space-y-2 list-disc pl-5">
                                  <li>Nettoyage de vitres extérieures</li>
                                  <li>Nettoyage de vitres intérieures</li>
                                  <li>Nettoyage de cadres et rebords</li>
                                  <li>Nettoyage de moustiquaires</li>
                                </ul>
                              </CardContent>
                            </Card>
                            <div className="bg-gray-50 rounded-lg flex items-center justify-center overflow-hidden h-64">
                              <img
                                src="/res-window-cleaning.png"
                                alt="Service résidentiel"
                                className="w-full h-full object-contain"
                                loading="lazy"
                              />
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="bg-gray-50 rounded-lg h-full flex items-center justify-center overflow-hidden">
                              <img
                                src="/res-commercial-cleaning.png"
                                alt="Service commercial" 
                                className="w-full h-full object-cover"
                                loading="lazy"
                              />
                            </div>
                            <Card className="shadow-sm">
                              <CardContent className="p-6">
                                <h3 className="text-xl font-semibold mb-3">Services commerciaux</h3>
                                <ul className="space-y-2 list-disc pl-5">
                                  <li>Nettoyage de façades vitrées</li>
                                  <li>Nettoyage de fenêtres en hauteur</li>
                                  <li>Contrats d'entretien régulier</li>
                                  <li>Horaires adaptés à votre entreprise</li>
                                </ul>
                              </CardContent>
                            </Card>
                          </>
                        )}
                      </div>
                    </div>
                    
                    <h2 className="text-2xl font-semibold mb-4">Pourquoi choisir Mr. Clear à {city}?</h2>
                    
                    <div className="grid md:grid-cols-3 gap-4 mb-8">
                      <div className="bg-gray-50 p-5 rounded-lg text-center">
                        <div className="bg-brand-blue/10 mx-auto mb-3 w-12 h-12 flex items-center justify-center rounded-full">
                          <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                        </div>
                        <h3 className="font-semibold mb-1">Personnel qualifié</h3>
                        <p className="text-sm text-gray-600">
                          Notre équipe est formée aux meilleures techniques.
                        </p>
                      </div>
                      <div className="bg-gray-50 p-5 rounded-lg text-center">
                        <div className="bg-brand-blue/10 mx-auto mb-3 w-12 h-12 flex items-center justify-center rounded-full">
                          <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                          </svg>
                        </div>
                        <h3 className="font-semibold mb-1">Service rapide</h3>
                        <p className="text-sm text-gray-600">
                          Intervention rapide et efficace.
                        </p>
                      </div>
                      <div className="bg-gray-50 p-5 rounded-lg text-center">
                        <div className="bg-brand-blue/10 mx-auto mb-3 w-12 h-12 flex items-center justify-center rounded-full">
                          <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                        </div>
                        <h3 className="font-semibold mb-1">Prix compétitifs</h3>
                        <p className="text-sm text-gray-600">
                          Excellent rapport qualité-prix.
                        </p>
                      </div>
                    </div>
                    
                    {/* CTA */}
                    <div className="bg-brand-blue rounded-lg p-6 text-white text-center mb-8">
                      <h2 className="text-2xl font-bold mb-3">Contactez-nous</h2>
                      <p className="mb-4">
                        Notre équipe professionnelle est prête à vous servir à {city}.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a 
                          href="tel:+15142666151" 
                          className="inline-flex items-center justify-center py-2 px-4 rounded-md bg-white text-brand-blue hover:bg-gray-100 transition-colors font-medium"
                        >
                          <Phone size={18} className="mr-2" />
                          (514) 266-6151
                        </a>
                        <a 
                          href="mailto:mrclear.homeservices@gmail.com"
                          className="inline-flex items-center justify-center py-2 px-4 rounded-md bg-transparent border border-white text-white hover:bg-white/10 transition-colors font-medium"
                        >
                          <Mail size={18} className="mr-2" />
                          Nous écrire
                        </a>
                      </div>
                    </div>
                    
                    {/* Testimonials */}
                    <h2 className="text-2xl font-semibold mb-4">Ce que nos clients disent</h2>
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-gray-50 p-5 rounded-lg italic border-l-4 border-brand-blue">
                        <p className="mb-3">
                          "Service exceptionnel! L'équipe de Mr. Clear a nettoyé toutes les vitres de ma maison avec un résultat impeccable."
                        </p>
                        <p className="font-medium not-italic">— Marie T.</p>
                      </div>
                      <div className="bg-gray-50 p-5 rounded-lg italic border-l-4 border-brand-blue">
                        <p className="mb-3">
                          "Très satisfait du travail effectué. Professionnels, rapides et efficaces. Mes fenêtres n'ont jamais été aussi propres!"
                        </p>
                        <p className="font-medium not-italic">— Michel G.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ServiceAreaTemplate;