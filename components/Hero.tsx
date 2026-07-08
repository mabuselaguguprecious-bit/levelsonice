import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <Image
        src="/images/H3.jpeg"
        alt="Levels On Ice Salon"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
        <p className="uppercase tracking-[8px] text-lime-400 font-semibold text-sm md:text-base">
          Hair • Nails • Beauty
        </p>

        <h1 className="mt-6 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-tight">
          LEVELS
          <br />
          ON ICE
        </h1>

        <p className="mt-10 max-w-3xl mx-auto text-gray-200 text-lg md:text-xl leading-9">
          Professional hair, braiding, nails and beauty services in
          Mowbray. We create styles that help you look and feel your best.
        </p>

        {/* 👇 Spacer – adjust this height as needed */}
        <div className="h-12" />

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
          <a
            href="#booking"
            className="inline-flex items-center justify-center min-w-[220px] h-13 px-8 rounded-full bg-lime-400 text-black text-2.2xl font-bold hover:bg-lime-300 transition-all duration-300 hover:scale-105"
          >
            Book Appointment
          </a>
          <a
            href="#gallery"
            className="inline-flex items-center justify-center min-w-[200px] h-13 px-10 rounded-full border-2 border-white !text-white text-xl font-semibold whitespace-nowrap hover:bg-white hover:!text-black transition-all duration-300"
          >
            View Gallery
          </a>
        </div>
      </div>

     
      
    </section>
  );
}