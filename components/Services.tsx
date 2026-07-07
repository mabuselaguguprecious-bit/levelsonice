import {
  FaCut,
  FaPaintBrush,
  FaSpa,
  FaMagic,
} from "react-icons/fa";

const services = [
  {
    title: "Braiding",
    icon: <FaCut size={38} />,
    text: "Professional braids for every style."
  },
  {
    title: "Hair Styling",
    icon: <FaMagic size={38} />,
    text: "Beautiful hairstyles for every occasion."
  },
  {
    title: "Nails",
    icon: <FaPaintBrush size={38} />,
    text: "Gel, acrylic and nail art services."
  },
  {
    title: "Beauty",
    icon: <FaSpa size={38} />,
    text: "Beauty treatments to complete your look."
  }
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-slate-100 py-16 md:py-24 overflow-x-hidden w-full"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12 md:mb-20">
          <p className="text-lime-500 uppercase font-semibold tracking-[4px] md:tracking-[5px] text-xs md:text-sm">
            OUR SERVICES
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mt-3">
            What We Offer
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-slate-50 rounded-2xl md:rounded-3xl p-6 md:p-10 shadow hover:shadow-xl transition"
            >
              <div className="text-lime-500 mb-4 md:mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2 md:mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                {service.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}