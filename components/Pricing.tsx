'use client';

import { FaCheckCircle, FaArrowUp, FaClock, FaCalendar } from "react-icons/fa";

const hairServices = [
  { service: "Normal Braids", ourFiber: "R550", clientFiber: "R400" },
  { service: "Knotless Braids", ourFiber: "R650", clientFiber: "R500" },
  { service: "Knotless Braids With Curls", ourFiber: "R750", clientFiber: "R500" },
  { service: "Box Braids", ourFiber: "R550", clientFiber: "R400" },
  { service: "Amabhenghi", ourFiber: "R500", clientFiber: "R350" },
  { service: "Amabhenghi With Curls", ourFiber: "R600", clientFiber: "R400" },
  { service: "Straight Up", ourFiber: "R450", clientFiber: "R350" },
  { service: "Straight Back", ourFiber: "R350", clientFiber: "R250" },
  { service: "Straight Back With Curls", ourFiber: "R420", clientFiber: "R300" },
  { service: "Cornrows", ourFiber: "R350", clientFiber: "R250" },
  { service: "Twist", ourFiber: "R700", clientFiber: "R450" },
  { service: "Twist With Curls", ourFiber: "R750", clientFiber: "R550" },
  { service: "Bob Braids", ourFiber: "R450", clientFiber: "R300" },
  { service: "Gel Phondo", ourFiber: "R250" },
  { service: "Passion Twist", ourFiber: "R400", note: "Client buys their own fibre" },
  { service: "Passion Twist Small", ourFiber: "R450", note: "Client buys their own fibre" },
  { service: "Butterfly Locs", ourFiber: "R450", note: "Client buys their own fibre" },
  { service: "French Curls Braids", ourFiber: "R500", note: "Client buys their own fibre" },
  { service: "French Curls Braids Small", ourFiber: "R550", note: "Client buys their own fibre" },
  { service: "Wash", ourFiber: "R50" },
  { service: "Relax", ourFiber: "R100" },
  { service: "Dark & Lovely", ourFiber: "R150" },
  { service: "Afro Wash", ourFiber: "R100" },
];

export default function Pricing() {
  return (
  <section
    id="prices"
    className="bg-white py-28"
  >
    
      <div className="max-w-7xl mx-auto px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">

          <p className="uppercase tracking-[6px] text-lime-500 font-semibold text-sm">
            OUR PRICES
          </p>

          <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mt-5 leading-tight">
            Beauty Services
          </h2>

          <div className="flex justify-center mt-6">
            <span className="w-20 h-1.5 rounded-full bg-gradient-to-r from-lime-400 to-emerald-400" />
          </div>

          <p className="text-gray-600 text-lg mt-8 leading-8">
            Transparent pricing with no hidden costs. Professional beauty
            services delivered by experienced stylists.
          </p>

          {/* Business hours */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-sm">
            <span className="flex items-center gap-2 text-gray-600">
              <FaClock className="text-lime-500" />
              7 Days Open
            </span>
            <span className="flex items-center gap-2 text-gray-600">
              <FaCalendar className="text-lime-500" />
              09:00 Opens Weekdays
            </span>
          </div>

        </div>

        {/* Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-8">

          {/* Hair */}
          <div className="rounded-3xl bg-white border border-gray-200 shadow-xl overflow-hidden hover:shadow-2xl hover:shadow-lime-500/10 transition-shadow duration-300 flex flex-col">

            <div className="bg-gradient-to-r from-lime-50 to-emerald-50 border-b border-gray-200 p-8">
              <p className="uppercase tracking-[5px] text-lime-600 text-sm font-semibold">
                Hair
              </p>
              <h3 className="text-4xl font-bold text-slate-900 mt-2">
                Hair Styling
              </h3>
              <p className="text-gray-600 mt-3">
                Braids, twists, cornrows, washes and more.
              </p>
            </div>

            <div className="p-7 space-y-5 flex-1">
              {hairServices.map((item, index) => (
                <div
                  key={index}
                  className="border-b border-gray-100 pb-5 last:border-none"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex items-start gap-3">
                      <FaCheckCircle className="text-lime-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-slate-900">
                          {item.service}
                        </h4>
                        {item.clientFiber && (
                          <p className="text-xs text-gray-500 mt-1">
                            Client fibre: <span className="text-slate-700">{item.clientFiber}</span>
                          </p>
                        )}
                        {item.note && (
                          <p className="text-xs text-gray-500 mt-1">
                            {item.note}
                          </p>
                        )}
                      </div>
                    </div>
                    <span className="font-bold text-lime-600 whitespace-nowrap ml-4">
                      {item.ourFiber}
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Nails */}
          <div className="rounded-3xl bg-white border border-gray-200 shadow-xl overflow-hidden hover:shadow-2xl hover:shadow-lime-500/10 transition-shadow duration-300 flex flex-col">

            <div className="bg-gradient-to-r from-lime-50 to-emerald-50 border-b border-gray-200 p-8">
              <p className="uppercase tracking-[5px] text-lime-600 text-sm font-semibold">
                Nails
              </p>
              <h3 className="text-4xl font-bold text-slate-900 mt-2">
                Nail Services
              </h3>
              <p className="text-gray-600 mt-3">
                Beautiful nails finished to perfection.
              </p>
            </div>

            <div className="p-7 space-y-5 flex-1">
              {[
                ["Plain", "R250"],
                ["Acrylic Overlay", "R200"],
                ["Ombre", "R350"],
                ["Gel + Tips Art", "R280"],
                ["Gel Overlay", "R150"],
                ["Manicure", "R250"],
                ["Pedicure", "R350"],
                ["French Tips", "R350"],
                ["Repairs", "R20"],
                ["Nail Art (per nail)", "R10"],
                ["Soak Off", "R50"],
                ["Refill", "R150"],
              ].map(([service, price], idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center border-b border-gray-100 pb-4 last:border-none"
                >
                  <div className="flex items-center gap-3">
                    <FaCheckCircle className="text-lime-500" />
                    <span className="font-medium text-slate-900">{service}</span>
                  </div>
                  <span className="font-bold text-lime-600">{price}</span>
                </div>
              ))}
            </div>

          </div>

          {/* Makeup */}
          <div className="rounded-3xl bg-white border border-gray-200 shadow-xl overflow-hidden hover:shadow-2xl hover:shadow-lime-500/10 transition-shadow duration-300 flex flex-col">

            <div className="bg-gradient-to-r from-lime-50 to-emerald-50 border-b border-gray-200 p-8">
              <p className="uppercase tracking-[5px] text-lime-600 text-sm font-semibold">
                Makeup
              </p>
              <h3 className="text-4xl font-bold text-slate-900 mt-2">
                Makeup Studio
              </h3>
              <p className="text-gray-600 mt-3">
                Professional makeup for every occasion.
              </p>
            </div>

            <div className="p-7 space-y-5 flex-1">
              {[
                ["Full Facebeat", "R300"],
                ["Make-Up (Without Lashes)", "R250"],
                ["Lashes Installation", "R300"],
                ["Eyebrow Tweezer", "R50"],
              ].map(([service, price], idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center border-b border-gray-100 pb-4 last:border-none"
                >
                  <div className="flex items-center gap-3">
                    <FaCheckCircle className="text-lime-500" />
                    <span className="font-medium text-slate-900">{service}</span>
                  </div>
                  <span className="font-bold text-lime-600">{price}</span>
                </div>
              ))}
            </div>

          </div>

        </div>

        {/* Back to Top */}
        <div className="flex justify-center mt-16">
          
        
        </div>

      </div>

    </section>
  );
}