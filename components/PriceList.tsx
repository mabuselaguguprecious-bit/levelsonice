export default function PriceList() {
  return (
    <section
      id="prices"
      className="bg-white py-28"
    >

      <div className="max-w-7xl mx-auto px-8">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto mb-20">

          <p className="uppercase tracking-[6px] text-lime-500 font-semibold">
            PRICE LIST
          </p>

          <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mt-5">
            Beauty Services
          </h2>

          <p className="text-gray-600 text-lg leading-9 mt-8">
            Affordable professional beauty services with transparent pricing.
            Contact us if you have any questions or would like a personalised quote.
          </p>

        </div>

        {/* Braids */}

        <div className="mb-20">

          <div className="flex items-center gap-4 mb-10">

            <div className="w-12 h-1 bg-lime-500 rounded-full"/>

            <h3 className="text-4xl font-bold text-slate-900">
              Braids
            </h3>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              ["Straight Back","From R180"],
              ["Knotless Braids","From R350"],
              ["Tribal Braids","From R450"],
              ["Fulani Braids","From R400"],
              ["Boho Braids","From R500"],
              ["Stitch Braids","From R250"],
            ].map(([service,price])=>(

              <div
                key={service}
                className="bg-gray-50 rounded-3xl border border-gray-200 p-8 hover:border-lime-400 hover:shadow-xl transition"
              >

                <h4 className="text-2xl font-bold text-slate-900">
                  {service}
                </h4>

                <p className="text-lime-500 text-3xl font-black mt-6">
                  {price}
                </p>

              </div>

            ))}

          </div>

        </div>

        {/* Nails */}

        <div>

          <div className="flex items-center gap-4 mb-10">

            <div className="w-12 h-1 bg-lime-500 rounded-full"/>

            <h3 className="text-4xl font-bold text-slate-900">
              Nails
            </h3>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              ["Gel Polish","From R150"],
              ["Acrylic Full Set","From R250"],
              ["French Tips","From R280"],
              ["Nail Art","From R50"],
              ["Gel Overlay","From R180"],
              ["Soak Off","From R80"],
            ].map(([service,price])=>(

              <div
                key={service}
                className="bg-gray-50 rounded-3xl border border-gray-200 p-8 hover:border-lime-400 hover:shadow-xl transition"
              >

                <h4 className="text-2xl font-bold text-slate-900">
                  {service}
                </h4>

                <p className="text-lime-500 text-3xl font-black mt-6">
                  {price}
                </p>

              </div>

            ))}

          </div>

        </div>
                {/* Student Discount */}

        <div className="mt-24">

          <div className="rounded-[36px] bg-gradient-to-r from-lime-500 to-emerald-500 p-12 text-center">

            <p className="uppercase tracking-[5px] text-white font-semibold">
              STUDENT SPECIAL
            </p>

            <h3 className="text-5xl font-black text-white mt-5">
              10% OFF
            </h3>

            <p className="text-white text-xl mt-6 leading-8 max-w-3xl mx-auto">
              High school learners, college students and university students
              receive <strong>10% OFF</strong>.
              Simply present a valid South African ID.
            </p>

          </div>

        </div>

        {/* Extras */}

        <div className="mt-24">

          <div className="flex items-center gap-4 mb-10">

            <div className="w-12 h-1 bg-lime-500 rounded-full"/>

            <h3 className="text-4xl font-bold text-slate-900">
              Additional Services
            </h3>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-gray-50 rounded-3xl border border-gray-200 p-8 hover:border-lime-400 transition">

              <h4 className="text-2xl font-bold text-slate-900">
                Ear Piercing
              </h4>

              <p className="text-gray-600 mt-4">
                Professional ear piercing available.
              </p>

            </div>

            <div className="bg-gray-50 rounded-3xl border border-gray-200 p-8 hover:border-lime-400 transition">

              <h4 className="text-2xl font-bold text-slate-900">
                Nose Piercing
              </h4>

              <p className="text-gray-600 mt-4">
                Professional nose piercing available.
              </p>

            </div>

            <div className="bg-gray-50 rounded-3xl border border-gray-200 p-8 hover:border-lime-400 transition">

              <h4 className="text-2xl font-bold text-slate-900">
                Complimentary While You Wait
              </h4>

              <ul className="text-gray-600 mt-4 space-y-2">

                <li>☕ Coffee</li>
                <li>🧃 Juice</li>
                <li>🍷 Wine</li>
                <li>💨 Hookah</li>
                <li>📶 Free Wi-Fi</li>

              </ul>

            </div>

          </div>

        </div>

        {/* Price Notice */}

        <div className="mt-20 bg-slate-100 rounded-[32px] p-10 border border-slate-200">

          <h3 className="text-3xl font-bold text-slate-900">
            Pricing Information
          </h3>

          <p className="text-gray-600 leading-8 mt-6">
            Prices may vary depending on hair length, thickness,
            style selected and any additional products required.
            Please contact us for an accurate quotation before your appointment.
          </p>

        </div>

        {/* CTA */}

        <div className="mt-20 bg-slate-900 rounded-[36px] overflow-hidden">

          <div className="text-center py-20 px-8">

            <p className="uppercase tracking-[5px] text-lime-400 font-semibold">
              READY TO BOOK?
            </p>

            <h3 className="text-5xl font-bold text-white mt-5">
              Let's Create Your Next Look
            </h3>

            <p className="text-slate-300 text-lg leading-9 max-w-3xl mx-auto mt-8">
              Whether it's braids, nails, treatments or piercing,
              we're ready to welcome you to Levels On Ice.
            </p>

            <a
              href="https://wa.me/27813906634"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-lime-400 text-black px-10 py-5 rounded-full font-semibold hover:bg-lime-300 hover:scale-105 transition duration-300 mt-10"
            >
              Book via WhatsApp
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}