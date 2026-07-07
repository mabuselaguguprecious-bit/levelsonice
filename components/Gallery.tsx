import Image from "next/image";

const images = [
  "/images/nails1.jpg",
  "/images/nails2.jpg",
  "/images/braids1.jpg",
  "/images/braids2.jpg",
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="bg-white py-24 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="uppercase tracking-[4px] text-lime-500 font-semibold text-sm">
            GALLERY
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900">
            Our Recent Work
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Every hairstyle and nail set is crafted with precision,
            creativity and attention to detail.
          </p>
        </div>

        {/* Gallery */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">

          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl bg-slate-100 shadow-lg"
            >
              <Image
                src={image}
                alt="Levels On Ice Work"
                width={900}
                height={1100}
                className="w-full h-[420px] md:h-[520px] object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Dark Hover Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition duration-500" />

              {/* Text */}
              <div className="absolute bottom-0 left-0 w-full p-8 text-white translate-y-8 group-hover:translate-y-0 transition duration-500">
                <p className="uppercase tracking-[3px] text-sm opacity-80">
                  Levels On Ice
                </p>

                <h3 className="text-2xl font-bold mt-2">
                  Premium Beauty
                </h3>
              </div>
            </div>
          ))}

        </div>

        {/* Button */}
        <div className="mt-16 flex justify-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-black text-white px-8 py-4 font-semibold text-lg hover:bg-slate-800 transition-all duration-300 hover:scale-105"
          >
            Book Your Appointment
          </a>
        </div>

      </div>
    </section>
  );
}