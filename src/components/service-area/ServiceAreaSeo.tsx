import { Helmet } from "react-helmet";
import { buildServiceAreaStructuredData } from "@/consts/seo";

interface ServiceAreaSeoProps {
  city: string;
  description: string;
}

const ServiceAreaSeo = ({ city, description }: ServiceAreaSeoProps) => {
  const structuredData = buildServiceAreaStructuredData(city, description);

  return (
    <Helmet>
      <title>Lavage de Vitres {city} | Mr. Clear - Service professionnel</title>
      <meta
        name="description"
        content={`Service de lavage de vitres résidentiel et commercial à ${city}. Professionnalisme, fiabilité et résultats impeccables. Demandez un devis gratuit!`}
      />
      <meta
        name="keywords"
        content={`lavage de vitres ${city}, nettoyage de vitres ${city}, lavage de fenêtres ${city}, prix lavage de vitres ${city}, entreprise nettoyage vitres ${city}`}
      />
      <meta property="og:title" content={`Lavage de Vitres à ${city} | Mr. Clear`} />
      <meta
        property="og:description"
        content={`Service professionnel de nettoyage de vitres résidentiel et commercial à ${city}. Demandez votre devis gratuit dès maintenant!`}
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`https://mr-clear.com/secteurs/${city.toLowerCase()}`} />
      <meta name="geo.region" content="CA-QC" />
      <meta name="geo.placename" content={city} />
      <link
        rel="canonical"
        href={`https://mr-clear.com/secteurs/${city.toLowerCase()}`}
      />
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default ServiceAreaSeo;
