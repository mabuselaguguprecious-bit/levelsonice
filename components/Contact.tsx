import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

export default function ContactBest() {
  return (
    <section
      id="contact"
      className="relative py-16 md:py-24 overflow-x-hidden w-full bg-[#f8fafc]"
    >
      {/* Subtle Background Texture */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNjY2NjY2MiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-40" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="text-center mb-12 md:mb-20">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-[2px] bg-lime-300 rounded-full" />
            <p className="uppercase tracking-[6px] text-lime-600 font-semibold text-sm">
              CONTACT US
            </p>
            <div className = "h-3" /> 
            <div className="w-12 h-[2px] bg-lime-300 rounded-full" />
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 tracking-tight">
            Visit Our <span className="text-lime-600">Salon</span>
          </h2>
<div className = "h-3.5" /> 
          <div className="flex justify-center mt-5">
            <div className="w-24 h-1.5 bg-gradient-to-r from-lime-400 to-lime-600 rounded-full" />
          </div>
<div className = "h-6" /> 
          <p className="text-gray-500 mt-6 max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed px-4">
            We'd love to welcome you. Visit us in Mowbray or contact us to book your next appointment.
          </p>
        </div>
<div className = "h-4" /> 
        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-10">
          {/* LEFT: Contact Cards */}
          <div className="lg:col-span-3 space-y-4 md:space-y-6">
            {/* 1. Address */}
            <div className="group flex flex-col sm:flex-row items-start gap-4 sm:gap-6 bg-white/80 backdrop-blur-sm border border-gray-200/80 p-5 sm:p-7 rounded-3xl shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-lime-200/30 transition-all duration-500 hover:-translate-y-1.5">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-lime-100 to-lime-200 rounded-2xl flex items-center justify-center text-lime-700 text-xl sm:text-2xl shadow-inner shrink-0 group-hover:scale-105 transition-transform">
                <FaMapMarkerAlt />
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <h3 className="font-bold text-lg sm:text-xl text-gray-800">Address</h3>
                  <span className="text-xs font-medium text-lime-600 bg-lime-50 px-3 py-1 rounded-full border border-lime-200/50 w-fit">
                    Visit us
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed mt-1 text-sm sm:text-base">
                  102 Main Road
                  <br />
                  <span className="text-gray-500 text-xs sm:text-sm">
                    Opposite the old ABSA Bank
                  </span>
                  <br />
                  Mowbray, Cape Town, 7700
                </p>
              </div>
            </div>

            {/* 2. Phone */}
            <div className="group flex flex-col sm:flex-row items-start gap-4 sm:gap-6 bg-white/80 backdrop-blur-sm border border-gray-200/80 p-5 sm:p-7 rounded-3xl shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-lime-200/30 transition-all duration-500 hover:-translate-y-1.5">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-lime-100 to-lime-200 rounded-2xl flex items-center justify-center text-lime-700 text-xl sm:text-2xl shadow-inner shrink-0 group-hover:scale-105 transition-transform">
                <FaPhoneAlt />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg sm:text-xl text-gray-800">Phone</h3>
                <a
                  href="tel:0813906634"
                  className="text-gray-600 text-base sm:text-lg hover:text-lime-700 transition-colors font-medium"
                >
                  081 390 6634
                </a>
              </div>
            </div>

            {/* 3. Email */}
            <div className="group flex flex-col sm:flex-row items-start gap-4 sm:gap-6 bg-white/80 backdrop-blur-sm border border-gray-200/80 p-5 sm:p-7 rounded-3xl shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-lime-200/30 transition-all duration-500 hover:-translate-y-1.5">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-lime-100 to-lime-200 rounded-2xl flex items-center justify-center text-lime-700 text-xl sm:text-2xl shadow-inner shrink-0 group-hover:scale-105 transition-transform">
                <FaEnvelope />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg sm:text-xl text-gray-800">Email</h3>
                <a
                  href="mailto:levelsonicegroup@gmail.com"
                  className="text-gray-600 text-sm sm:text-lg hover:text-lime-700 transition-colors break-all"
                >
                  levelsonicegroup@gmail.com
                </a>
              </div>
            </div>

            {/* 4. Hours + Book Now CTA */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-6">
              <div className="md:col-span-3 group flex flex-col sm:flex-row items-start gap-4 sm:gap-6 bg-white/80 backdrop-blur-sm border border-gray-200/80 p-5 sm:p-7 rounded-3xl shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-lime-200/30 transition-all duration-500 hover:-translate-y-1.5">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-lime-100 to-lime-200 rounded-2xl flex items-center justify-center text-lime-700 text-xl sm:text-2xl shadow-inner shrink-0 group-hover:scale-105 transition-transform">
                  <FaClock />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg sm:text-xl text-gray-800">Hours</h3>
                  <div className="text-gray-600 text-xs sm:text-sm space-y-0.5 mt-1">
                    <p className="flex justify-between"><span>Mon – Fri</span> <span className="font-medium">09:00 – 18:00</span></p>
                    <p className="flex justify-between"><span>Saturday</span> <span className="font-medium">09:00 – 17:00</span></p>
                    <p className="flex justify-between"><span>Sunday</span> <span className="font-medium">11:00 – 15:00</span></p>
                  </div>
                </div>
              </div>

              {/* Quick Book Now Button */}
              <div className="md:col-span-2 flex items-stretch">
                <a
                  href="#booking"
                  className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-lime-500 to-lime-600 hover:from-lime-600 hover:to-lime-700 text-white font-bold py-5 md:py-6 px-6 md:px-8 rounded-3xl shadow-lg shadow-lime-200/60 hover:shadow-xl hover:shadow-lime-300/70 transition-all duration-300 group text-base md:text-lg"
                >
                  <span>Book Now</span>
                  <FaArrowRight className="group-hover:translate-x-1.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT: Map */}
          <div className="lg:col-span-2 flex flex-col">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-gray-300/50 border-2 border-white/50 bg-white p-1.5 transition-all duration-500 hover:shadow-2xl hover:shadow-lime-200/30 group/map">
              <div className="rounded-2xl overflow-hidden h-64 sm:h-80 md:h-96 lg:h-[620px]">
                <iframe
                  src="https://www.google.com/maps?q=102+Main+Road+Mowbray+Cape+Town&output=embed"
                  className="w-full h-full"
                  loading="lazy"
                  title="Levels On Ice Salon Location"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 w-32 h-32 bg-lime-400/10 blur-2xl rounded-full -z-10" />
            </div>

            <a
              href="https://www.google.com/maps/dir/?api=1&destination=102+Main+Road+Mowbray+Cape+Town"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 md:mt-6 flex items-center justify-center gap-3 bg-white border border-gray-200 hover:border-lime-400 text-gray-700 hover:text-lime-700 font-semibold py-3 md:py-4 px-6 md:px-8 rounded-2xl transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 group text-sm md:text-base"
            >
              <span>Get Directions</span>
              <FaCheckCircle className="text-lime-500 group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}