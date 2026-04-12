import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

const FORM_EMBED_SCRIPT_SRC = "https://link.msgsndr.com/js/form_embed.js";
const FORM_IFRAME_SRC = "https://api.leadconnectorhq.com/widget/form/NizeK1VEZuXikh2ce8xQ";
const FORM_HEIGHT_PX = 997;

const QuoteForm = () => {
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);

  useEffect(() => {
    const existingScript = document.querySelector(
      `script[src="${FORM_EMBED_SCRIPT_SRC}"]`
    );

    if (existingScript) {
      return;
    }

    const script = document.createElement("script");
    script.src = FORM_EMBED_SCRIPT_SRC;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section id="soumission" className="py-20 bg-white">
      <Helmet>
        <link rel="preconnect" href="https://api.leadconnectorhq.com" />
        <link rel="preconnect" href="https://backend.leadconnectorhq.com" />
        <link rel="preconnect" href="https://link.msgsndr.com" />
        <link rel="dns-prefetch" href="//api.leadconnectorhq.com" />
        <link rel="dns-prefetch" href="//backend.leadconnectorhq.com" />
        <link rel="dns-prefetch" href="//link.msgsndr.com" />
      </Helmet>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="relative w-full" style={{ minHeight: `${FORM_HEIGHT_PX}px` }}>
            {!isIframeLoaded && (
              <div className="absolute inset-0 z-10 flex items-center justify-center rounded bg-gray-100 text-sm text-gray-700">
                Chargement du formulaire...
              </div>
            )}
            <iframe
              src={FORM_IFRAME_SRC}
              style={{
                width: "100%",
                minHeight: `${FORM_HEIGHT_PX}px`,
                border: "none",
                borderRadius: "3px",
                opacity: isIframeLoaded ? 1 : 0,
                transition: "opacity 200ms ease",
              }}
              id="inline-NizeK1VEZuXikh2ce8xQ"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Devis Gratuit"
              data-height="997"
              data-layout-iframe-id="inline-NizeK1VEZuXikh2ce8xQ"
              data-form-id="NizeK1VEZuXikh2ce8xQ"
              title="Devis Gratuit"
              loading="eager"
              onLoad={() => setIsIframeLoaded(true)}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;
