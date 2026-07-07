import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="bg-slate-100 py-20 md:py-24 text-slate-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* Left */}
        <div>

          <p className="text-lime-500 font-semibold uppercase tracking-[4px] md:tracking-[5px] mb-4 text-sm md:text-base">
            ABOUT US
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
            We Do What
            <br />
            We Do Best
          </h2>

          <p className="text-slate-700 leading-8 text-base md:text-lg mb-6">
            Levels On Ice specialises in professional hair,
            braiding, nails and beauty services for ladies
            and gentlemen in Mowbray.
          </p>

          <p className="text-slate-600 leading-8 text-base md:text-lg">
            Whether you're preparing for a special occasion
            or simply treating yourself, our goal is to make
            sure every client leaves looking and feeling
            their best.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-5 mt-10">

            <div className="bg-white rounded-2xl shadow-lg p-5 md:p-6 text-center">

              <h3 className="text-3xl md:text-4xl font-bold text-lime-500">
                7
              </h3>

              <p className="text-slate-600 mt-2 text-sm md:text-base">
                Days Open
              </p>

            </div>

            <div className="bg-white rounded-2xl shadow-lg p-5 md:p-6 text-center">

              <h3 className="text-3xl md:text-4xl font-bold text-lime-500">
                09:00
              </h3>

              <p className="text-slate-600 mt-2 text-sm md:text-base">
                Opens Weekdays
              </p>

            </div>

          </div>

        </div>

        {/* Right */}
        <div className="flex justify-center">

          <Image
            src="/images/About3.jpeg"
            alt="Salon"
            width={700}
            height={900}
            className="w-full max-w-md lg:max-w-xl h-auto rounded-3xl shadow-xl object-cover"
            priority
          />

        </div>

      </div>
    </section>
  );
}