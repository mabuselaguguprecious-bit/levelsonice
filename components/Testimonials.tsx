export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-gradient-to-b from-slate-100 to-white py-28"
    >

      <div className="max-w-7xl mx-auto px-8">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto mb-20">

          <p className="uppercase tracking-[6px] text-lime-500 font-semibold">
            CLIENT REVIEWS
          </p>

          <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mt-5">
            Loved By Our Clients
          </h2>

          <p className="text-gray-600 text-lg leading-9 mt-8">
            Our biggest achievement is seeing our clients leave smiling,
            feeling confident and excited about their new look.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {[
            {
              name: "Happy Client",
              review:
                "Absolutely love my braids! The service was friendly, professional and exceeded my expectations.",
            },
            {
              name: "Satisfied Customer",
              review:
                "The atmosphere was relaxing and I really appreciated the complimentary coffee while waiting.",
            },
            {
              name: "Returning Client",
              review:
                "Beautiful nails, amazing service and very affordable prices. I'll definitely be coming back.",
            },
          ].map((item, index) => (

            <div
              key={index}
              className="bg-white rounded-[32px] border border-gray-200 p-10 shadow-sm hover:-translate-y-3 hover:shadow-2xl transition-all duration-500"
            >

              <div className="flex text-yellow-400 text-2xl mb-6">

                ★★★★★

              </div>

              <p className="text-gray-600 leading-8 text-lg">

                "{item.review}"

              </p>

              <div className="mt-10">

                <h3 className="font-bold text-xl text-slate-900">

                  {item.name}

                </h3>

                <p className="text-gray-500">

                  Verified Customer

                </p>

              </div>

            </div>

          ))}

        </div>
                {/* Overall Rating */}

        <div className="mt-24">

          <div className="bg-slate-900 rounded-[36px] overflow-hidden">

            <div className="grid lg:grid-cols-2 items-center">

              {/* Left */}

              <div className="p-12 lg:p-16">

                <p className="uppercase tracking-[5px] text-lime-400 font-semibold">
                  CUSTOMER SATISFACTION
                </p>

                <h3 className="text-5xl font-bold text-white mt-5">
                  Your Beauty,
                  <br />
                  Our Priority
                </h3>

                <p className="text-slate-300 text-lg leading-9 mt-8">
                  We are committed to providing quality beauty services in
                  a welcoming environment where every client leaves feeling
                  confident, refreshed and looking their best.
                </p>

                <div className="grid grid-cols-3 gap-6 mt-12">

                  <div>

                    <h4 className="text-5xl font-black text-lime-400">
                      5★
                    </h4>

                    <p className="text-slate-300 mt-2">
                      Service
                    </p>

                  </div>

                  <div>

                    <h4 className="text-5xl font-black text-lime-400">
                      7
                    </h4>

                    <p className="text-slate-300 mt-2">
                      Days Open
                    </p>

                  </div>

                  <div>

                    <h4 className="text-5xl font-black text-lime-400">
                      100%
                    </h4>

                    <p className="text-slate-300 mt-2">
                      Passion
                    </p>

                  </div>

                </div>

                <a
                  href="https://wa.me/27813906634"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-lime-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-lime-300 hover:scale-105 transition duration-300 mt-12"
                >
                  Book via WhatsApp
                </a>

              </div>

              {/* Right */}

              <div className="bg-gradient-to-br from-lime-400 to-emerald-400 h-full flex items-center justify-center p-16">

                <div className="text-center">

                  <div className="text-7xl mb-6">
                    ⭐⭐⭐⭐⭐
                  </div>

                  <h3 className="text-6xl font-black text-black">
                    Thank You!
                  </h3>

                  <p className="text-black text-xl mt-6 leading-8 max-w-md">
                    Thank you to every client who continues to trust
                    Levels On Ice with their beauty journey.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

  );
}