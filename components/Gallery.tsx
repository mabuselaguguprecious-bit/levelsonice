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
      className="bg-white py-24"
    >

      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-20">

          <p className="text-lime-500 uppercase tracking-[5px] font-semibold">
            GALLERY
          </p>

          <h2 className="text-5xl font-bold text-slate-900">
            Our Recent Work
          </h2>

        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {images.map((image) => (

            <div
              key={image}
              className="overflow-hidden rounded-3xl"
            >

              <Image
                src={image}
                alt=""
                width={900}
                height={900}
                className="hover:scale-110 transition duration-500"
              />

            </div>

          ))}

        </div>

      </div>

    </section>

  );

}