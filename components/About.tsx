import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="bg-slate-100 py-24 text-slate-900"
    >
      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center">

        <div>

          <p className="text-lime-500 font-semibold uppercase tracking-[5px] mb-4">
            ABOUT US
          </p>

          <h2 className="text-5xl font-bold mb-8">
            We Do What We Do Best
          </h2>

          <p className="text-slate-700 leading-8 text-lg mb-6">
            Levels On Ice specialises in professional hair,
            braiding, nails and beauty services for ladies
            and gentlemen in Mowbray.
          </p>

          <p className="text-slate-600 leading-8">
            Whether you're preparing for a special occasion
            or simply treating yourself, our goal is to make
            sure every client leaves looking and feeling
            their best.
          </p>

          <div className="grid grid-cols-2 gap-8 mt-12">

            <div className="bg-white rounded-2xl shadow-lg p-6">

              <h3 className="text-3xl font-bold text-lime-500">
                7
              </h3>

              <p className="text-slate-600 mt-2">
                Days Open
              </p>

            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">

              <h3 className="text-3xl font-bold text-lime-500">
                09:00
              </h3>

              <p className="text-slate-600 mt-2">
                Opens Weekdays
              </p>

            </div>

          </div>

        </div>

        <div>

          <Image
            src="/images/About3.jpeg"
            alt="Salon"
            width={700}
            height={900}
            className="rounded-3xl shadow-xl"
          />

        </div>

      </div>
    </section>
  );
}