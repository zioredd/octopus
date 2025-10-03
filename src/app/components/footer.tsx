import React from "react";
import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="text-sm text-black pt-16 pb-8 relative md:px-60">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          {/* Logo + Socials */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <Image
                src="/octopus.png"
                alt="Octopus Logo"
                width={100}
                height={100}
              />
            </div>

            <div className="flex gap-4 mt-2">
              <a href="#" aria-label="LinkedIn">
                <FaLinkedin size={20} />
              </a>
              <a href="#" aria-label="Facebook">
                <FaFacebook size={20} />
              </a>
              <a href="#" aria-label="Instagram">
                <FaInstagram size={20} />
              </a>
              <a href="#" aria-label="X">
                <FaXTwitter size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-12">
            <div>
              <h4 className="font-bold mb-4">SERVICES</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#">Website Development</a>
                </li>
                <li>
                  <a href="#">AI Solutions</a>
                </li>
                <li>
                  <a href="#">UI/UX Design</a>
                </li>
                <li>
                  <a href="#">SEO Optimization</a>
                </li>
                <li>
                  <a href="#">Mobile App Development</a>
                </li>
                <li>
                  <a href="#">E-commerce Solutions</a>
                </li>
                <li>
                  <a href="#">Cloud Solutions</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">COMPANY</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#">About Octopus</a>
                </li>
                <li>
                  <a href="#">Our work</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Optional background text */}
        <div className="absolute left-0 bottom-4 text-gray-200 text-[100px] font-extrabold leading-none select-none opacity-10 hidden md:block">
          octopus
        </div>
      </div>
    </footer>
  );
};

export default Footer;
