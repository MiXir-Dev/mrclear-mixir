const SERVICE_AREA_PATH_PREFIX = "/lavage-de-vitres-";
export const QUOTE_PATH = "/soumission-lavage-de-vitres";
const isRootHomePath = (pathname: string) => pathname === "/";

export const isServiceAreaPath = (path: string) =>
  path.startsWith(SERVICE_AREA_PATH_PREFIX);

export const shouldOpenQuoteInNewTab = (currentPath: string) =>
  isRootHomePath(currentPath);

export const shouldOpenRouteInNewTab = (
  currentPath: string,
  destinationPath: string
) => isRootHomePath(currentPath) && isServiceAreaPath(destinationPath);

export const getNewTabLinkProps = (shouldOpenInNewTab: boolean) =>
  shouldOpenInNewTab
    ? ({ target: "_blank", rel: "noopener noreferrer" } as const)
    : {};

export const openPathInNewTab = (path: string) =>
  window.open(path, "_blank", "noopener,noreferrer");
