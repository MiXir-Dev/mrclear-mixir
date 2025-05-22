import { useState, useRef, useEffect } from "react";

const Services = () => {
  const services = [
    {
      title: "Nettoyage de vitres intérieur & extérieur",
      description: "Service complet de nettoyage de vitres pour l'intérieur et l'extérieur. Nous utilisons des produits écologiques pour un entretien délicat, sans dégâts, et un équipement spécialisé pour les vitrines, bureaux et commerces.",
      beforeImage: "/before-inside.png",
      afterImage: "/after-inside.png"
    },    
    {
      title: "Vidage et entretien des gouttières",
      description: "Élimination efficace des débris pour assurer un bon écoulement de l’eau, prévenir les infiltrations et prolonger la durée de vie de votre toiture.",
      beforeImage: "/before-gutter-cleaning.png",
      afterImage: "/after-gutter-cleaning.png"
    },
    {
      title: "Nettoyage de revêtement extérieur",
      description: "Remise à neuf de vos surfaces extérieures grâce à un lavage à pression professionnel. Parfait pour maisons, condos et commerces, sans abîmer les matériaux.",
      beforeImage: "/before-outside.png",
      afterImage: "/after-outside.png"
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
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ service }) => {
  const [sliderValue, setSliderValue] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);
  
  const handleInteractionStart = (clientX) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const containerWidth = rect.width;
    const offsetX = clientX - rect.left;
    
    const newValue = Math.max(0, Math.min(100, (offsetX / containerWidth) * 100));
    setSliderValue(newValue);
    setIsDragging(true);
  };
  
  const handleInteractionMove = (clientX) => {
    if (!isDragging || !containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const containerWidth = rect.width;
    const offsetX = clientX - rect.left;
    
    const newValue = Math.max(0, Math.min(100, (offsetX / containerWidth) * 100));
    setSliderValue(newValue);
  };
  
  const handleInteractionEnd = () => {
    setIsDragging(false);
  };
  
  const handleMouseDown = (e) => handleInteractionStart(e.clientX);
  const handleMouseMove = (e) => handleInteractionMove(e.clientX);
  const handleMouseUp = () => handleInteractionEnd();
  
  const handleTouchStart = (e) => handleInteractionStart(e.touches[0].clientX);
  const handleTouchMove = (e) => handleInteractionMove(e.touches[0].clientX);
  const handleTouchEnd = () => handleInteractionEnd();
  
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
        className="relative h-64 overflow-hidden cursor-grab select-none"
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
          {/* Ligne verticale */}
          <div className="absolute inset-y-0 w-[2px] bg-white/80 backdrop-blur-sm"></div>

          {/* Curseur rond glassmorphique */}
          <div
            className={`
              absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 
              bg-white/40 backdrop-blur-md border border-white/60
              rounded-full shadow-lg flex items-center justify-center
              cursor-grab transition-all duration-300
              ${isDragging ? 'scale-110 shadow-xl' : ''}
            `}
          >
            {/* Nouvelle icône (double flèche horizontale, clean) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-brand-blue"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 16l-4-4m0 0l4-4m-4 4h16m-4 4l4-4m0 0l-4-4"
              />
            </svg>
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
