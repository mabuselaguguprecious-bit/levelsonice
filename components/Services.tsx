import {
  FaCut,
  FaPaintBrush,
  FaSpa,
  FaMagic,
} from "react-icons/fa";

const services = [
  {
    title: "Braiding",
    icon: <FaCut size={48} />,
    text: "Professional braids for every style and occasion.",
  },
  {
    title: "Hair Styling",
    icon: <FaMagic size={48} />,
    text: "Beautiful hairstyles tailored to your look.",
  },
  {
    title: "Nails",
    icon: <FaPaintBrush size={48} />,
    text: "Gel, acrylic and stunning nail art services.",
  },
  {
    title: "Beauty",
    icon: <FaSpa size={48} />,
    text: "Professional beauty treatments to complete your look.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-slate-100 py-20 lg:py-28"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">

          <p className="uppercase tracking-[7px] text-lime-500 font-semibold text-sm">
            OUR SERVICES
          </p>
<div className = "h-1.5" />
          <h2 className="mt-4 text-4xl md:text-5xl lg:text-4.5xl font-bold text-slate-900">
            What We Offer
          </h2>
<div className="flex justify-center mt-3000">
  <span className="w-70 h-1.5 rounded-full bg-gradient-to-r from-lime-100 to-emerald-400" />
</div>
<div className = "h-3" />
          <p className="mt-6 text-gray-600 text-lg leading-8">
            From precision braiding to flawless nails and beauty treatments,
            we're committed to helping you look and feel your absolute best.
          </p>
<div className = "h-3" />
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">

          {services.map((service) => (

            <div
              key={service.title}
              className="group bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 border border-transparent hover:border-lime-300"
            >

              {/* Icon */}
              <div className="w-20 h-20 rounded-2xl bg-lime-100 flex items-center justify-center text-lime-500 mb-8 group-hover:bg-lime-500 group-hover:text-white transition-all duration-300">

                {service.icon}

              </div>

              {/* Title */}
              <h3 className="text-3xl font-bold text-slate-900 mb-5">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-8 text-lg">
                {service.text}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}