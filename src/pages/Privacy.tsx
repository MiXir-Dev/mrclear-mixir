import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Header />

      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold mb-8 text-brand-blue">Politique de confidentialité</h1>

          <div className="space-y-6 text-gray-700">
            <p>Dernière mise à jour : 20 mai 2025</p>

            <div>
              <h2 className="text-2xl font-semibold text-brand-blue mb-4">Introduction</h2>
              <p>
                Chez Mr. Clear, nous respectons votre vie privée. Cette politique décrit les types d'informations que nous
                recueillons, comment nous les utilisons, et les choix dont vous disposez.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-brand-blue mb-4">Informations collectées</h2>
              <p className="mb-3">Nous pouvons collecter les informations suivantes :</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <span className="font-medium">Coordonnées :</span> nom, adresse, numéro de téléphone et adresse e-mail fournis via notre formulaire de soumission.
                </li>
                <li>
                  <span className="font-medium">Données d'utilisation :</span> données anonymes liées à la navigation sur notre site (pages visitées, temps passé, etc.).
                </li>
                <li>
                  <span className="font-medium">Communications :</span> toute correspondance échangée avec notre équipe.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-brand-blue mb-4">Utilisation des données</h2>
              <p>Les données collectées peuvent être utilisées pour :</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Répondre à votre demande de devis ou de service</li>
                <li>Améliorer notre expérience client et nos services</li>
                <li>Vous contacter à propos d’une soumission ou d’un suivi</li>
                <li>Analyser l’utilisation de notre site web</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-brand-blue mb-4">Sécurité des données</h2>
              <p>
                Nous mettons en œuvre des mesures raisonnables pour protéger vos données. Toutefois, aucune méthode de
                transmission sur Internet n’est totalement sécurisée.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-brand-blue mb-4">Vos droits</h2>
              <p>
                Vous pouvez nous contacter pour accéder, corriger ou supprimer vos données personnelles, ou pour poser toute
                question liée à cette politique.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-brand-blue mb-4">Contact</h2>
              <p>
                Pour toute question, veuillez écrire à :{" "}
                <a href="mailto:mrclear.homeservices@gmail.com" className="text-brand-blue underline">
                  mrclear.homeservices@gmail.com
                </a>
              </p>
            </div>

            <div className="pt-8">
              <Link
                to="/"
                className="text-brand-blue hover:text-brand-darkBlue transition-colors"
              >
                &larr; Retour à l’accueil
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Privacy;
