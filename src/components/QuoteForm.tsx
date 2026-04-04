import { useEffect } from "react";

const FORM_EMBED_SCRIPT_SRC = "https://link.msgsndr.com/js/form_embed.js";

const QuoteForm = () => {
  useEffect(() => {
    const existingScript = document.querySelector(
      `script[src="${FORM_EMBED_SCRIPT_SRC}"]`
    );

    if (existingScript) {
      return;
    }

    const script = document.createElement("script");
    script.src = FORM_EMBED_SCRIPT_SRC;
    document.body.appendChild(script);
  }, []);

  return (
    <section id="soumission" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-4 sm:p-6 md:p-8">
            <div className="w-full h-[997px]">
              <iframe
                src="https://api.leadconnectorhq.com/widget/form/NizeK1VEZuXikh2ce8xQ"
                style={{
                  width: "100%",
                  height: "100%",
                  border: "none",
                  borderRadius: "3px",
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
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;
