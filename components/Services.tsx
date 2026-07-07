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
      className="bg-slate-100 py-24"
    >

      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-20">

          <p className="text-lime-500 uppercase font-semibold tracking-[5px]">
            OUR SERVICES
          </p>

          <h2 className="text-5xl font-bold text-slate-900 mt-3">
            What We Offer
          </h2>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {services.map((service) => (

            <div
              key={service.title}
              className="bg-slate-50 rounded-3xl p-10 shadow hover:shadow-xl transition"
            >

              <div className="text-lime-500 mb-6">

                {service.icon}

              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-4">

                {service.title}

              </h3>

              <p className="text-gray-600">

                {service.text}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>

  );

}