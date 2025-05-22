
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="relative bg-brand-blue text-white">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1496307653780-42ee777d4833?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')" }}
      ></div>
      <div className="container relative mx-auto py-20 md:py-32 px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Nettoyage de vitres professionnel sur la Rive-Nord, Laval et Montréal 
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light">
            Service complet pour résidences et commerces. <br className="hidden md:block" />
            Des vitres impeccables, garanties.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={() => navigate("/soumission")}
              className="bg-white text-brand-blue hover:bg-gray-100 font-semibold text-lg py-6 px-8"
              size="lg"
            >
              Obtenir un devis gratuit →
            </Button>
            <Button 
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white/10 font-semibold text-lg py-6 px-8"
              size="lg"
            >
              Découvrir nos services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
