import Image from "next/image";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

const posts = [
  "/images/P5.PNG",
  "/images/P8.PNG",
  "/images/P15.PNG",
  "/images/n7.jpeg",
  "/images/n6.jpeg",
  "/images/n10.JPEG",
];

export default function SocialSection() {
  return (
    <section
      id="social"
      className="bg-white py-16 md:py-20 overflow-x-hidden w-full"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-10 md:mb-12">
          <p className="uppercase tracking-[4px] md:tracking-[6px] text-lime-500 font-semibold text-xs md:text-sm">
            FOLLOW OUR JOURNEY
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mt-3 md:mt-4">
            Follow Us On Social Media
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-6 md:leading-7 mt-4 md:mt-5 max-w-3xl mx-auto px-4">
            Discover our latest hairstyles, nail designs, beauty
            transformations, promotions and salon updates on
            Facebook, Instagram and TikTok.
          </p>
        </div>

        {/* Image grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {posts.map((image, index) => (
            <div key={index} className="group rounded-[24px] md:rounded-[30px] overflow-hidden">
              <Image
                src={image}
                alt=""
                width={700}
                height={700}
                className="w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover transition duration-700 group-hover:scale-110"
              />
            </div>
          ))}
        </div>

        {/* Social CTA */}
        <div className="mt-12 md:mt-16">
          <div className="bg-slate-900 rounded-[28px] md:rounded-[36px] overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">

              {/* Left */}
              <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
                <p className="uppercase tracking-[4px] md:tracking-[5px] text-lime-400 font-semibold text-xs md:text-sm">
                  STAY CONNECTED
                </p>
                <h3 className="text-3xl sm:text-4xl font-bold text-white mt-3 md:mt-4 leading-tight">
                  Follow Our
                  <br />
                  Latest Work
                </h3>
                <p className="text-slate-300 text-sm md:text-base leading-6 md:leading-7 mt-4 md:mt-5">
                  We regularly share our newest hairstyles, nail
                  transformations, client makeovers, promotions and salon
                  updates across our social media platforms.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mt-6 md:mt-8">
                  <a
                    href="https://www.facebook.com/levelsonicesalon"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/5 border border-white/10 rounded-2xl p-3 md:p-4 hover:bg-white/10 transition text-center backdrop-blur-sm"
                  >
                    <FaFacebook className="text-3xl md:text-4xl text-lime-400 mx-auto mb-1 md:mb-2" />
                    <h4 className="text-white font-semibold text-xs md:text-sm">Facebook</h4>
                  </a>

                  <a
                    href="https://www.instagram.com/levelsonicesalon/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/5 border border-white/10 rounded-2xl p-3 md:p-4 hover:bg-white/10 transition text-center backdrop-blur-sm"
                  >
                    <FaInstagram className="text-3xl md:text-4xl text-lime-400 mx-auto mb-1 md:mb-2" />
                    <h4 className="text-white font-semibold text-xs md:text-sm">Instagram</h4>
                  </a>

                  <a
                    href="#"
                    className="bg-white/5 border border-white/10 rounded-2xl p-3 md:p-4 hover:bg-white/10 transition text-center backdrop-blur-sm"
                  >
                    <FaTiktok className="text-3xl md:text-4xl text-lime-400 mx-auto mb-1 md:mb-2" />
                    <h4 className="text-white font-semibold text-xs md:text-sm">TikTok</h4>
                  </a>

                  <a
                    href="https://wa.me/27813906634"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-lime-500 rounded-2xl p-3 md:p-4 hover:bg-lime-400 transition text-center shadow-lg shadow-lime-500/30"
                  >
                    <div className="text-3xl md:text-4xl mb-1 md:mb-2">💬</div>
                    <h4 className="text-white font-bold text-xs md:text-sm">WhatsApp</h4>
                  </a>
                </div>
              </div>

              {/* Right – green side */}
              <div className="bg-gradient-to-br from-lime-400 via-teal-300 to-lime-300 flex items-center justify-center p-8 md:p-10">
                <div className="text-center">
                  <div className="text-5xl md:text-6xl">📸</div>
                  <h3 className="text-3xl md:text-4xl font-black text-black mt-4 md:mt-6">
                    Join Our Community
                  </h3>
                  <p className="text-black text-sm md:text-base leading-6 md:leading-7 mt-4 md:mt-5 max-w-md px-4">
                    Follow us for the latest hairstyles,
                    nail inspiration, promotions and salon updates.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}