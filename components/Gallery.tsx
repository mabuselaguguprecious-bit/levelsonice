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
      className="bg-white py-16 md:py-24 overflow-x-hidden w-full"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12 md:mb-20">
          <p className="text-lime-500 uppercase tracking-[4px] md:tracking-[5px] font-semibold text-xs md:text-sm">
            GALLERY
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mt-3 md:mt-4">
            Our Recent Work
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {images.map((image) => (
            <div
              key={image}
              className="overflow-hidden rounded-2xl md:rounded-3xl"
            >
              <Image
                src={image}
                alt=""
                width={900}
                height={900}
                className="w-full h-auto object-cover hover:scale-110 transition duration-500"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}