import { FaLinkedin, FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#2C2A28] text-gray-300 py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-center gap-6">

        {/* Left: Logo */}
        <div className="flex items-center gap-6">
          <div className="text-2xl  tracking-widest font-serif">
            REESOR{" "}
            <span className="text-xs align-top ml-1 tracking-normal font-sans">
              ASSOCIATES
            </span>
          </div>

          {/* Navigation Links */}
          <section className="flex gap-6 text-sm font-medium">
            <a href="#" className="hover:text-white font-ebgaramond transition">Location</a>
            <a href="#" className="hover:text-white font-ebgaramond transition">News Letter</a>
          </section>
        </div>

        {/* Center: Social Icons */}
        <div className="flex gap-6 text-lg justify-center md:justify-start">
          <a href="#" aria-label="LinkedIn" className="hover:text-white transition">
            <FaLinkedin />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-white transition">
            <FaTwitter />
          </a>
          <a href="#" aria-label="Facebook" className="hover:text-white transition">
            <FaFacebookF />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-white transition">
            <FaInstagram />
          </a>
        </div>

        {/* Right: App Download and Copyright */}
        <div className="flex font-ebgaramond flex-col items-center md:items-end text-xs text-gray-400 space-y-2 max-w-xs md:max-w-none">
          <p> Sign up for Reesor Associates  news letter today </p>
          <p>
            ©2025 Reesor Associates LLC •{" "}
            <a href="#" className="underline font-ebgaramond hover:text-white">Privacy policy</a> •{" "}
            <a href="#" className="underline font-ebgaramond hover:text-white">Terms of Use</a>
          </p>
          <p className="text-[10px] mt-2 font-ebgaramond">
            Reesor Associates is owned and operated by Reesor Associates  LLC.
          </p>
        </div>

      </div>
    </footer>
  );
}
