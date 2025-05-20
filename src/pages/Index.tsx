
import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Services from "@/components/Services";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import QuoteForm from "@/components/QuoteForm";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import { Helmet } from 'react-helmet';

const Index = () => {
  // Add global smooth scrolling behavior for all anchor links
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const target = e.target;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        const id = target.getAttribute('href').substring(1);
        const element = document.getElementById(id);
        
        if (element) {
          e.preventDefault();
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  // Structured data for local business to improve SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Mr. Clear",
    "description": "Service professionnel de nettoyage de vitres résidentiel et commercial à Laval, Montréal, Terrebonne, Repentigny et toute la Rive-Nord.",
    "url": "https://www.mr-clear.com",
    "telephone": "+15142666151",
    "email": "mrclear.homeservices@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "Quebec",
      "addressLocality": "Laval, Montréal",
      "addressCountry": "CA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "45.606649",
      "longitude": "-73.712409"
    },
    "areaServed": ["Laval", "Montréal", "Terrebonne", "Repentigny", "L'Assomption", "Mascouche", "Boisbriand", "Lorraine", "Rosemère", "Bois-des-Filion"],
    "serviceType": ["Lavage de vitres", "Nettoyage de vitres", "Vidage de gouttières"],
    "priceRange": "$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.facebook.com/mrclear.ca",
      "https://www.instagram.com/mrclear.ca"
    ]
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Mr. Clear | Service professionnel de lavage de vitres à Laval, Montréal et Rive-Nord</title>
        <meta name="description" content="Entreprise spécialisée en nettoyage de vitres résidentiel et commercial à Laval, Montréal et Rive-Nord. Devis gratuit, service fiable et résultats impeccables!" />
        <meta name="keywords" content="lavage de vitres, nettoyage de vitres, lavage de fenêtres, prix lavage de vitres, Laval, Montréal, Terrebonne, Repentigny, service nettoyage vitres, entreprise lavage vitre, vidage de gouttières" />
        <meta property="og:title" content="Mr. Clear - Service professionnel de lavage de vitres" />
        <meta property="og:description" content="Service professionnel de nettoyage de vitres résidentiel et commercial à Laval, Montréal, Terrebonne, Repentigny et toute la Rive-Nord." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.mr-clear.com" />
        <meta name="geo.region" content="CA-QC" />
        <meta name="geo.placename" content="Laval, Montréal" />
        <link rel="canonical" href="https://www.mr-clear.com" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <Header />
      <main>
        <Hero />
        <Features />
        <Services />
        <About />
        <Testimonials />
        <QuoteForm />
        <CTA />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
};

export default Index;
