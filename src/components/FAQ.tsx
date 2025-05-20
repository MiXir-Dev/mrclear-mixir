import { useState } from "react";

const FAQ = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const faqs = [
    {
      question: "À quelle fréquence devrais-je faire nettoyer mes vitres à la maison ou au bureau ?",
      answer: "Pour les résidences situées sur la Rive-Nord ou à Montréal, un lavage de vitres deux fois par an (au printemps et à l'automne) est recommandé. Pour les commerces, surtout ceux exposés à la rue ou aux intempéries, un entretien mensuel ou trimestriel est conseillé afin de préserver une image professionnelle et propre."
    },
    {
      question: "Offrez-vous vos services de nettoyage de vitres dans ma ville ?",
      answer: "Nous desservons plusieurs villes de la Rive-Nord, dont Terrebonne, Mascouche, Repentigny, Boisbriand, Lorraine, Rosemère, Bois-des-Filion, ainsi que Laval et Montréal. Consultez notre section 'Zones desservies' pour plus de détails ou contactez-nous directement."
    },
    {
      question: "Comment préparer ma maison avant le nettoyage des vitres ?",
      answer: "Veuillez retirer les moustiquaires si possible et dégager l’accès aux fenêtres en déplaçant les meubles ou objets à proximité. Pour l’extérieur, libérez l’espace autour des fenêtres, en particulier près des haies, clôtures ou balcons."
    },
    {
      question: "Que se passe-t-il en cas de pluie le jour de mon rendez-vous ?",
      answer: "En cas de pluie forte ou de conditions météorologiques extrêmes, nous vous contacterons pour reporter l’intervention à une date ultérieure sans aucun frais. Les nettoyages peuvent être effectués sous une pluie légère, car nos produits professionnels garantissent des résultats sans traces."
    },
    {
      question: "Est-ce que Mr. Clear utilise des produits de nettoyage écologiques ?",
      answer: "Oui. Nous utilisons des solutions de nettoyage biodégradables, sécuritaires pour les humains, les animaux et l’environnement. C’est une priorité pour nous d’assurer un service propre et responsable."
    },
    {
      question: "Vos techniciens sont-ils assurés et formés pour le travail en hauteur ?",
      answer: "Absolument. Toute notre équipe est formée aux normes de sécurité du Québec et détient les certifications nécessaires pour travailler en hauteur. Nous sommes également couverts par une assurance responsabilité civile complète."
    },
    {
      question: "Proposez-vous des forfaits pour les nettoyages réguliers ?",
      answer: "Oui. Pour les clients commerciaux ou les résidences ayant besoin d’un entretien régulier, nous offrons des forfaits mensuels, bimestriels ou saisonniers à tarif préférentiel. Contactez-nous pour une soumission personnalisée."
    }
  ];
  

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-brand-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-brand-blue font-medium">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Questions fréquentes</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Trouvez rapidement des réponses à vos questions concernant nos services de lavage de vitres.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="mb-4 border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                className="flex justify-between items-center w-full p-5 text-left bg-white hover:bg-gray-50 focus:outline-none"
                onClick={() => toggleItem(index)}
              >
                <span className="font-medium text-lg">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-brand-blue transition-transform duration-300 ${openItem === index ? "transform rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              <div 
                className={`transition-all duration-300 ease-in-out ${
                  openItem === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                }`}
              >
                <div className="p-5 border-t border-gray-200 bg-white">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
