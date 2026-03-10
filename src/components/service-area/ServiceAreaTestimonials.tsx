import { SERVICE_AREA_TESTIMONIALS } from "@/consts/service-area";

const ServiceAreaTestimonials = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Ce que nos clients disent</h2>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {SERVICE_AREA_TESTIMONIALS.map((testimonial) => (
          <div
            key={testimonial.author}
            className="bg-gray-50 p-5 rounded-lg italic border-l-4 border-brand-blue"
          >
            <p className="mb-3">"{testimonial.quote}"</p>
            <p className="font-medium not-italic">{testimonial.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceAreaTestimonials;
