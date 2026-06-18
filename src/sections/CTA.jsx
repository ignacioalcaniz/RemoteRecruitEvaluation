import SignUpAd from "../assets/SignUpAd.png";

export default function CTA() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-r from-indigo-100 via-purple-100 to-blue-100 flex flex-col md:flex-row items-center py-16 md:py-0">

      {/* DECORATIVE ELEMENTS (soft + performance safe) */}
      <div className="absolute top-6 left-6 md:top-10 md:left-16 w-10 md:w-16 h-10 md:h-16 bg-yellow-400 rounded-full opacity-80 animate-pulse" />
      <div className="absolute bottom-6 right-6 md:bottom-12 md:right-12 w-6 md:w-10 h-6 md:h-10 bg-blue-500 rounded-full opacity-80 animate-pulse" />

      {/* IMAGE SECTION */}
      <div className="flex-1 flex items-center justify-center px-6 md:px-0 py-10 md:py-0">

        <img
          src={SignUpAd}
          alt="Sign Up Ad"
          loading="lazy"
          decoding="async"
          className="
            w-full
            max-w-[320px]
            md:max-w-none
            md:h-[500px]
            object-contain
            rounded-tr-[90px]
            md:rounded-tr-[120px]
            transition-transform duration-500
            hover:scale-[1.04]
            hover:rotate-1
          "
        />

      </div>

      {/* TEXT SECTION */}
      <div className="flex-1 flex flex-col justify-center px-6 md:px-16 space-y-5 md:space-y-6 text-center md:text-left">

        <span className="text-sm text-slate-600 font-medium tracking-wide">
          Are you ready?
        </span>

        <h2 className="text-2xl md:text-4xl font-bold text-slate-900 leading-tight max-w-md mx-auto md:mx-0">
          Help is only a few clicks away!
        </h2>

        <p className="text-sm md:text-base text-slate-600 max-w-md mx-auto md:mx-0 leading-relaxed">
          Click below to get set up super quickly and find help now!
        </p>

        <button className="bg-sky-200 text-sky-800 px-5 md:px-6 py-3 rounded-full font-semibold flex items-center gap-3 w-fit mx-auto md:mx-0 hover:bg-sky-300 hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-md">

          <span className="w-7 md:w-8 h-7 md:h-8 bg-sky-500 text-white rounded-full flex items-center justify-center transition-transform group-hover:rotate-12">
            →
          </span>

          Get Started

        </button>

      </div>

    </section>
  );
}