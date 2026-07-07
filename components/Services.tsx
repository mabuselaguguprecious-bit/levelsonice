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
    text: "Professional braids tailored to your style, from classic looks to modern trends.",
  },
  {
    title: "Hair Styling",
    icon: <FaMagic size={42} />,
    text: "Elegant hairstyles for weddings, events, everyday confidence and special occasions.",
  },
  {
    title: "Nail Services",
    icon: <FaPaintBrush size={42} />,
    text: "Acrylic, gel, overlays and creative nail art finished to perfection.",
  },
  {
    title: "Beauty Treatments",
    icon: <FaSpa size={42} />,
    text: "Complete your look with premium beauty treatments designed just for you.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-slate-100 py-24 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="uppercase tracking-[4px] text-lime-500 font-semibold text-sm">
            OUR SERVICES
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900">
            Everything You Need
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Premium beauty services delivered with creativity,
            precision and attention to every detail.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-white rounded-3xl p-10 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="w-16 h-16 rounded-2xl bg-lime-100 flex items-center justify-center text-lime-500 group-hover:bg-lime-400 group-hover:text-black transition duration-300">
                {service.icon}
              </div>

              <h3 className="mt-8 text-2xl font-bold text-slate-900">
                {service.title}
              </h3>

              <p className="mt-4 text-slate-600 leading-7">
                {service.text}
              </p>
            </div>
          ))}

        </div>

        {/* CTA */}
        <div className="mt-20 flex justify-center">
          <a
            href="#booking"
            className="rounded-full bg-black text-white px-8 py-4 text-lg font-semibold hover:bg-slate-800 transition-all duration-300 hover:scale-105"
          >
            Book Your Appointment
          </a>
        </div>

      </div>
    </section>
  );
}