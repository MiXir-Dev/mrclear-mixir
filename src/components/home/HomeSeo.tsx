import { Helmet } from "react-helmet";
import { ServiceAreaPageContent } from "@/consts/service-area-content";
import { getHomeSeo } from "@/components/home/getHomeSeo";

interface HomeSeoProps {
  serviceArea?: ServiceAreaPageContent;
}

const HomeSeo = ({ serviceArea }: HomeSeoProps) => {
  const seo = getHomeSeo(serviceArea);

  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />
      <meta property="og:title" content={seo.ogTitle} />
      <meta property="og:description" content={seo.ogDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={seo.ogUrl} />
      <meta name="geo.region" content={seo.geoRegion} />
      <meta name="geo.placename" content={seo.geoPlacename} />
      <link rel="canonical" href={seo.canonicalUrl} />
      <script type="application/ld+json">
        {JSON.stringify(seo.structuredData)}
      </script>
    </Helmet>
  );
};

export default HomeSeo;
