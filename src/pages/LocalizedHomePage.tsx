import HomePage from "@/pages/HomePage";
import NotFound from "@/pages/NotFound";
import { getServiceAreaBySlug } from "@/consts/service-areas";
import { getServiceAreaPageContent } from "@/consts/service-area-content";
import { useParams } from "react-router-dom";

const LOCALIZED_PREFIX = "lavage-de-vitres-";

const LocalizedHomePage = () => {
  const { localizedSlug } = useParams<{ localizedSlug: string }>();
  const normalizedPathSlug = localizedSlug?.toLowerCase() ?? "";

  if (!normalizedPathSlug.startsWith(LOCALIZED_PREFIX)) {
    return <NotFound />;
  }

  const normalizedSlug = normalizedPathSlug.slice(LOCALIZED_PREFIX.length);
  const serviceArea = getServiceAreaBySlug(normalizedSlug);

  if (!serviceArea) {
    return <NotFound />;
  }

  return <HomePage serviceArea={getServiceAreaPageContent(serviceArea.slug)} />;
};

export default LocalizedHomePage;
