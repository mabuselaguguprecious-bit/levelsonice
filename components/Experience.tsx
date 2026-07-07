import Image from "next/image";
import { FaArrowRight, FaArrowUp } from "react-icons/fa6";

export default function Experience() {
  return (
  <section
    id="experience"
    className="bg-gradient-to-b from-white to-gray-100 py-28"
  >
      <div className="max-w-7xl mx-auto px-8">

        {/* ===== HEADING ===== */}
        <div className="text-center max-w-3xl mx-auto mb-20">

          <p className="uppercase tracking-[6px] text-lime-500 font-semibold text-sm">
            THE LEVELS ON ICE EXPERIENCE
          </p>

          <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mt-5 leading-[1.1]">
            More Than Just
            <br />
            A Salon Visit
          </h2>

          <div className="flex justify-center mt-6">
            <span className="w-20 h-1.5 rounded-full bg-gradient-to-r from-lime-400 to-emerald-400" />
          </div>

          <p className="text-gray-600 text-lg leading-9 mt-8 max-w-2xl mx-auto">
            Every appointment should feel relaxing, enjoyable and
            memorable. That's why we offer complimentary refreshments,
            free Wi-Fi and professional beauty services all under one roof.
          </p>

        </div>

        {/* ===== TOP ROW ===== */}
        <div className="grid lg:grid-cols-2 gap-10">

          {/* Left - Student Discount Hero */}
          <div className="relative overflow-hidden rounded-[32px] group min-h-[520px]">

            <Image
              src="/images/About5.jpeg"
              alt="Salon interior"
              width={900}
              height={1200}
              className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

            <div className="absolute bottom-10 left-10 right-10">
              <p className="uppercase tracking-[5px] text-lime-400 text-sm font-semibold">
                Student Discount
              </p>
              <h3 className="text-6xl font-black text-white mt-2 animate-pulse">
                10% OFF
              </h3>
              <p className="text-gray-200 mt-4 text-base leading-7 max-w-md">
                High school learners, college students and university students
                receive <span className="font-semibold text-lime-300">10% OFF</span>.
                Simply present a valid South African ID to qualify.
              </p>
            </div>

            <div className="absolute inset-0 rounded-[32px] ring-1 ring-white/10 ring-inset pointer-events-none" />

          </div>

          {/* Right - 4 Perk Cards */}
          <div className="grid sm:grid-cols-2 gap-6">

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
                <div className="relative overflow-hidden h-48 shrink-0">
                  <Image
                    src={item.src}
                    alt={item.title}
                    width={500}
                    height={350}
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-lime-400 to-emerald-400" />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-center">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-lime-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mt-2 text-sm leading-6">{item.desc}</p>
                </div>
              </div>
            ))}

          </div>

        </div>

        {/* ===== BOTTOM ROW ===== */}
        <div className="grid lg:grid-cols-2 gap-10 mt-10">

          {/* Wi-Fi Card */}
          <div className="group bg-white rounded-[32px] overflow-hidden shadow-sm border border-gray-200 hover:shadow-2xl hover:shadow-lime-500/10 transition-all duration-300 flex flex-col">

            <div className="relative overflow-hidden h-64 shrink-0">
              <Image
                src="/images/wifi.webp"
                alt="Free Wi-Fi"
                width={900}
                height={500}
                className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>

            <div className="p-8 flex-1 flex flex-col justify-center">
              <p className="uppercase tracking-[4px] text-lime-500 font-semibold text-sm">
                COMPLIMENTARY WI-FI
              </p>
              <h3 className="text-3xl font-bold text-slate-900 mt-2">
                Stay Connected
              </h3>
              <p className="text-gray-600 leading-7 mt-4">
                Browse the internet, catch up on work or stay connected with
                complimentary Wi-Fi throughout your visit.
              </p>
            </div>

          </div>

          {/* Why Choose Us - Dark Card */}
          <div className="relative bg-slate-900 rounded-[32px] p-10 text-white flex flex-col justify-center overflow-hidden border border-lime-500/20 shadow-2xl shadow-lime-500/10">

            <div className="absolute -top-20 -right-20 w-64 h-64 bg-lime-500/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />

            <div className="relative z-10">
              <p className="uppercase tracking-[5px] text-lime-400 font-semibold text-sm">
                WHY CHOOSE US
              </p>

              <h3 className="text-4xl font-bold mt-3 leading-tight">
                Beauty, Comfort &<br />Great Service
              </h3>

              <div className="space-y-5 mt-8">

                {[
                  { title: "Ear & Nose Piercing", desc: "Professional ear and nose piercing services available." },
                  { title: "Open 7 Days A Week", desc: "Visit whenever it suits your schedule." },
                  { title: "Professional Team", desc: "Experienced stylists delivering quality work every visit." },
                  { title: "Student Discount", desc: "Enjoy 10% OFF with a valid South African ID to qualify." },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 group/item">
                    <div className="w-7 h-7 rounded-full bg-lime-400 text-black flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5 transition-transform duration-300 group-hover/item:scale-110 group-hover/item:rotate-12">
                      ✓
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg group-hover/item:text-lime-300 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-slate-300 text-sm mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}

              </div>

              <a
                href="https://wa.me/27813906634"
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn mt-10 inline-flex items-center gap-3 bg-lime-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-lime-300 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-lime-400/30"
              >
                <span>Book Your Appointment</span>
                <FaArrowRight className="text-sm transition-transform duration-300 group-hover/btn:translate-x-2" />
              </a>

            </div>

          </div>

        </div>

        {/* ===== BACK TO TOP ===== */}
        <div className="flex justify-center mt-16">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-lime-500 transition-colors text-sm font-medium"
          >
            <FaArrowUp className="text-xs" />
            Back to top
          </a>
        </div>

      </div>

    </section>
  );
}
