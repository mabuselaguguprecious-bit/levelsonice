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
    <section className="bg-white py-16 md:py-24 overflow-x-hidden w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12 md:mb-16">
          <p className="uppercase tracking-[4px] md:tracking-[5px] text-lime-500 font-semibold text-xs md:text-sm">
            WHY CHOOSE US
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mt-3">
            Why Clients Love Levels On Ice
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg mt-4 md:mt-6 max-w-3xl mx-auto px-4 leading-7 md:leading-8">
            We’re passionate about helping every client look and feel their
            best with quality service, attention to detail and a friendly
            experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((item) => (
            <div
              key={item.title}
              className="bg-slate-50 rounded-2xl md:rounded-3xl p-6 md:p-10 text-center hover:shadow-xl transition duration-300"
            >
              <div className="text-lime-500 flex justify-center mb-4 md:mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-slate-900">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-6 md:leading-7">
                {item.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}