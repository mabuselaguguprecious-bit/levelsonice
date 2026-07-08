import {
  FaCut,
  FaPaintBrush,
  FaSpa,
  FaMagic,
} from "react-icons/fa";

const services = [
  {
    title: "Braiding",
    icon: <FaCut size={42} />,
    text: "Professional braids for every style.",
  },
  {
    title: "Hair Styling",
    icon: <FaMagic size={42} />,
    text: "Beautiful hairstyles for every occasion.",
  },
  {
    title: "Nails",
    icon: <FaPaintBrush size={42} />,
    text: "Gel, acrylic and nail art services.",
  },
  {
    title: "Beauty",
    icon: <FaSpa size={42} />,
    text: "Beauty treatments to complete your look.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-slate-100 py-16 sm:py-20 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-12 lg:mb-16">

          <p className="uppercase tracking-[6px] text-lime-500 font-semibold text-sm">
            OUR SERVICES
          </p>

          <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-slate-900">
            What We Offer
          </h2>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-lime-500 mb-6">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {service.text}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}