import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-sm text-black pt-16 pb-8 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          {/* Logo + Socials */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.svg"
                alt="AgileEngine Logo"
                width={40}
                height={40}
              />
              <span className="text-lg font-bold">
                AGILE <br /> ENGINE
              </span>
            </div>

            <Image
              src="/dmca-protected-badge.svg"
              alt="DMCA Badge"
              width={120}
              height={40}
            />

            <div className="flex gap-4 mt-2">
              <a href="#">
                <Image
                  src="/linkedin.svg"
                  alt="LinkedIn"
                  width={20}
                  height={20}
                />
              </a>
              <a href="#">
                <Image
                  src="/facebook.svg"
                  alt="Facebook"
                  width={20}
                  height={20}
                />
              </a>
              <a href="#">
                <Image
                  src="/instagram.svg"
                  alt="Instagram"
                  width={20}
                  height={20}
                />
              </a>
              <a href="#">
                <Image src="/x-twitter.svg" alt="X" width={20} height={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-12">
            <div>
              <h4 className="font-bold mb-4">SERVICES</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#">Design Studio</a>
                </li>
                <li>
                  <a href="#">Data Studio</a>
                </li>
                <li>
                  <a href="#">AI Studio</a>
                </li>
                <li>
                  <a href="#">Quality Studio</a>
                </li>
                <li>
                  <a href="#">Solutions</a>
                </li>
                <li>
                  <a href="#">Accessibility</a>
                </li>
                <li>
                  <a href="#">Dedicated teams</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">COMPANY</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#">About AgileEngine</a>
                </li>
                <li>
                  <a href="#">Our work</a>
                </li>
                <li>
                  <a href="#">Our leadership team</a>
                </li>
                <li>
                  <a href="#">Awards and recognition</a>
                </li>
                <li>
                  <a href="#">Careers</a>
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
          agileengine
        </div>
      </div>
    </footer>
  );
};

export default Footer;
