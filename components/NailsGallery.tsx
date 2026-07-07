import Image from "next/image";

const featured = {
  image: "/images/n8.jpeg",
  title: "Luxury Nail Collection",
};

const nails = [
  "/images/n1.jpeg",
  "/images/n2.jpeg",
  "/images/n3.jpeg",
  "/images/n4.jpeg",
  "/images/n5.jpeg",
  "/images/n6.jpeg",
  "/images/n7.jpeg",
  "/images/n8.jpeg",
  "/images/n9.PNG",
  "/images/n10.JPEG",
];

export default function NailsGallery() {
  return (
    <section
      id="nails-gallery"
      className="bg-slate-50 py-16 md:py-28 overflow-x-hidden w-full"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
          <p className="uppercase tracking-[4px] md:tracking-[6px] text-lime-500 font-semibold text-xs md:text-sm">
            NAIL COLLECTION
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mt-3 md:mt-5">
            Elegant Nail Designs
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-7 md:leading-9 mt-4 md:mt-8 px-4">
            Beautiful nails designed to complement your style.
            From simple finishes to bold statement sets,
            we create nails you'll love.
          </p>
        </div>

        {/* Featured */}
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
              FEATURED COLLECTION
            </p>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mt-3 md:mt-5">
              Nails Designed
              <br />
              To Impress
            </h3>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-7 md:leading-9 mt-4 md:mt-8">
              Whether you're looking for everyday elegance,
              trendy acrylics or special occasion nails,
              we create beautiful finishes with attention to detail.
            </p>
            <div className="grid grid-cols-2 gap-4 md:gap-6 mt-6 md:mt-12">
              <div className="bg-white rounded-2xl md:rounded-3xl p-5 md:p-8 border border-gray-200">
                <h4 className="text-3xl md:text-4xl font-black text-lime-500">10+</h4>
                <p className="text-gray-600 text-sm md:text-base mt-2 md:mt-3">Nail Designs</p>
              </div>
              <div className="bg-white rounded-2xl md:rounded-3xl p-5 md:p-8 border border-gray-200">
                <h4 className="text-3xl md:text-4xl font-black text-lime-500">Premium</h4>
                <p className="text-gray-600 text-sm md:text-base mt-2 md:mt-3">Quality Products</p>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {nails.map((image, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-[24px] md:rounded-[30px] bg-white border border-gray-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              <div className="overflow-hidden">
                <Image
                  src={image}
                  alt={`Nail Design ${index + 1}`}
                  width={600}
                  height={700}
                  className="w-full h-[280px] sm:h-[360px] md:h-[420px] object-cover group-hover:scale-110 transition duration-700"
                />
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 group-hover:text-lime-600 transition">
                  Nail Design {index + 1}
                </h3>
                <p className="text-gray-500 text-sm md:text-base mt-1 md:mt-2">Levels On Ice Collection</p>
              </div>
            </div>
          ))}
        </div>

        {/* Luxury Section */}
        <div className="mt-16 md:mt-24 rounded-[28px] md:rounded-[36px] overflow-hidden bg-slate-900">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left */}
            <div className="p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <p className="uppercase tracking-[4px] md:tracking-[5px] text-lime-400 font-semibold text-xs md:text-sm">
                LOVE YOUR NAILS
              </p>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 md:mt-5 leading-tight">
                Nails That
                <br />
                Complete Your Look
              </h3>
              <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-7 md:leading-9 mt-4 md:mt-8">
                Whether you're preparing for a special event,
                celebrating an occasion or simply treating yourself,
                our nail artists are ready to create your perfect set.
              </p>
              <div className="grid grid-cols-2 gap-4 md:gap-6 mt-6 md:mt-12">
                <div className="bg-white/5 border border-white/10 rounded-2xl md:rounded-3xl p-4 md:p-6">
                  <h4 className="text-3xl md:text-4xl font-black text-lime-400">10+</h4>
                  <p className="text-slate-300 text-sm md:text-base mt-1 md:mt-3">Nail Designs</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl md:rounded-3xl p-4 md:p-6">
                  <h4 className="text-3xl md:text-4xl font-black text-lime-400">Quality</h4>
                  <p className="text-slate-300 text-sm md:text-base mt-1 md:mt-3">Products Used</p>
                </div>
              </div>
              <div className="mt-6 md:mt-12 space-y-3 md:space-y-5">
                {["Acrylic Nails", "Gel Polish", "Nail Art", "Professional Finish"].map((item) => (
                  <div key={item} className="flex items-center gap-3 md:gap-4">
                    <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-lime-400 text-black flex items-center justify-center font-bold text-xs md:text-sm shrink-0">✓</div>
                    <p className="text-slate-200 text-sm md:text-base">{item}</p>
                  </div>
                ))}
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
            {/* Right */}
            <div className="relative h-[250px] sm:h-[300px] md:h-[400px] lg:h-full min-h-[300px]">
              <Image
                src="/images/n10.jpeg"
                alt="Featured Nails"
                width={900}
                height={1200}
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