import ServiceCard from "@/components/services/ServiceCard";
import { SERVICES } from "@/consts/services";

const Services = () => {
  return (
    <section id="services" className="bg-brand-gray py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-brand-blue font-medium">Nos Services</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Solutions de nettoyage complètes
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nous offrons des services professionnels à Laval, Montréal et toute la
            Rive-Nord (Terrebonne, Repentigny, Mascouche, L'Assomption, Boisbriand,
            Lorraine, Rosemère, Bois-des-Filion).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
