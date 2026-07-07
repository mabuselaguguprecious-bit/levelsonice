import Image from "next/image";
import { FaArrowRight, FaArrowUp } from "react-icons/fa6";

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-gradient-to-b from-white to-gray-100 py-16 md:py-28 overflow-x-hidden w-full"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ===== HEADING ===== */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
          <p className="uppercase tracking-[4px] md:tracking-[6px] text-lime-500 font-semibold text-xs md:text-sm">
            THE LEVELS ON ICE EXPERIENCE
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mt-4 md:mt-5 leading-[1.1]">
            More Than Just
            <br />
            A Salon Visit
          </h2>
          <div className="flex justify-center mt-4 md:mt-6">
            <span className="w-16 md:w-20 h-1.5 rounded-full bg-gradient-to-r from-lime-400 to-emerald-400" />
          </div>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-7 md:leading-9 mt-6 md:mt-8 max-w-2xl mx-auto px-4">
            Every appointment should feel relaxing, enjoyable and
            memorable. That's why we offer complimentary refreshments,
            free Wi-Fi and professional beauty services all under one roof.
          </p>
        </div>

        {/* ===== TOP ROW ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">

          {/* Left - Student Discount Hero */}
          <div className="relative overflow-hidden rounded-[32px] group min-h-[320px] sm:min-h-[420px] md:min-h-[520px]">
            <Image
              src="/images/About5.jpeg"
              alt="Salon interior"
              width={900}
              height={1200}
              className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 right-6 sm:right-10">
              <p className="uppercase tracking-[4px] md:tracking-[5px] text-lime-400 text-xs md:text-sm font-semibold">
                Student Discount
              </p>
              <h3 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mt-1 md:mt-2 animate-pulse">
                10% OFF
              </h3>
              <p className="text-gray-200 mt-2 md:mt-4 text-xs sm:text-sm md:text-base leading-5 md:leading-7 max-w-md">
                High school learners, college students and university students
                receive <span className="font-semibold text-lime-300">10% OFF</span>.
                Simply present a valid South African ID to qualify.
              </p>
            </div>
            <div className="absolute inset-0 rounded-[32px] ring-1 ring-white/10 ring-inset pointer-events-none" />
          </div>

          {/* Right - 4 Perk Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {[
              { src: "/images/coffee.webp", title: "Complimentary Coffee", desc: "Enjoy a fresh cup of coffee while waiting for your appointment." },
              { src: "/images/juice.webp", title: "Complimentary Juice", desc: "Refresh yourself with a complimentary juice while you relax." },
              { src: "/images/wine.webp", title: "Complimentary Wine", desc: "Sit back and enjoy a complimentary glass of wine during your visit." },
              { src: "/images/HP.jpg", title: "Complimentary Hookah", desc: "Enjoy a complimentary hookah while spending time at the salon." },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-2xl hover:shadow-lime-500/10 hover:-translate-y-3 transition-all duration-300 flex flex-col"
              >
                <div className="relative overflow-hidden h-36 sm:h-44 md:h-48 shrink-0">
                  <Image
                    src={item.src}
                    alt={item.title}
                    width={500}
                    height={350}
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-lime-400 to-emerald-400" />
                </div>
                <div className="p-4 md:p-6 flex-1 flex flex-col justify-center">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 group-hover:text-lime-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mt-1 md:mt-2 text-xs sm:text-sm leading-5 md:leading-6">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ===== BOTTOM ROW ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 mt-6 md:mt-10">

          {/* Wi-Fi Card */}
          <div className="group bg-white rounded-[32px] overflow-hidden shadow-sm border border-gray-200 hover:shadow-2xl hover:shadow-lime-500/10 transition-all duration-300 flex flex-col">
            <div className="relative overflow-hidden h-48 sm:h-56 md:h-64 shrink-0">
              <Image
                src="/images/wifi.webp"
                alt="Free Wi-Fi"
                width={900}
                height={500}
                className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>
            <div className="p-6 md:p-8 flex-1 flex flex-col justify-center">
              <p className="uppercase tracking-[3px] md:tracking-[4px] text-lime-500 font-semibold text-xs md:text-sm">
                COMPLIMENTARY WI-FI
              </p>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mt-1 md:mt-2">
                Stay Connected
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-6 md:leading-7 mt-3 md:mt-4">
                Browse the internet, catch up on work or stay connected with
                complimentary Wi-Fi throughout your visit.
              </p>
            </div>
          </div>

          {/* Why Choose Us - Dark Card */}
          <div className="relative bg-slate-900 rounded-[32px] p-6 md:p-10 text-white flex flex-col justify-center overflow-hidden border border-lime-500/20 shadow-2xl shadow-lime-500/10">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-lime-500/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              <p className="uppercase tracking-[4px] md:tracking-[5px] text-lime-400 font-semibold text-xs md:text-sm">
                WHY CHOOSE US
              </p>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 md:mt-3 leading-tight">
                Beauty, Comfort &<br />Great Service
              </h3>
              <div className="space-y-4 md:space-y-5 mt-6 md:mt-8">
                {[
                  { title: "Ear & Nose Piercing", desc: "Professional ear and nose piercing services available." },
                  { title: "Open 7 Days A Week", desc: "Visit whenever it suits your schedule." },
                  { title: "Professional Team", desc: "Experienced stylists delivering quality work every visit." },
                  { title: "Student Discount", desc: "Enjoy 10% OFF with a valid South African ID to qualify." },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 md:gap-4 group/item">
                    <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-lime-400 text-black flex items-center justify-center font-bold text-xs md:text-sm flex-shrink-0 mt-0.5 transition-transform duration-300 group-hover/item:scale-110 group-hover/item:rotate-12">
                      ✓
                    </div>
                    <div>
                      <h4 className="font-semibold text-base md:text-lg group-hover/item:text-lime-300 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-slate-300 text-xs md:text-sm mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <a
                href="https://wa.me/27813906634"
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn mt-8 md:mt-10 inline-flex items-center gap-2 md:gap-3 bg-lime-400 text-black px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold hover:bg-lime-300 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-lime-400/30 text-sm md:text-base"
              >
                <span>Book Your Appointment</span>
                <FaArrowRight className="text-xs md:text-sm transition-transform duration-300 group-hover/btn:translate-x-2" />
              </a>
            </div>
          </div>
        </div>

        {/* ===== BACK TO TOP ===== */}
        <div className="flex justify-center mt-12 md:mt-16">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-lime-500 transition-colors text-xs md:text-sm font-medium"
          >
            <FaArrowUp className="text-xs" />
            Back to top
          </a>
        </div>

      </div>
    </section>
  );
}