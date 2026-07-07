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
      className="bg-white py-20" // reduced from py-28
    >
      <div className="max-w-7xl mx-auto px-8">

        {/* Heading - more compact */}
        <div className="text-center mb-12"> {/* reduced from mb-20 */}

          <p className="uppercase tracking-[6px] text-lime-500 font-semibold text-sm">
            FOLLOW OUR JOURNEY
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mt-4"> {/* reduced size */}
            Follow Us On Social Media
          </h2>

          <p className="text-gray-600 text-base leading-7 mt-5 max-w-3xl mx-auto"> {/* smaller text */}
            Discover our latest hairstyles, nail designs, beauty
            transformations, promotions and salon updates on
            Facebook, Instagram and TikTok.
          </p>

        </div>

        {/* Image grid - smaller gap and image height */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"> {/* reduced gap from gap-8 */}

          {posts.map((image, index) => (
            <div
              key={index}
              className="group rounded-[30px] overflow-hidden"
            >
              <Image
                src={image}
                alt=""
                width={700}
                height={700}
                className="w-full h-[300px] object-cover transition duration-700 group-hover:scale-110" // reduced height
              />
            </div>
          ))}

        </div>

        {/* Social CTA - more compact */}
        <div className="mt-16"> {/* reduced from mt-24 */}

          <div className="bg-slate-900 rounded-[36px] overflow-hidden">

            <div className="grid lg:grid-cols-2">

              {/* Left */}
              <div className="p-8 lg:p-12 flex flex-col justify-center"> {/* reduced padding */}

                <p className="uppercase tracking-[5px] text-lime-400 font-semibold text-sm">
                  STAY CONNECTED
                </p>

                <h3 className="text-4xl font-bold text-white mt-4 leading-tight"> {/* reduced size */}
                  Follow Our
                  <br />
                  Latest Work
                </h3>

                <p className="text-slate-300 text-base leading-7 mt-5"> {/* smaller text */}
                  We regularly share our newest hairstyles, nail
                  transformations, client makeovers, promotions and salon
                  updates across our social media platforms.
                </p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8"> {/* reduced gap and margin */}

                  <a
                    href="https://www.facebook.com/levelsonicesalon"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/5 border border-white/10 rounded-2xl p-4 hover:bg-white/10 transition text-center" // smaller padding
                  >
                    <FaFacebook className="text-4xl text-lime-400 mx-auto mb-2" /> {/* reduced icon size */}
                    <h4 className="text-white font-semibold text-sm">Facebook</h4>
                  </a>

                  <a
                    href="https://www.instagram.com/levelsonicesalon/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/5 border border-white/10 rounded-2xl p-4 hover:bg-white/10 transition text-center"
                  >
                    <FaInstagram className="text-4xl text-lime-400 mx-auto mb-2" />
                    <h4 className="text-white font-semibold text-sm">Instagram</h4>
                  </a>

                  <a
                    href="#"
                    className="bg-white/5 border border-white/10 rounded-2xl p-4 hover:bg-white/10 transition text-center"
                  >
                    <FaTiktok className="text-4xl text-lime-400 mx-auto mb-2" />
                    <h4 className="text-white font-semibold text-sm">TikTok</h4>
                  </a>

                  <a
                    href="https://wa.me/27813906634"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-lime-400 rounded-2xl p-4 hover:bg-lime-300 transition text-center"
                  >
                    <div className="text-4xl mb-2">💬</div>
                    <h4 className="text-black font-bold text-sm">WhatsApp</h4>
                  </a>

                </div>

              </div>

              {/* Right - green side */}
              <div className="bg-gradient-to-br from-lime-400 to-emerald-400 flex items-center justify-center p-10"> {/* reduced padding */}

                <div className="text-center">

                  <div className="text-6xl">📸</div> {/* reduced size */}

                  <h3 className="text-4xl font-black text-black mt-6"> {/* reduced size */}
                    Join Our Community
                  </h3>

                  <p className="text-black text-base leading-7 mt-5 max-w-md"> {/* smaller text */}
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