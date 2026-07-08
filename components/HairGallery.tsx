import Image from "next/image";

const hairstyles = [
  "/images/P1(Braids).jpeg",
  "/images/P2.jpeg",
  "/images/P3(Straight Back).jpg",
  "/images/P4.jpeg",
  "/images/P5.jpeg",
  "/images/P6.jpeg",
  "/images/P7.jpeg",
  "/images/P8.jpeg",
  "/images/P9.jpeg",
  "/images/P10.jpeg",
  "/images/P11.jpeg",
  "/images/P12.jpeg",
  "/images/P13.jpeg",
  "/images/P14.jpeg",
  "/images/P15.jpeg",
  "/images/P16.jpeg",
  "/images/P17.jpeg",
  "/images/P18.jpeg",
];

export default function HairGallery() {
  return (
    <section
      id="gallery"
      className="bg-white py-24 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* ================= Heading ================= */}

        <div className="max-w-4xl mx-auto text-center">

          <p className="uppercase tracking-[7px] text-lime-500 font-semibold text-sm">
            HAIR COLLECTION
          </p>

          <h2 className="mt-5 text-5xl lg:text-7xl font-bold text-slate-900 leading-tight">
            Signature
            <br />
            Braiding Styles
          </h2>

          <p className="mt-8 text-lg leading-9 text-slate-600 max-w-3xl mx-auto">
            Every hairstyle is carefully crafted to complement your
            personality, lifestyle and occasion. Browse a selection of
            our latest work and find inspiration for your next visit.
          </p>

        </div>

        {/* ================= Gallery ================= */}

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                      {hairstyles.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[32px] bg-white border border-gray-200 shadow-md hover:shadow-2xl hover:shadow-lime-500/10 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[4/5]">

                <Image
                  src={image}
                  alt={`Hair Style ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Hover Text */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">

                  <p className="uppercase tracking-[4px] text-lime-400 text-xs font-semibold">
                    LEVELS ON ICE
                  </p>

                  <h3 className="mt-2 text-2xl font-bold text-white">
                    Hair Style {index + 1}
                  </h3>

                  <p className="mt-2 text-gray-200 text-sm">
                    View this beautiful hairstyle from our latest collection.
                  </p>

                </div>

              </div>
            </div>
          ))}

        </div>
                {/* ================= CALL TO ACTION ================= */}

        <div className="mt-28 rounded-[40px] overflow-hidden bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">

          <div className="grid lg:grid-cols-2 items-center">

            {/* Left */}
            <div className="p-10 sm:p-14 lg:p-16">

              <p className="uppercase tracking-[6px] text-lime-400 font-semibold text-sm">
                READY FOR YOUR NEXT STYLE?
              </p>

              <h3 className="mt-5 text-4xl lg:text-6xl font-bold text-white leading-tight">
                Let's Create
                <br />
                Your Perfect Look
              </h3>

              <p className="mt-8 text-slate-300 text-lg leading-9 max-w-xl">
                Whether you already have a hairstyle in mind or you'd like
                our stylists to recommend one, we'll help you achieve a look
                that suits your personality and lifestyle.
              </p>

              <div className="grid grid-cols-2 gap-6 mt-12">

                <div className="rounded-3xl bg-white/5 border border-white/10 p-6">

                  <h4 className="text-4xl font-black text-lime-400">
                    35+
                  </h4>

                  <p className="text-slate-300 mt-3">
                    Braiding Styles
                  </p>

                </div>

                <div className="rounded-3xl bg-white/5 border border-white/10 p-6">

                  <h4 className="text-4xl font-black text-lime-400">
                    7 Days
                  </h4>

                  <p className="text-slate-300 mt-3">
                    Open Every Week
                  </p>

                </div>

              </div>

              <a
                href="https://wa.me/27813906634"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-12 inline-flex items-center justify-center rounded-full bg-lime-400 px-10 py-4 text-lg font-bold text-black transition-all duration-300 hover:scale-105 hover:bg-lime-300"
              >
                Book Your Appointment
              </a>

            </div>

            {/* Right Image */}

            <div className="relative h-[420px] lg:h-full">

              <Image
                src="/images/P18.jpeg"
                alt="Featured Hairstyle"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/30 via-transparent to-transparent" />

            </div>

          </div>

        </div>
              </div>
    </section>
  );
}