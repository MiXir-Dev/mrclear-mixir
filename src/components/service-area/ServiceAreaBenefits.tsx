import { SERVICE_AREA_BENEFITS } from "@/consts/service-area";

const ServiceAreaBenefits = () => {
  return (
    <div className="grid md:grid-cols-3 gap-4 mb-8">
      {SERVICE_AREA_BENEFITS.map((benefit) => (
        <div key={benefit.title} className="bg-gray-50 p-5 rounded-lg text-center">
          <div className="bg-brand-blue/10 mx-auto mb-3 w-12 h-12 flex items-center justify-center rounded-full">
            {benefit.icon === "check" && (
              <svg
                className="w-6 h-6 text-brand-blue"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            )}
            {benefit.icon === "bolt" && (
              <svg
                className="w-6 h-6 text-brand-blue"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            )}
            {benefit.icon === "coin" && (
              <svg
                className="w-6 h-6 text-brand-blue"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            )}
          </div>
          <h3 className="font-semibold mb-1">{benefit.title}</h3>
          <p className="text-sm text-gray-600">{benefit.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ServiceAreaBenefits;
