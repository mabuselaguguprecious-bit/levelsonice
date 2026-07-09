import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-gradient-to-b from-white via-slate-50 to-gray-100 py-24 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* ================= HEADING ================= */}
        <div className="max-w-3xl mx-auto text-center mb-20">

          <p className="uppercase tracking-[6px] text-lime-500 font-semibold text-sm">
            THE LEVELS ON ICE EXPERIENCE
          </p>

          <h2 className="mt-5 text-5xl lg:text-5xl font-bold text-slate-900 leading-tight">
            More Than Just
            <br />
            A Salon Visit
          </h2>

          <div className="flex justify-center mt-7">
            <span className="w-24 h-1.5 rounded-full bg-gradient-to-r from-lime-400 to-emerald-400" />
          </div>
<div className="h-6" />
          <p className="mt-8 text-lg leading-9 text-slate-600 max-w-2xl mx-auto">
            Every appointment should feel relaxing, enjoyable and memorable.
            That's why we offer complimentary refreshments, free Wi-Fi and
            professional beauty services in a comfortable environment.
          </p>

        </div>

        {/* ================= TOP ROW ================= */}
        <div className="grid lg:grid-cols-2 gap-10">

          {/* Student Discount */}
          <div className="relative min-h-[540px] overflow-hidden rounded-[32px] group shadow-xl">

            <Image
              src="/images/About5.jpeg"
              alt="Student Discount"
              width={900}
              height={1200}
              className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

            <div className="absolute bottom-10 left-10 right-10">

              <p className="uppercase tracking-[5px] text-lime-400 font-semibold text-sm">
                Student Discount
              </p>

              <h3 className="mt-2 text-6xl lg:text-7xl font-black text-white">
                10% OFF
              </h3>

              <p className="mt-5 text-gray-200 leading-7 max-w-md">
  Enjoy{" "}
  <span className="text-lime-300 font-semibold">
    10% OFF
  </span>{" "}
  when you present a valid student ID. Available to high school learners,
  college students, and university students.
</p>
            </div>

            <div className="absolute inset-0 ring-1 ring-white/10 rounded-[32px]" />

          </div>

          {/* Complimentary Cards */}
          <div className="grid sm:grid-cols-2 gap-6">

            {[
              {
                src: "/images/coffee.webp",
                title: "Complimentary Coffee",
                desc: "Enjoy a fresh cup of coffee while waiting for your appointment.",
              },
              {
                src: "/images/juice.webp",
                title: "Complimentary Juice",
                desc: "Refresh yourself with a complimentary juice while you relax.",
              },
              {
                src: "/images/wine.webp",
                title: "Complimentary Wine",
                desc: "Sit back and enjoy a complimentary glass of wine during your visit.",
              },
              {
                src: "/images/HP.jpg",
                title: "Complimentary Hookah",
                desc: "Enjoy a complimentary hookah while spending time at the salon.",
              },
            ].map((item, index) => (

              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
              >

                <div className="relative h-48 overflow-hidden">

                  <Image
                    src={item.src}
                    alt={item.title}
                    width={500}
                    height={350}
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                  />

                  <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-lime-400 to-emerald-400" />

                </div>

                <div className="p-6">

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-lime-600 transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-gray-600 leading-6 text-sm">
                    {item.desc}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>
        <div className="h-8" /> 

        {/* Bottom Row */}
        <div className="mt-20 grid lg:grid-cols-2 gap-10">
                    {/* ================= Wi-Fi Card ================= */}
          <div className="bg-white rounded-[9px] overflow-hidden border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 group">

            <div className="relative h-72 overflow-hidden">

              <Image
                src="/images/wifi.webp"
                alt="Complimentary Wi-Fi"
                width={900}
                height={600}
                className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />

            </div>

            <div className="p-8">

              <p className="uppercase tracking-[5px] text-lime-500 font-semibold text-sm">
                COMPLIMENTARY WI-FI
              </p>

              <h3 className="mt-3 text-3xl lg:text-4xl font-bold text-slate-900">
                Stay Connected
              </h3>

              <p className="mt-5 text-gray-600 leading-8">
                Enjoy complimentary high-speed Wi-Fi while you relax,
                work remotely or stay connected during your appointment.
                Every visit is designed to be as comfortable and convenient
                as possible.
              </p>

            </div>

          </div>
                    {/* ================= WHY CHOOSE US ================= */}
          <div className="bg-white rounded-[9px] border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 p-10 pb-24 flex flex-col justify-between">

            <div>

              <p className="uppercase tracking-[5px] text-lime-500 font-semibold text-sm">
                WHY CHOOSE US
              </p>

              <h3 className="mt-4 text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                Beauty, Comfort &
                <br />
                Great Service
              </h3>

              <p className="mt-5 text-gray-600 text-lg leading-7">
                We go beyond great hairstyles. Every client enjoys a welcoming
                environment, professional service and thoughtful extras that
                make every appointment memorable.
              </p>
<div className="h-3" />
              <div className="mt-20 grid lg:grid-cols-2 gap-10">

                {[
                  {
                    title: "Ear & Nose Piercing",
                    desc: "Professional ear and nose piercing services available.",
                  },
                  {
                    title: "Open 7 Days A Week",
                    desc: "Flexible operating hours to fit your schedule.",
                  },
                  {
                    title: "Professional Team",
                    desc: "Experienced stylists dedicated to exceptional results.",
                  },
                  {
                    title: "10% Student Discount",
                    desc: "Available with a valid student ID.",
                  },
                ].map((item, idx) => (

                  <div
                    key={idx}
                    className="flex items-start gap-5"
                  >

                    <div className="w-10 h-10 rounded-full bg-lime-400 flex items-center justify-center text-black font-bold shadow-md shrink-0">
                      ✓
                    </div>

                    <div>

                      <h4 className="text-xl font-bold text-slate-900">
                        {item.title}
                      </h4>

                      <p className="mt-2 text-gray-600 leading-7">
                        {item.desc}
                      </p>

                    </div>

                  </div>

                ))}

              </div>

            </div>

            <a
              href="#booking"
              className="mt-12 inline-flex items-center justify-center gap-3 bg-lime-400 hover:bg-lime-300 text-black font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Book Your Appointment

              <FaArrowRight />
            </a>

          </div>
                  </div>

      </div>

    </section>
  );
}