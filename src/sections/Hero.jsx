import RemoteLogo from "../assets/RemoteLogo.png";
import useScrollReveal from "../hooks/useScrollReveal";

export default function Hero() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section className="relative bg-gradient-to-b from-primary to-secondary text-white overflow-hidden">

      {/* NAV */}
      <div
        ref={ref}
        className={`flex items-center justify-between px-6 md:px-16 py-4 md:py-6 transition-all duration-700
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >

        {/* LOGO */}
        <div className="flex items-center gap-2 hover:scale-105 transition">
          <img
            src={RemoteLogo}
            alt="RemoteRecruit Logo"
            loading="lazy"
            decoding="async"
            className="w-16 h-16 md:w-24 md:h-24 object-contain"
          />
        </div>

        {/* BUTTONS */}
        <div className="flex items-center gap-3 md:gap-6 text-xs md:text-sm">

          <button
            className="hover:opacity-70 transition focus:outline-none focus:ring-2 focus:ring-white/50 rounded"
            aria-label="Sign In"
          >
            Sign In
          </button>

          <button
            className="bg-sky-200 text-sky-700 px-3 md:px-4 py-2 rounded-xl font-semibold
            hover:bg-sky-300 hover:scale-105 transition
            focus:outline-none focus:ring-2 focus:ring-sky-400"
            aria-label="Sign Up"
          >
            Sign Up
          </button>

        </div>

      </div>

      {/* HERO CONTENT */}
      <div
        className={`text-center px-6 md:px-20 py-12 md:py-20 transition-all duration-700 delay-150
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >

        <h2 className="text-3xl md:text-5xl font-bold mb-6 transition-all duration-300">
          RemoteRecruit’s Difference
        </h2>

        <p className="max-w-3xl mx-auto text-sm md:text-base text-white/80 leading-relaxed">
          RemoteRecruit is connecting the world with an easy-to-use platform that lets
          full-time, part-time, and freelance workers showcase their talents to businesses
          that need them. With no paywalls, no fees, and no barriers, there’s nothing but
          you, your talents, and the next step in your career.
        </p>

      </div>

      {/* WAVE */}
      <div className="relative w-full leading-none">
        <svg
          className="w-full block"
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#ffffff"
            d="M0,224L80,213.3C160,203,320,181,480,186.7C640,192,800,224,960,213.3C1120,203,1280,149,1360,122.7L1440,96L1440,320L0,320Z"
          />
        </svg>
      </div>

    </section>
  );
}