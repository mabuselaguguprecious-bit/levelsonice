export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-gradient-to-b from-slate-100 to-white py-16 md:py-28 overflow-x-hidden w-full"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
          <p className="uppercase tracking-[4px] md:tracking-[6px] text-lime-500 font-semibold text-xs md:text-sm">
            CLIENT REVIEWS
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mt-3 md:mt-5">
            Loved By Our Clients
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-7 md:leading-9 mt-4 md:mt-8 px-4">
            Our biggest achievement is seeing our clients leave smiling,
            feeling confident and excited about their new look.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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
              className="bg-white rounded-[28px] md:rounded-[32px] border border-gray-200 p-6 md:p-10 shadow-sm hover:-translate-y-3 hover:shadow-2xl transition-all duration-500"
            >
              <div className="flex text-yellow-400 text-xl md:text-2xl mb-4 md:mb-6">
                ★★★★★
              </div>
              <p className="text-gray-600 leading-7 md:leading-8 text-base md:text-lg">
                "{item.review}"
              </p>
              <div className="mt-6 md:mt-10">
                <h3 className="font-bold text-lg md:text-xl text-slate-900">
                  {item.name}
                </h3>
                <p className="text-gray-500 text-sm md:text-base">Verified Customer</p>
              </div>
            </div>
          ))}
        </div>

        {/* Overall Rating */}
        <div className="mt-16 md:mt-24">
          <div className="bg-slate-900 rounded-[28px] md:rounded-[36px] overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center">

              {/* Left */}
              <div className="p-6 sm:p-8 md:p-12 lg:p-16">
                <p className="uppercase tracking-[4px] md:tracking-[5px] text-lime-400 font-semibold text-xs md:text-sm">
                  CUSTOMER SATISFACTION
                </p>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 md:mt-5">
                  Your Beauty,
                  <br />
                  Our Priority
                </h3>
                <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-7 md:leading-9 mt-4 md:mt-8">
                  We are committed to providing quality beauty services in
                  a welcoming environment where every client leaves feeling
                  confident, refreshed and looking their best.
                </p>

                <div className="grid grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-12">
                  <div>
                    <h4 className="text-3xl md:text-5xl font-black text-lime-400">5★</h4>
                    <p className="text-slate-300 text-sm md:text-base mt-1 md:mt-2">Service</p>
                  </div>
                  <div>
                    <h4 className="text-3xl md:text-5xl font-black text-lime-400">7</h4>
                    <p className="text-slate-300 text-sm md:text-base mt-1 md:mt-2">Days Open</p>
                  </div>
                  <div>
                    <h4 className="text-3xl md:text-5xl font-black text-lime-400">100%</h4>
                    <p className="text-slate-300 text-sm md:text-base mt-1 md:mt-2">Passion</p>
                  </div>
                </div>

                <a
                  href="https://wa.me/27813906634"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-lime-400 text-black px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold hover:bg-lime-300 hover:scale-105 transition duration-300 mt-8 md:mt-12 text-sm md:text-base"
                >
                  Book via WhatsApp
                </a>
              </div>

              {/* Right */}
              <div className="bg-gradient-to-br from-lime-400 to-emerald-400 h-full flex items-center justify-center p-8 md:p-16">
                <div className="text-center">
                  <div className="text-5xl md:text-7xl mb-4 md:mb-6">⭐⭐⭐⭐⭐</div>
                  <h3 className="text-4xl md:text-6xl font-black text-black">Thank You!</h3>
                  <p className="text-black text-base md:text-xl mt-4 md:mt-6 leading-7 md:leading-8 max-w-md px-4">
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