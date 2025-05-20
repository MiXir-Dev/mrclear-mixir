
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const CTA = () => {
  // Images pour le carousel
  const carouselImages = [
    "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1524230572899-a752b3835840?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  ];

  return (
    <section className="bg-brand-blue py-24 relative overflow-hidden">
  {/* Overlay flou */}
  <div className="absolute inset-0 bg-brand-blue/10 backdrop-blur-sm"></div>

  <div className="container mx-auto px-4 relative z-10">
    <div className="flex flex-col items-center text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
        Prêt à transformer l'apparence de votre propriété ?
      </h2>
      <p className="text-white/80 max-w-2xl text-lg mb-10">
        Un service professionnel qui fait la différence visible. Contactez-nous dès aujourd'hui et voyez par vous-même !
      </p>
    </div>

    {/* Carousel amélioré */}
    <div className="mt-16 relative">
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {carouselImages.map((image, index) => (
            <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3 transition-opacity duration-300 data-[active=true]:opacity-100 data-[active=false]:opacity-60">
              <div className="p-1 h-full data-[active=true]:scale-110 transition-transform duration-300">
                <div className="overflow-hidden rounded-lg shadow-xl h-56 md:h-72">
                  <img
                    src={image}
                    alt={`Image de lavage de vitres professionnel ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
    </div>

    {/* Bouton sous le carousel */}
    <div className="flex justify-center mt-12">
      <Button
        onClick={() =>
          document.getElementById("soumission")?.scrollIntoView({ behavior: "smooth" })
        }
        className="bg-white text-brand-blue hover:bg-gray-100 font-medium py-6 px-8 rounded-md text-lg shadow-lg transform transition-transform hover:scale-105"
      >
        Obtenir un devis gratuit
      </Button>
    </div>
  </div>
</section>

  );
};

export default CTA;
