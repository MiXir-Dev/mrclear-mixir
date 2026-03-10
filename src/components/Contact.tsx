import ContactInfo from "@/components/contact/ContactInfo";
import ContactMap from "@/components/contact/ContactMap";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-brand-blue font-medium">Nous Joindre</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Contactez notre équipe
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Besoin d'informations supplémentaires ou prêt à programmer un service ?
            Contactez-nous par téléphone, courriel ou via notre formulaire en ligne.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <ContactInfo />
          <ContactMap />
        </div>
      </div>
    </section>
  );
};

export default Contact;
