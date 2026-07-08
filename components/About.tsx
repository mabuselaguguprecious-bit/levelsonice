import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="bg-white py-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* ================= LEFT COLUMN ================= */}
          <div className="flex flex-col">

            {/* 1. ABOUT US Label */}
            <p className="text-lime-600 uppercase tracking-[8px] font-semibold">
              ABOUT US
            </p>

            {/* Vertical spacing */}
            <div className="h-4" />

            {/* 2. Main Heading */}
            <h2 className="text-3xl md:text-7xl lg:text-4xl font-bold text-black leading-tight">
              We Do What We Do Best
            </h2>
            <div className="h-2" />
 <div className="flex justify-center mt-3000">
  <span className="w-70 h-1.5 rounded-full bg-gradient-to-r from-lime-100 to-emerald-400" />
</div>
            {/* Vertical spacing */}
            <div className="h-5.5" />

            {/* 3. First Paragraph */}
            <p className="text-gray-700 text-lg lg:text-xl leading-[1.9]">
              Levels On Ice specialises in professional hair,
              braiding, nails and beauty services for ladies
              and gentlemen in Mowbray.
            </p>

            {/* Vertical spacing */}
            <div className="h-4" />

            {/* 4. Second Paragraph */}
            <p className="text-gray-600 text-lg lg:text-xl leading-[1.9]">
              Whether you're preparing for a special occasion
              or simply treating yourself, our goal is to make
              sure every client leaves looking and feeling
              their absolute best every single visit.
            </p>

            {/* Larger vertical spacing */}
            <div className="h-12" />

            {/* 5. Bottom Row: Two Stat Cards + Two Images */}
            <div className="flex flex-wrap items-center gap-6">

              {/* Stats Container */}
              <div className="flex flex-1 flex-wrap gap-6">

                <div className="flex-1 min-w-[140px] bg-gray-50 border border-gray-200 rounded-3xl p-6 text-center shadow-md hover:shadow-xl transition">
                  <h3 className="text-3xl font-bold text-lime-600">7</h3>
                  <p className="text-gray-700 mt-2 text-sm uppercase tracking-wider">
                    Days Open
                  </p>
                </div>

                <div className="flex-1 min-w-[140px] bg-gray-50 border border-gray-200 rounded-3xl p-6 text-center shadow-md hover:shadow-xl transition">
                  <h3 className="text-3xl font-bold text-lime-600">09:00</h3>
                  <p className="text-gray-700 mt-2 text-sm uppercase tracking-wider">
                    Opens Weekdays
                  </p>
                </div>

              </div>

              {/* Two Small Images */}
              <div className="flex gap-4">

                <Image
                  src="/images/P12.PNG"
                  alt="Hair Style"
                  width={130}
                  height={130}
                  className="rounded-2xl object-cover shadow-lg hover:scale-105 transition"
                />

                <Image
                  src="/images/n6.jpeg"
                  alt="Salon Beauty"
                  width={130}
                  height={130}
                  className="rounded-2xl object-cover shadow-lg hover:scale-105 transition"
                />

              </div>

            </div>

          </div>

          {/* ================= RIGHT COLUMN ================= */}
          <div className="flex justify-center lg:justify-end">

            <div className="relative w-[350px] h-[280px] sm:w-[320px] sm:h-[320px] lg:w-[450px] lg:h-[450px] rounded-3xl overflow-hidden shadow-2xl hover:scale-[1.02] transition duration-500">

              <Image
                src="/images/p26.PNG"
                alt="Levels On Ice"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 740px, (max-width: 1024px) 1024px, 1024px"
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}