import Image from "next/image";

const featured = {
  image: "/images/P17.PNG",
  title: "Signature Braiding Collection",
};

const hairstyles = [
  "/images/P1(Braids).jpeg",
  "/images/p2.jpg",
  "/images/P3(StraightBack).jpg",
  "/images/P4.PNG",
  "/images/P5.PNG",
  "/images/P6.jpg",
  "/images/P7.jpg",
  "/images/P8.PNG",
  "/images/P9.PNG",
  "/images/P10.PNG",
  "/images/P11.PNG",
  "/images/P12.PNG",
  "/images/P13.jpeg",
  "/images/P14.PNG",
  "/images/P15.PNG",
  "/images/P16.jpeg",
  "/images/P17.PNG",
  "/images/P18.jpeg",
];

export default function HairGallery() {
  return (
    <section
      id="gallery"
      className="bg-white py-16 md:py-28 overflow-x-hidden w-full"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
          <p className="uppercase tracking-[4px] md:tracking-[6px] text-lime-500 font-semibold text-xs md:text-sm">
            HAIR COLLECTION
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mt-3 md:mt-5">
            Signature Braiding Styles
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-7 md:leading-9 mt-4 md:mt-8 px-4">
            Every hairstyle is carefully crafted to suit your personality,
            style and occasion. Browse some of our favourite creations.
          </p>
        </div>

        {/* Featured Style */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-14 items-center mb-16 md:mb-24">
          <div className="overflow-hidden rounded-[28px] md:rounded-[36px]">
            <Image
              src={featured.image}
              alt={featured.title}
              width={900}
              height={1100}
              className="w-full h-[300px] sm:h-[450px] md:h-[600px] lg:h-[700px] object-cover hover:scale-105 transition duration-700"
            />
          </div>
          <div>
            <p className="uppercase tracking-[4px] md:tracking-[5px] text-lime-500 font-semibold text-xs md:text-sm">
              FEATURED STYLE
            </p>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mt-3 md:mt-5 leading-tight">
              Beautiful Braids,
              <br />
              Professionally Styled
            </h3>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-7 md:leading-9 mt-4 md:mt-8">
              From timeless classics to modern protective styles,
              our experienced stylists create looks that complement
              your personality while protecting your natural hair.
            </p>
            <div className="grid grid-cols-2 gap-4 md:gap-6 mt-6 md:mt-12">
              <div className="bg-gray-50 rounded-2xl md:rounded-3xl p-5 md:p-8 border border-gray-200">
                <h4 className="text-3xl md:text-4xl font-black text-lime-500">35+</h4>
                <p className="text-gray-600 text-sm md:text-base mt-2 md:mt-3">Hair Styles</p>
              </div>
              <div className="bg-gray-50 rounded-2xl md:rounded-3xl p-5 md:p-8 border border-gray-200">
                <h4 className="text-3xl md:text-4xl font-black text-lime-500">Professional</h4>
                <p className="text-gray-600 text-sm md:text-base mt-2 md:mt-3">Hair Care</p>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {hairstyles.map((image, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-[24px] md:rounded-[30px] bg-white border border-gray-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              <div className="overflow-hidden">
                <Image
                  src={image}
                  alt={`Hair Style ${index + 1}`}
                  width={600}
                  height={800}
                  className="w-full h-[280px] sm:h-[360px] md:h-[420px] object-cover group-hover:scale-110 transition duration-700"
                />
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 group-hover:text-lime-600 transition">
                  Hair Style {index + 1}
                </h3>
                <p className="text-gray-500 text-sm md:text-base mt-1 md:mt-2">Levels On Ice Collection</p>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Collections */}
        <div className="mt-16 md:mt-24">
          <div className="text-center mb-12 md:mb-16">
            <p className="uppercase tracking-[4px] md:tracking-[5px] text-lime-500 font-semibold text-xs md:text-sm">
              FEATURED COLLECTIONS
            </p>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mt-3 md:mt-4">
              Find Your Perfect Style
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Straight Back */}
            <div className="relative overflow-hidden rounded-[28px] md:rounded-[32px] group h-[300px] sm:h-[400px] md:h-[520px]">
              <Image
                src="/images/p34.jpg"
                alt="Straight Back"
                fill
                className="object-cover group-hover:scale-110 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 md:bottom-8 left-6 md:left-8">
                <h3 className="text-2xl md:text-3xl font-bold text-white">Straight Back</h3>
                <p className="text-gray-200 text-sm md:text-base mt-1 md:mt-2">Clean • Elegant • Timeless</p>
              </div>
            </div>

            {/* Knotless */}
            <div className="relative overflow-hidden rounded-[28px] md:rounded-[32px] group h-[300px] sm:h-[400px] md:h-[520px]">
              <Image
                src="/images/P12.PNG"
                alt="Knotless Braids"
                fill
                className="object-cover group-hover:scale-110 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 md:bottom-8 left-6 md:left-8">
                <h3 className="text-2xl md:text-3xl font-bold text-white">Knotless Braids</h3>
                <p className="text-gray-200 text-sm md:text-base mt-1 md:mt-2">Comfortable • Lightweight</p>
              </div>
            </div>

            {/* Designer */}
            <div className="relative overflow-hidden rounded-[28px] md:rounded-[32px] group h-[300px] sm:h-[400px] md:h-[520px]">
              <Image
                src="/images/p33.PNG"
                alt="Designer Braids"
                fill
                className="object-cover group-hover:scale-110 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 md:bottom-8 left-6 md:left-8">
                <h3 className="text-2xl md:text-3xl font-bold text-white">Signature Styles</h3>
                <p className="text-gray-200 text-sm md:text-base mt-1 md:mt-2">Modern • Premium</p>
              </div>
            </div>
          </div>
        </div>

        {/* Love This Style */}
        <div className="mt-16 md:mt-24 rounded-[28px] md:rounded-[36px] bg-slate-900 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <p className="uppercase tracking-[4px] md:tracking-[5px] text-lime-400 font-semibold text-xs md:text-sm">
                LOVE THIS STYLE?
              </p>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 md:mt-5 leading-tight">
                Let's Create
                <br />
                Your Perfect Look
              </h3>
              <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-7 md:leading-9 mt-4 md:mt-8">
                Whether you already know the style you want or you'd like
                our stylists to recommend one, we're ready to help you
                achieve your next look.
              </p>
              <div className="grid grid-cols-2 gap-4 md:gap-6 mt-6 md:mt-12">
                <div className="bg-white/5 rounded-2xl md:rounded-3xl p-4 md:p-6 border border-white/10">
                  <h4 className="text-3xl md:text-4xl font-black text-lime-400">35+</h4>
                  <p className="text-slate-300 text-sm md:text-base mt-1 md:mt-3">Braiding Styles</p>
                </div>
                <div className="bg-white/5 rounded-2xl md:rounded-3xl p-4 md:p-6 border border-white/10">
                  <h4 className="text-3xl md:text-4xl font-black text-lime-400">7 Days</h4>
                  <p className="text-slate-300 text-sm md:text-base mt-1 md:mt-3">Open Every Week</p>
                </div>
              </div>
              <a
                href="https://wa.me/27813906634"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 md:mt-12 inline-flex items-center justify-center bg-lime-400 text-black px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold hover:bg-lime-300 hover:scale-105 transition duration-300 w-fit text-sm md:text-base"
              >
                Book via WhatsApp
              </a>
            </div>
            <div className="relative h-[250px] sm:h-[300px] md:h-[400px] lg:h-full min-h-[300px]">
              <Image
                src="/images/P15.PNG"
                alt="Featured Hair Style"
                width={900}
                height={1100}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/10 to-transparent" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}