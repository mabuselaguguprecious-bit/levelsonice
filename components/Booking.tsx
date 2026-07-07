"use client";

import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function Booking() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello Levels On Ice!

I'd like to request an appointment.

Name: ${name}

Phone Number: ${phone}

Service: ${service}

Preferred Date: ${date}

Preferred Time: ${time}

Special Requests:
${notes}`;

    const url = `https://wa.me/27813906634?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section
      id="booking"
      className="bg-gray-50 py-16 md:py-28 overflow-x-hidden w-full"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-12 md:mb-20">
          <p className="uppercase tracking-[4px] md:tracking-[6px] text-lime-500 font-semibold text-xs md:text-sm">
            BOOK AN APPOINTMENT
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mt-4 md:mt-5">
            Request an Appointment
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-7 md:leading-8 mt-6 md:mt-8 max-w-3xl mx-auto">
            Complete the form below and we'll open WhatsApp with your booking details already completed.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-[28px] md:rounded-[36px] shadow-xl p-6 sm:p-8 md:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">

            {/* Full Name */}
            <div>
              <label className="block text-xs md:text-sm font-semibold text-slate-800 mb-1 md:mb-2">
                Full Name <span className="text-lime-500">*</span>
              </label>
              <input
                required
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
                className="w-full h-12 md:h-14 rounded-2xl border border-gray-300 px-4 md:px-5 text-sm md:text-base text-gray-800 placeholder:text-gray-400 outline-none transition focus:border-lime-500 focus:ring-4 focus:ring-lime-100"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-xs md:text-sm font-semibold text-slate-800 mb-1 md:mb-2">
                Phone Number <span className="text-lime-500">*</span>
              </label>
              <input
                required
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="e.g. 081 390 6634"
                className="w-full h-12 md:h-14 rounded-2xl border border-gray-300 px-4 md:px-5 text-sm md:text-base text-gray-800 placeholder:text-gray-400 outline-none transition focus:border-lime-500 focus:ring-4 focus:ring-lime-100"
              />
            </div>

            {/* Service */}
            <div>
              <label className="block text-xs md:text-sm font-semibold text-slate-800 mb-1 md:mb-2">
                Service Required <span className="text-lime-500">*</span>
              </label>
              <select
                required
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full h-12 md:h-14 rounded-2xl border border-gray-300 px-4 md:px-5 text-sm md:text-base text-gray-800 outline-none transition focus:border-lime-500 focus:ring-4 focus:ring-lime-100"
              >
                <option value="">Select a service</option>
                <optgroup label="Hair">
                  <option>Normal Braids</option>
                  <option>Knotless Braids</option>
                  <option>Knotless Braids With Curls</option>
                  <option>Box Braids</option>
                  <option>Amabhenghi</option>
                  <option>Amabhenghi With Curls</option>
                  <option>Straight Up</option>
                  <option>Straight Back</option>
                  <option>Straight Back With Curls</option>
                  <option>Cornrows</option>
                  <option>Twist</option>
                  <option>Twist With Curls</option>
                  <option>Bob Braids</option>
                  <option>Gel Phondo</option>
                  <option>Passion Twist</option>
                  <option>Passion Twist Small</option>
                  <option>Butterfly Locs</option>
                  <option>French Curls Braids</option>
                  <option>French Curls Braids Small</option>
                  <option>Wash</option>
                  <option>Relax</option>
                  <option>Dark & Lovely</option>
                  <option>Afro Wash</option>
                </optgroup>
                <optgroup label="Nails">
                  <option>Plain Nails</option>
                  <option>Acrylic Overlay</option>
                  <option>Ombre</option>
                  <option>Gel + Tips Art</option>
                  <option>Gel Overlay</option>
                  <option>Manicure</option>
                  <option>Pedicure</option>
                  <option>French Tips</option>
                  <option>Repairs</option>
                  <option>Nail Art</option>
                  <option>Soak Off</option>
                  <option>Refill</option>
                </optgroup>
                <optgroup label="Make-Up">
                  <option>Full Facebeat</option>
                  <option>Make-Up (Without Lashes)</option>
                  <option>Lashes Installation</option>
                  <option>Eyebrow Tweezer</option>
                </optgroup>
                <optgroup label="Piercing">
                  <option>Ear Piercing</option>
                  <option>Nose Piercing</option>
                </optgroup>
                <optgroup label="Custom">
                  <option>Custom Service (Please describe in Special Requests)</option>
                  <option>Consultation</option>
                  <option>Not Sure (Need Advice)</option>
                </optgroup>
              </select>
            </div>

            {/* Preferred Date */}
            <div>
              <label className="block text-xs md:text-sm font-semibold text-slate-800 mb-1 md:mb-2">
                Preferred Date <span className="text-lime-500">*</span>
              </label>
              <input
                required
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full h-12 md:h-14 rounded-2xl border border-gray-300 px-4 md:px-5 text-sm md:text-base text-gray-800 outline-none transition focus:border-lime-500 focus:ring-4 focus:ring-lime-100"
              />
            </div>

            {/* Preferred Time */}
            <div>
              <label className="block text-xs md:text-sm font-semibold text-slate-800 mb-1 md:mb-2">
                Preferred Time <span className="text-lime-500">*</span>
              </label>
              <input
                required
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full h-12 md:h-14 rounded-2xl border border-gray-300 px-4 md:px-5 text-sm md:text-base text-gray-800 outline-none transition focus:border-lime-500 focus:ring-4 focus:ring-lime-100"
              />
            </div>

          </div>

          {/* Special Requests */}
          <div className="mt-6 md:mt-8">
            <label className="block text-xs md:text-sm font-semibold text-slate-800 mb-1 md:mb-2">
              Special Requests (Optional)
            </label>
            <textarea
              rows={5}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Describe your preferred style, custom service, hair length, preferred stylist, or any other requests..."
              className="w-full rounded-2xl border border-gray-300 p-4 md:p-5 text-sm md:text-base text-gray-800 placeholder:text-gray-400 outline-none resize-none transition focus:border-lime-500 focus:ring-4 focus:ring-lime-100"
            />
          </div>

          {/* Information */}
          <div className="mt-6 md:mt-8 rounded-2xl md:rounded-3xl border border-lime-200 bg-lime-50 p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900">
              Before You Submit
            </h3>
            <p className="text-gray-600 text-sm md:text-base mt-3 md:mt-4 leading-6 md:leading-8">
              Please read the following information before sending your booking request.
            </p>
            <ul className="mt-4 md:mt-6 space-y-2 md:space-y-3 text-gray-700 text-sm md:text-base leading-6 md:leading-7">
              <li className="flex items-start gap-2 md:gap-3">
                <span className="text-lime-600 font-bold">✓</span>
                <span>Your booking request will open in <strong>WhatsApp</strong>.</span>
              </li>
              <li className="flex items-start gap-2 md:gap-3">
                <span className="text-lime-600 font-bold">✓</span>
                <span>Your appointment is only confirmed once our team replies and confirms availability.</span>
              </li>
              <li className="flex items-start gap-2 md:gap-3">
                <span className="text-lime-600 font-bold">✓</span>
                <span>Please arrive on time for your appointment.</span>
              </li>
              <li className="flex items-start gap-2 md:gap-3">
                <span className="text-lime-600 font-bold">✓</span>
                <span>If you arrive more than <strong>5 minutes late</strong>, a walk-in client may be attended to before you.</span>
              </li>
            </ul>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-8 md:mt-10 w-full h-14 md:h-16 rounded-2xl bg-black text-white text-base md:text-lg font-semibold flex items-center justify-center gap-2 md:gap-3 transition-all duration-300 hover:bg-lime-500 hover:text-black hover:shadow-xl hover:shadow-lime-500/30"
          >
            <FaWhatsapp className="text-xl md:text-2xl" />
            Submit Booking Request
          </button>

        </form>

      </div>
    </section>
  );
}