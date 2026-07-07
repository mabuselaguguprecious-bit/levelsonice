import {
  FaAward,
  FaSmile,
  FaClock,
  FaMapMarkerAlt,
} from "react-icons/fa";

const features = [
  {
    icon: <FaAward size={40} />,
    title: "Professional Service",
    text: "Quality hair, nails and beauty services tailored to your style.",
  },
  {
    icon: <FaSmile size={40} />,
    title: "Friendly Environment",
    text: "Enjoy a welcoming atmosphere where every client feels comfortable.",
  },
  {
    icon: <FaClock size={40} />,
    title: "Convenient Hours",
    text: "Open 7 days a week to fit your busy schedule.",
  },
  {
    icon: <FaMapMarkerAlt size={40} />,
    title: "Easy to Find",
    text: "Located in the heart of Mowbray, Cape Town.",
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-white py-24">

      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[5px] text-lime-500 font-semibold">
            WHY CHOOSE US
          </p>

          <h2 className="text-5xl font-bold text-slate-900 mt-3">
            Why Clients Love Levels On Ice
          </h2>

          <p className="text-gray-600 mt-6 max-w-3xl mx-auto">
            We’re passionate about helping every client look and feel their
            best with quality service, attention to detail and a friendly
            experience.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((item) => (

            <div
              key={item.title}
              className="bg-slate-50 rounded-3xl p-10 text-center hover:shadow-xl transition duration-300"
            >

              <div className="text-lime-500 flex justify-center mb-6">

                {item.icon}

              </div>

              <h3 className="text-2xl font-bold mb-4 text-slate-900">

                {item.title}

              </h3>

              <p className="text-gray-600 leading-7">

                {item.text}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}