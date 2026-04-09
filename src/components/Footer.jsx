import { useState } from "react";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa6";
import logoLight from "../assets/MUNCH_WHITE.png";
import inflag from "../assets/in.png";
import ukflag from "../assets/gb.png";
import caflag from "../assets/ca.png";

const footerSections = [
  {
    title: "MunchClip",
    links: ["Link 1", "Link 2", "Link 3", "Link 4", "Link 5"],
  },
  {
    title: "Format & Styles",
    links: Array.from({ length: 10 }, (_, i) => `Link ${i + 1}`),
  },
  {
    title: "Industry Specific Solution",
    links: Array.from({ length: 10 }, (_, i) => `Link ${i + 1}`),
  },
  {
    title: "Comparison",
    links: Array.from({ length: 6 }, (_, i) => `Link ${i + 1}`),
  },
  {
    title: "Clients",
    links: Array.from({ length: 5 }, (_, i) => `Link ${i + 1}`),
  },
];

export default function Footer() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <footer className="bg-gray-800 text-white pt-16 ">
      <div className="max-w-7xl mx-auto px-4 md:px-4 flex flex-col lg:flex-row justify-between items-start gap-12 ">
        {/* Logo */}
        <div className="flex flex-col  justify-center items-center lg:items-start  gap-4 lg:justify-start w-full lg:w-auto mb-8 lg:mb-0 ">
          <img
            src={logoLight}
            alt="ClipMunch Logo"
            className="h-20 w-60"
            draggable="false"
          />
           <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-md mx-auto ">
          We enable creators and businesses to repurpose video content easily. From AI-powered
          customization to optimized short-form clips and more features yet to come.
        </p>

        {/* Flag and contact number */}
        <div className="flex flex-col gap-2 mt-4 lg:mt-0 w-full">
      <div className="flex items-center gap-2">
        <img 
          src={inflag}
          alt="India Flag"
          className="w-6 h-4 flex-shrink-0 rounded-sm"
        />
        <span className="text-gray-300 text-sm">+91-7982931673</span>
      </div>
      <div className="flex items-center gap-2">
        <img 
          src={ukflag}
          alt="UK Flag"
          className="w-6 h-4 flex-shrink-0 rounded-sm"
        />
        <span className="text-gray-300 text-sm">+44-7405 293392</span>
      </div>
      <div className="flex items-center gap-2">
        <img 
          src={caflag}
          alt="Canada Flag"
          className="w-6 h-4 flex-shrink-0 rounded-sm"
        />
        <span className="text-gray-300 text-sm">+1-289 632-2786</span>
      </div>
    </div>
       
        </div>

        {/* Footer Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:gap-6 w-full lg:w-auto text-sm">
          {footerSections.map((section, index) => (
            <div key={index} className="mb-6 lg:mb-0 ">
              {/* Accordion for small screens */}
              <div className="lg:hidden border-b border-gray-700">
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="flex justify-between w-full py-3 font-bold text-base"
                >
                  {section.title}
                  <span>{openIndex === index ? "−" : "+"}</span>
                </button>
                {openIndex === index && (
                  <ul className="pl-2 pb-3 space-y-2 text-gray-400">
                    {section.links.map((link, i) => (
                      <li key={i}>
                        <a href="#" className="hover:text-white">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Static links for large screens */}
              <div className="hidden lg:block">
                <h4 className="font-bold mb-4 text-base">{section.title}</h4>
                <ul className="space-y-2 text-gray-400 ">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <a href="#" className="hover:text-white">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-red-600 mt-12 py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white text-center md:text-left">
            © 2025, ClipsMunch | Socially Flipped Media Pvt. Ltd.
          </p>

         {/* Social Icons */}
<div className="flex gap-3 justify-center md:justify-end w-full md:w-auto">
  <a
    href="Instagram.com/clipsmunch"
    className="w-8 h-8 bg-[#f4f4f4] rounded flex items-center justify-center text-black hover:bg-white hover:scale-110 transition-all duration-200"
  >
    <FaInstagram className="w-6 h-6" />
  </a>
  <a
    href="LinkedIn.com/company/clipsmunch"
    className="w-8 h-8 bg-[#f4f4f4] rounded flex items-center justify-center text-black hover:bg-white hover:scale-110 transition-all duration-200"
  >
    <FaLinkedin className="w-6 h-6"/>
  </a>
  <a
    href="Facebook.com/clipsmunch"
    className="w-8 h-8 bg-[#f4f4f4] rounded flex items-center justify-center text-black hover:bg-white hover:scale-110 transition-all duration-200"
  >
    <FaFacebook className="w-6 h-6"/>
  </a>
</div>

        </div>
      </div>
    </footer>
  );
}
