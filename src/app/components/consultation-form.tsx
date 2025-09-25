// components/ConsultationSection.tsx
"use client";

import { useState } from "react";
import Image from "next/image";

export default function ConsultationSection() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    service: "",
    message: "",
    agree: false,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox" && e.target instanceof HTMLInputElement) {
      setForm({ ...form, [name]: e.target.checked });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    // Hook up to API/email service here
  };

  return (
    <section className="w-full bg-black text-white py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left graphics */}
        <div className="flex justify-center md:justify-start">
          <div className="relative w-full max-w-md h-80 md:h-[28rem]">
            <div className="absolute inset-0 bg-black"></div>
            <Image src="/contact_us.svg" alt="Contact us" fill />
          </div>
        </div>

        {/* Right form */}
        <div>
          <h2 className="text-2xl md:text-xl font-semibold mb-8 max-w-[70%]">
            Get in touch to discuss your software vision with industry experts
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6 max-w-[70%]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                {/* <label
                  htmlFor="firstName"
                  className="inter text-[#9D9D9D] text-xs font-medium leading-5 mb-1.5"
                >
                  First name
                </label> */}
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="First name"
                  value={form.firstName}
                  onChange={handleChange}
                  required
                  className="w-full inter text-[#9D9D9D] text-xs font-medium leading-5 mb-1.5 outline-none focus:outline focus:ring-1 focus:ring-gray-800 p-2 border border-gray-800 bg-black rounded-lg text-white"
                />
              </div>
              <div>
                {/* <label
                  htmlFor="lastName"
                  className="inter text-[#9D9D9D] text-xs font-medium leading-5 mb-1.5"
                >
                  Last name
                </label> */}
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Last name"
                  value={form.lastName}
                  onChange={handleChange}
                  required
                  className="w-full inter text-[#9D9D9D] text-xs font-medium leading-5 mb-1.5 outline-none focus:outline focus:ring-1 focus:ring-gray-800 p-2 border border-gray-800 bg-black rounded-lg text-white"
                />
              </div>
              <div>
                {/* <label
                  htmlFor="email"
                  className="inter text-[#9D9D9D] text-xs font-medium leading-5 mb-1.5"
                >
                  Email
                </label> */}
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@company.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full inter text-[#9D9D9D] text-xs font-medium leading-5 mb-1.5 outline-none focus:outline focus:ring-1 focus:ring-gray-800 p-2 border border-gray-800 bg-black rounded-lg text-white"
                />
              </div>
              <div>
                {/* <label
                  htmlFor="company"
                  className="inter text-[#9D9D9D] text-xs font-medium leading-5 mb-1.5"
                >
                  Company Name
                </label> */}
                <input
                  type="text"
                  id="company"
                  name="company"
                  placeholder="Company Name"
                  value={form.company}
                  onChange={handleChange}
                  required
                  className="w-full inter text-[#9D9D9D] text-xs font-medium leading-5 mb-1.5 outline-none focus:outline focus:ring-1 focus:ring-gray-800 p-2 border border-gray-800 bg-black rounded-lg text-white"
                />
              </div>
            </div>
            <div>
              {/* <label
                htmlFor="lookingFor"
                className="inter text-[#9D9D9D] text-xs font-medium leading-5 mb-1.5"
              >
                I am looking for
              </label> */}
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                required
                className="w-full inter text-[#4F39F6] text-xs font-medium leading-5 mb-1.5 outline-none focus:outline focus:ring-1 focus:ring-gray-800 p-2 border border-gray-800 bg-black rounded-lg text-white"
              >
                <option value="">Select your service</option>
                <option value="web">Web Development</option>
                <option value="mobile">Mobile Development</option>
                <option value="uiux">UI/UX Design</option>
                <option value="consulting">Consulting</option>
              </select>
            </div>
            <div>
              {/* <label
                htmlFor="howHelp"
                className="inter text-[#9D9D9D] text-xs font-medium leading-5 mb-1.5"
              >
                How we can help
              </label> */}
              <textarea
                name="message"
                placeholder="Leave us a message..."
                value={form.message}
                onChange={handleChange}
                rows={4}
                className="w-full inter text-[#9D9D9D] text-xs font-medium leading-5 mb-1.5 outline-none focus:outline focus:ring-1 focus:ring-gray-800 p-2 border border-gray-800 bg-black rounded-lg text-white"
              />
            </div>

            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                name="agree"
                checked={form.agree}
                onChange={handleChange}
                className="mt-1"
                required
              />
              <span className="text-sm text-gray-300">
                You agree to our friendly{" "}
                <a href="/privacy" className="underline hover:text-indigo-400">
                  privacy policy
                </a>
                .
              </span>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-md transition"
            >
              Book a free consultation →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
