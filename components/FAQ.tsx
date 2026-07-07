"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "Do I need to book an appointment?",
    answer:
      "Walk-ins are welcome, but we recommend booking in advance to secure your preferred date and time.",
  },
  {
    question: "Do you work on weekends?",
    answer:
      "Yes. We are open seven days a week. Please check our Contact section for opening hours.",
  },
  {
    question: "Do you offer student discounts?",
    answer:
      "Yes! High school learners, college students and university students receive 10% OFF. Simply present a valid South African ID.",
  },
  {
    question: "What complimentary refreshments do you offer?",
    answer:
      "Enjoy complimentary coffee, juice, wine, hookah and free Wi-Fi while you wait.",
  },
  {
    question: "Do you offer ear and nose piercing?",
    answer:
      "Yes, we offer professional ear and nose piercing services.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="bg-slate-50 py-16 md:py-28 overflow-x-hidden w-full"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12 md:mb-20">
          <p className="uppercase tracking-[4px] md:tracking-[6px] text-lime-500 font-semibold text-xs md:text-sm">
            FAQ
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mt-4 md:mt-5">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg mt-6 md:mt-8 leading-7 md:leading-8 px-4">
            Here are answers to some of the questions we're asked most often.
          </p>
        </div>

        <div className="space-y-4 md:space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl md:rounded-3xl border border-gray-200 overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="w-full flex justify-between items-center text-left px-5 md:px-8 py-5 md:py-7 gap-4"
              >
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-slate-900">
                  {faq.question}
                </h3>
                <FaChevronDown
                  className={`text-sm md:text-base shrink-0 transition duration-300 ${
                    open === index ? "rotate-180 text-lime-500" : ""
                  }`}
                />
              </button>
              {open === index && (
                <div className="px-5 md:px-8 pb-5 md:pb-8 text-gray-600 text-sm md:text-base leading-7 md:leading-8">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 md:mt-24">
          <div className="bg-slate-900 rounded-[28px] md:rounded-[36px] overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">

              {/* Left */}
              <div className="p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                <p className="uppercase tracking-[4px] md:tracking-[5px] text-lime-400 font-semibold text-xs md:text-sm">
                  STILL HAVE QUESTIONS?
                </p>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 md:mt-5 leading-tight">
                  We're Happy
                  <br />
                  To Help
                </h3>
                <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-7 md:leading-9 mt-4 md:mt-8">
                  Whether you'd like to know more about our services,
                  prices, appointments or anything else, our team is
                  ready to assist you.
                </p>
                <div className="grid grid-cols-2 gap-4 md:gap-6 mt-6 md:mt-12">
                  <div className="bg-white/5 rounded-2xl md:rounded-3xl border border-white/10 p-4 md:p-6">
                    <h4 className="text-3xl md:text-4xl font-black text-lime-400">
                      7 Days
                    </h4>
                    <p className="text-slate-300 text-sm md:text-base mt-2 md:mt-3">
                      Open Every Week
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-2xl md:rounded-3xl border border-white/10 p-4 md:p-6">
                    <h4 className="text-3xl md:text-4xl font-black text-lime-400">
                      Fast
                    </h4>
                    <p className="text-slate-300 text-sm md:text-base mt-2 md:mt-3">
                      WhatsApp Responses
                    </p>
                  </div>
                </div>
                <a
                  href="https://wa.me/27813906634"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 md:mt-12 inline-flex items-center justify-center bg-lime-400 text-black px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold hover:bg-lime-300 hover:scale-105 transition duration-300 w-fit text-sm md:text-base"
                >
                  Chat on WhatsApp
                </a>
              </div>

              {/* Right */}
              <div className="bg-gradient-to-br from-lime-500 to-emerald-500 flex items-center justify-center p-8 md:p-16">
                <div className="text-center">
                  <div className="text-5xl md:text-7xl mb-4 md:mb-6">💬</div>
                  <h3 className="text-3xl md:text-5xl font-black text-black">
                    Need Help?
                  </h3>
                  <p className="text-black text-base md:text-xl leading-7 md:leading-8 mt-4 md:mt-6 max-w-md px-4">
                    Send us a WhatsApp message and we'll help you
                    choose the right service or answer any questions.
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