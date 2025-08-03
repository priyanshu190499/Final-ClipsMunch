import logoLight from "../assets/MUNCH_WHITE.png"
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row justify-between items-start gap-8">
        {/* Logo */}
        <div className="flex justify-center lg:justify-start w-full lg:w-auto mb-8 lg:mb-0">
          <img
            src={logoLight}
            alt="ClipMunch Logo"
            className="h-20 w-auto"
            draggable="false"
          />
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap gap-4 sm:gap-8 text-sm font-light tracking-wider uppercase justify-center lg:justify-end w-full lg:w-auto">
          <a href="#" className="hover:text-white text-gray-400">
            MunchClip
          </a>
          <a href="#" className="hover:text-white text-gray-400">
            Format & Styles
          </a>
          <a href="#" className="hover:text-white text-gray-400">
            Industry Specific Solution
          </a>
          <a href="#" className="hover:text-white text-gray-400">
            Comparison
          </a>
          <a href="#" className="hover:text-white text-gray-400">
            Clients
          </a>
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
            {["instagram", "facebook", "twitter"].map((platform) => (
              <a
                key={platform}
                href="#"
                className="w-8 h-8 bg-[#f4f4f4] rounded flex items-center justify-center text-black"
              >
                <i className={`fab fa-${platform}`} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}