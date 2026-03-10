import { Helmet } from "react-helmet";
import { HOME_SEO, HOME_STRUCTURED_DATA } from "@/consts/seo";

const HomeSeo = () => {
  return (
    <Helmet>
      <title>{HOME_SEO.title}</title>
      <meta name="description" content={HOME_SEO.description} />
      <meta name="keywords" content={HOME_SEO.keywords} />
      <meta property="og:title" content={HOME_SEO.ogTitle} />
      <meta property="og:description" content={HOME_SEO.ogDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={HOME_SEO.ogUrl} />
      <meta name="geo.region" content={HOME_SEO.geoRegion} />
      <meta name="geo.placename" content={HOME_SEO.geoPlacename} />
      <link rel="canonical" href={HOME_SEO.canonicalUrl} />
      <script type="application/ld+json">
        {JSON.stringify(HOME_STRUCTURED_DATA)}
      </script>
    </Helmet>
  );
};

export default HomeSeo;
