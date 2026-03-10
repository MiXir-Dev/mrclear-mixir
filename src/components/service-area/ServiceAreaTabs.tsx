import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { COMMERCIAL_SERVICES, RESIDENTIAL_SERVICES } from "@/consts/service-area";

const ServiceAreaTabs = () => {
  const [activeTab, setActiveTab] = useState<"residential" | "commercial">(
    "residential"
  );

  return (
    <div className="mb-8">
      <div className="flex border-b border-gray-200 mb-6">
        <button
          type="button"
          className={`py-2 px-4 font-medium transition-colors ${
            activeTab === "residential"
              ? "text-brand-blue border-b-2 border-brand-blue"
              : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => setActiveTab("residential")}
        >
          Résidentiel
        </button>
        <button
          type="button"
          className={`py-2 px-4 font-medium transition-colors ${
            activeTab === "commercial"
              ? "text-brand-blue border-b-2 border-brand-blue"
              : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => setActiveTab("commercial")}
        >
          Commercial
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {activeTab === "residential" ? (
          <>
            <Card className="shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  Services résidentiels
                </h3>
                <ul className="space-y-2 list-disc pl-5">
                  {RESIDENTIAL_SERVICES.map((service) => (
                    <li key={service}>{service}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <div className="bg-gray-50 rounded-lg flex items-center justify-center overflow-hidden h-64">
              <img
                src="/res-window-cleaning.png"
                alt="Service résidentiel"
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
          </>
        ) : (
          <>
            <div className="bg-gray-50 rounded-lg h-full flex items-center justify-center overflow-hidden">
              <img
                src="/res-commercial-cleaning.png"
                alt="Service commercial"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <Card className="shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  Services commerciaux
                </h3>
                <ul className="space-y-2 list-disc pl-5">
                  {COMMERCIAL_SERVICES.map((service) => (
                    <li key={service}>{service}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </>
        )}
      </div>
    </div>
  );
};

export default ServiceAreaTabs;
