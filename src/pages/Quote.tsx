// src/pages/Quote.tsx
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteForm from "@/components/QuoteForm";
import StickyCTA from "@/components/StickyCTA";

const QuotePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Helmet>
        <title>Obtenir un devis | Mr. Clear - Lavage de vitres résidentiel et commercial</title>
        <meta
          name="description"
          content="Remplissez notre formulaire de soumission pour obtenir un devis personnalisé en 24h. Service rapide et professionnel pour vitres et gouttières."
        />
        <link rel="canonical" href="https://www.mr-clear.com/soumission" />
        <meta property="og:title" content="Soumission - Mr. Clear" />
        <meta
          property="og:description"
          content="Formulaire pour obtenir un devis personnalisé pour le nettoyage de vitres ou de gouttières. Réponse rapide et professionnelle."
        />
      </Helmet>
      <Header />
      <main>
        <QuoteForm />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
};

export default QuotePage;
