
import { useState, useRef, useEffect } from "react";
import { Slider } from "@/components/ui/slider";

const Services = () => {
  const services = [
    {
      title: "Nettoyage de vitres extérieur",
      description: "Service complet pour maisons, condos et commerces. Nous utilisons des équipements professionnels pour des résultats impeccables.",
      beforeImage: "https://images.unsplash.com/photo-1591588582259-e675bd2e6088?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      afterImage: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Nettoyage de vitres intérieur",
      description: "Traitement délicat et minutieux de vos vitres intérieures, sans dégâts et avec des produits écologiques.",
      beforeImage: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      afterImage: "https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Vidage de gouttières",
      description: "Nettoyage complet de vos gouttières pour prévenir les dégâts d'eau et protéger votre propriété.",
      beforeImage: "https://images.unsplash.com/photo-1439337153520-7082a56a81f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      afterImage: "https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Service pour commerces",
      description: "Entretien régulier pour bureaux, restaurants, magasins et vitrines commerciales avec équipement spécialisé.",
      beforeImage: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      afterImage: "https://images.unsplash.com/photo-1524230572899-a752b3835840?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
  ];

  return (
    <section id="services" className="bg-brand-gray py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-brand-blue font-medium">Nos Services</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Solutions de nettoyage complètes</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nous offrons des services professionnels à Laval, Montréal et toute la Rive-Nord 
            (Terrebonne, Repentigny, Mascouche, L'Assomption, Boisbriand, Lorraine, Rosemère, Bois-des-Filion).
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Composant pour un service avec slider avant/après vertical interactif
const ServiceCard = ({ service }) => {
  const [sliderValue, setSliderValue] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);
  
  // Handle direct mouse/touch interactions
  const handleInteractionStart = (clientX) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const containerWidth = rect.width;
    const offsetX = clientX - rect.left;
    
    // Calculate percentage
    const newValue = Math.max(0, Math.min(100, (offsetX / containerWidth) * 100));
    setSliderValue(newValue);
    setIsDragging(true);
  };
  
  const handleInteractionMove = (clientX) => {
    if (!isDragging || !containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const containerWidth = rect.width;
    const offsetX = clientX - rect.left;
    
    // Calculate percentage
    const newValue = Math.max(0, Math.min(100, (offsetX / containerWidth) * 100));
    setSliderValue(newValue);
  };
  
  const handleInteractionEnd = () => {
    setIsDragging(false);
  };
  
  // Mouse events
  const handleMouseDown = (e) => handleInteractionStart(e.clientX);
  const handleMouseMove = (e) => handleInteractionMove(e.clientX);
  const handleMouseUp = () => handleInteractionEnd();
  
  // Touch events
  const handleTouchStart = (e) => handleInteractionStart(e.touches[0].clientX);
  const handleTouchMove = (e) => handleInteractionMove(e.touches[0].clientX);
  const handleTouchEnd = () => handleInteractionEnd();
  
  // Add and remove event listeners
  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleTouchEnd);
    }
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging]);
  
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div 
        ref={containerRef}
        className="relative h-64 overflow-hidden cursor-grab"
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70 z-10"></div>
        
        {/* Image après (arrière-plan) */}
        <img 
          src={service.afterImage} 
          alt={`${service.title} - résultat final`}
          className="w-full h-full object-cover absolute inset-0"
        />
        
        {/* Image avant (premier plan avec clip-path) */}
        <div 
          className="absolute inset-0 overflow-hidden" 
          style={{ 
            clipPath: `inset(0 ${100 - sliderValue}% 0 0)` 
          }}
        >
          <img 
            src={service.beforeImage} 
            alt={`${service.title} - avant service`}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Ligne de séparation verticale glissable avec curseur amélioré */}
        <div 
          className="absolute inset-y-0 z-20 touch-none" 
          style={{ left: `${sliderValue}%` }}
        >
          <div className="absolute inset-y-0 w-1 bg-white"></div>
          <div 
            className={`absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-brand-blue cursor-grab transition-shadow duration-300 ${isDragging ? 'shadow-xl scale-110' : ''}`}
          >
            <div className="flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 19L3 12M3 12L10 5M3 12H21" stroke="#1a56db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14 5L21 12M21 12L14 19" stroke="#1a56db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
        
        {/* Labels Avant/Après */}
        <div className="flex justify-between text-xs text-white absolute bottom-4 inset-x-0 px-4 z-20 font-medium">
          <span>Avant</span>
          <span>Après</span>
        </div>
        
        <h3 className="absolute top-4 left-4 text-white text-xl font-semibold z-20 shadow-text">
          {service.title}
        </h3>
      </div>
      <div className="p-6">
        <p className="text-gray-600">{service.description}</p>
      </div>
    </div>
  );
};

export default Services;
