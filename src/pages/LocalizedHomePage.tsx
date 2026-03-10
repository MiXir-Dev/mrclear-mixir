import HomePage from "@/pages/HomePage";
import NotFound from "@/pages/NotFound";
import { getServiceAreaBySlug } from "@/consts/service-areas";
import { getServiceAreaPageContent } from "@/consts/service-area-content";
import { useParams } from "react-router-dom";

const LocalizedHomePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const normalizedSlug = slug?.toLowerCase() ?? "";
  const serviceArea = getServiceAreaBySlug(normalizedSlug);

  if (!serviceArea) {
    return <NotFound />;
  }

  return <HomePage serviceArea={getServiceAreaPageContent(serviceArea.slug)} />;
};

export default LocalizedHomePage;
