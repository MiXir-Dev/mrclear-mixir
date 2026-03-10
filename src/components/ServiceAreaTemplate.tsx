import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ServiceAreaBenefits from "@/components/service-area/ServiceAreaBenefits";
import ServiceAreaCta from "@/components/service-area/ServiceAreaCta";
import ServiceAreaHero from "@/components/service-area/ServiceAreaHero";
import ServiceAreaSeo from "@/components/service-area/ServiceAreaSeo";
import ServiceAreaSidebar from "@/components/service-area/ServiceAreaSidebar";
import ServiceAreaTabs from "@/components/service-area/ServiceAreaTabs";
import ServiceAreaTestimonials from "@/components/service-area/ServiceAreaTestimonials";

interface ServiceAreaProps {
  city: string;
  description: string;
  imagePath?: string;
}

const ServiceAreaTemplate = ({
  city,
  description,
  imagePath = "/images/window-cleaning.png",
}: ServiceAreaProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <ServiceAreaSeo city={city} description={description} />
      <Header />

      <div className="py-8 bg-gradient-to-b from-brand-blue/5 to-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            <ServiceAreaSidebar city={city} />

            <main className="md:w-3/4">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <ServiceAreaHero city={city} imagePath={imagePath} />

                <div className="p-6 md:p-8">
                  <div className="prose max-w-none">
                    <p className="text-lg text-gray-700 mb-6">{description}</p>

                    <ServiceAreaTabs />

                    <h2 className="text-2xl font-semibold mb-4">
                      Pourquoi choisir Mr. Clear à {city}?
                    </h2>
                    <ServiceAreaBenefits />

                    <ServiceAreaCta city={city} />
                    <ServiceAreaTestimonials />
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ServiceAreaTemplate;
