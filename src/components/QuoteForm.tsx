
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import emailjs from "emailjs-com";


const QuoteForm = () => {

  useEffect(() => {
    console.log('before')
    requestAnimationFrame(() => {
      console.log('after')
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }, []); 
  

  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    city: "",
    buildingType: "residential",
    floors: "",
    email: "",
    phone: "",
    message: "",
    services: {
      exteriorWindows: false,
      interiorWindows: false,
      gutterCleaning: false
    }
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      services: {
        ...prev.services,
        [name]: checked
      }
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    const formattedServices = Object.entries(formData.services)
      .filter(([_, checked]) => checked)
      .map(([key]) => `- ${key.replace(/([A-Z])/g, ' $1')}`)
      .join("\n");
  
    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      city: formData.city,
      buildingType: formData.buildingType,
      floors: formData.floors,
      services: formattedServices || "Aucun service sélectionné",
      message: formData.message || "Aucun message."
    };
  
    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      templateParams,
      import.meta.env.VITE_EMAILJS_USER_ID
    )
    
    .then(() => {
      toast({
        title: "Demande envoyée",
        description: "Votre devis a été transmis. Merci !",
      });
      setIsSubmitting(false);
      setFormData({
        name: "",
        address: "",
        city: "",
        buildingType: "residential",
        floors: "",
        email: "",
        phone: "",
        message: "",
        services: {
          exteriorWindows: false,
          interiorWindows: false,
          gutterCleaning: false
        }
      });
    })
    .catch((error) => {
      console.error("Erreur envoi EmailJS:", error);
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive"
      });
      setIsSubmitting(false);
    });
  };
  

  return (
    <section id="soumission" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-blue">Obtenir un devis gratuit</h2>
              <p className="text-gray-600 mt-2">
                Remplissez le formulaire ci-dessous et recevez un devis personnalisé sous 24h.
              </p>
            </div>
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                    Nom complet *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-blue"
                    placeholder="Votre nom"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                    Courriel *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-blue"
                    placeholder="votre@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2" htmlFor="phone">
                    Téléphone *
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-blue"
                    placeholder="(514) 266-6151"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2" htmlFor="address">
                    Adresse *
                  </label>
                  <input
                    id="address"
                    name="address"
                    type="text"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-blue"
                    placeholder="123 rue Principale"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2" htmlFor="city">
                    Ville *
                  </label>
                     <input
                      id="city"
                      name="city"
                      type="text"
                      required
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-blue"
                      placeholder="Terrebonne"
                    />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2" htmlFor="buildingType">
                    Type de bâtiment *
                  </label>
                  <select
                    id="buildingType"
                    name="buildingType"
                    required
                    value={formData.buildingType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-blue"
                  >
                    <option value="residential">Résidentiel</option>
                    <option value="commercial">Commercial</option>
                    <option value="industrial">Industriel</option>
                  </select>
                </div>
                                
                <div className="md:col-span-2">
                  <label className="block text-gray-700 font-medium mb-2">
                    Services requis *
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-center">
                      <input
                        id="exteriorWindows"
                        name="exteriorWindows"
                        type="checkbox"
                        checked={formData.services.exteriorWindows}
                        onChange={handleCheckboxChange}
                        className="w-5 h-5 text-brand-blue focus:ring-brand-blue"
                      />
                      <label htmlFor="exteriorWindows" className="ml-2 text-gray-700">
                        Nettoyage de vitres extérieur
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="interiorWindows"
                        name="interiorWindows"
                        type="checkbox"
                        checked={formData.services.interiorWindows}
                        onChange={handleCheckboxChange}
                        className="w-5 h-5 text-brand-blue focus:ring-brand-blue"
                      />
                      <label htmlFor="interiorWindows" className="ml-2 text-gray-700">
                        Nettoyage de vitres intérieur
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="gutterCleaning"
                        name="gutterCleaning"
                        type="checkbox"
                        checked={formData.services.gutterCleaning}
                        onChange={handleCheckboxChange}
                        className="w-5 h-5 text-brand-blue focus:ring-brand-blue"
                      />
                      <label htmlFor="gutterCleaning" className="ml-2 text-gray-700">
                        Vidage de gouttières
                      </label>
                    </div>
                  </div>
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
                    Message ou détails supplémentaires
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-blue"
                    placeholder="Précisez vos besoins spécifiques..."
                  ></textarea>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <Button 
                  type="submit" 
                  className="cta-button w-full md:w-auto px-8 py-4"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Envoi en cours..." : "Obtenir mon devis gratuit"}
                </Button>
                <p className="text-gray-500 text-sm mt-3">
                  Nous répondons généralement en moins de 24 heures ouvrables.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;
