import { useRef, useState, useEffect } from "react";

const testimonials = [
  {
    content: "Un service exceptionnel ! L'équipe de Mr. Clear a été ponctuelle, professionnelle et nos vitres sont impeccables.",
    name: "Marie Beauchamp",
    position: "Rosemère",
    rating: 5,
    source: "Google Reviews"
  },
  {
    content: "Nous faisons appel à Mr. Clear depuis 2 ans maintenant pour l'entretien de notre restaurant à Laval.",
    name: "Pierre Lavoie",
    position: "Restaurateur, Laval",
    rating: 5,
    source: "Google Reviews"
  },
  {
    content: "Service client exemplaire ! L'équipe a su répondre à nos besoins spécifiques pour notre immeuble de bureaux.",
    name: "Sophie Bélanger",
    position: "Gestionnaire immobilier, Montréal",
    rating: 5,
    source: "Google Reviews"
  },
  {
    content: "Michael est un pro ! Il a répondu à toutes mes questions. Je vais refaire appel à lui, mes vitres sont IMPECCABLES.",
    name: "Blessed By G",
    position: "Client résidentiel",
    rating: 5,
    source: "Google Reviews"
  },
  {
    content: "Super équipe ! Tout a été fait parfaitement. Michael est très accueillant et le prix est abordable.",
    name: "Diogo Vasconcelos",
    position: "Client résidentiel",
    rating: 5,
    source: "Google Reviews"
  },
  {
    content: "Super service ! Équipe gentille et motivée. 10/10 je recommande à nouveau.",
    name: "Natanael Mongeau-Binette",
    position: "Client résidentiel",
    rating: 5,
    source: "Google Reviews"
  },
  {
    content: "Expérience magnifique ! Service rapide et prix raisonnable. Je recommande cette équipe motivée et attentionnée.",
    name: "Anas Jamaleddine",
    position: "Client résidentiel",
    rating: 5,
    source: "Google Reviews"
  },
  {
    content: "Une équipe jeune et motivée qui aime son travail. Mes vitres sont éclatantes à très bon prix.",
    name: "Nadira Chalal",
    position: "Client résidentiel",
    rating: 5,
    source: "Google Reviews"
  },
  {
    content: "Excellent service ! Nettoyage rapide et courtois. De jeunes travailleurs motivés, bravo !",
    name: "Jean-François Bibeau",
    position: "Guide local",
    rating: 5,
    source: "Google Reviews"
  }
];


const Testimonials = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const itemWidth = window.innerWidth < 768 ? container.clientWidth : 0;
      const index = itemWidth ? Math.round(container.scrollLeft / itemWidth) : 0;
      setActiveIndex(index);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="py-20 bg-brand-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-brand-blue font-medium">Témoignages Clients</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Ce que nos clients disent de nous</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            La satisfaction de nos clients est notre priorité absolue.
          </p>
        </div>

        {/* Carousel container mobile, grid on desktop */}
        <div
          ref={scrollRef}
          className="flex md:grid md:grid-cols-3 gap-4 overflow-x-auto md:overflow-visible pb-4 scroll-smooth snap-x snap-mandatory"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-none w-full md:w-auto snap-center bg-white p-6 rounded-lg shadow-md transition-shadow"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg 
                    key={i}
                    className="w-5 h-5 text-yellow-500" 
                    fill="currentColor" 
                    viewBox="0 0 20 20" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 italic mb-4">{testimonial.content}</p>
              <p className="font-semibold">{testimonial.name}</p>
              <p className="text-gray-500 text-sm">{testimonial.position}</p>
              <p className="text-gray-400 text-xs mt-2 flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="#4285F4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
                  </svg>
                  {testimonial.source}
                </p>
            </div>
          ))}
        </div>

        {/* Indicators mobile only */}
        <div className="md:hidden flex justify-center mt-6 gap-2">
          {testimonials.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full ${
                i === activeIndex ? "bg-brand-blue" : "bg-gray-400"
              }`}
              onClick={() => {
                if (!scrollRef.current) return;
                scrollRef.current.scrollTo({
                  left: i * scrollRef.current.clientWidth,
                  behavior: "smooth",
                });
              }}
            />
          ))}
        </div>

        {/* Lien Google Reviews */}
        <div className="mt-10 text-center">
          <a
            href="https://www.google.com/search?client=safari&sca_esv=bb271186de9540cb&hl=en&sxsrf=AHTn8zrPypPRASjrXhmr5kSMUc4ZJmsKyg:1747872316858&si=APYL9bs7Hg2KMLB-4tSoTdxuOx8BdRvHbByC_AuVpNyh0x2KzbJP-FZL21QXwipZVl9o6Y2jGXOtJoULQeK2eRflV8P6ftJZhVo_MaXN1Vfp2Z6C7kP-4VqKTdp6wruAE3rOzFdZFrPz&q=Mr.Clear+Reviews&sa=X&ved=2ahUKEwijn7zk47WNAxVUlYkEHX8IDCoQ0bkNegQIKhAE&biw=1472&bih=739&dpr=1.3"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-blue hover:underline inline-flex items-center"
          >
            Voir tous nos avis Google
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
