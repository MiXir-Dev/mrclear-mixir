
const Testimonials = () => {
  const testimonials = [
    {
      content: "Un service exceptionnel ! L'équipe de Mr. Clear a été ponctuelle, professionnelle et nos vitres sont impeccables. Je les utilise deux fois par année et je recommande vivement leurs services.",
      name: "Marie Beauchamp",
      position: "Rosemère",
      rating: 5,
      source: "Google Reviews"
    },
    {
      content: "Nous faisons appel à Mr. Clear depuis 2 ans maintenant pour l'entretien de notre restaurant à Laval. Leur travail est toujours soigné et la différence est visible pour nos clients.",
      name: "Pierre Lavoie",
      position: "Restaurateur, Laval",
      rating: 5,
      source: "Google Reviews"
    },
    {
      content: "Service client exemplaire ! L'équipe a su répondre à nos besoins spécifiques pour notre immeuble de bureaux. Résultat parfait, sans trace et à un excellent rapport qualité-prix.",
      name: "Sophie Bélanger",
      position: "Gestionnaire immobilier, Montréal",
      rating: 5,
      source: "Google Reviews"
    }
  ];

  return (
    <section className="py-20 bg-brand-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-brand-blue font-medium">Témoignages Clients</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Ce que nos clients disent de nous</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            La satisfaction de nos clients est notre priorité absolue. Voici quelques témoignages de personnes qui nous font confiance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
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
              <p className="text-gray-700 italic mb-6">{testimonial.content}</p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-gray-500 text-sm">{testimonial.position}</p>
                <p className="text-gray-400 text-xs mt-2 flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="#4285F4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
                  </svg>
                  {testimonial.source}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="https://www.google.com/search?q=mr+clear+lavage+de+vitres+avis" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-blue hover:underline inline-flex items-center"
          >
            <span>Voir tous nos avis Google</span>
            <svg 
              className="w-4 h-4 ml-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
