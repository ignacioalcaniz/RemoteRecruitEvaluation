import RemoteLogo from "../assets/RemoteLogo.png";
import RemoteSmallLogo from "../assets/RemoteSmallLogo.png";

import Facebook from "../assets/icons/Facebook.png";
import Instagram from "../assets/icons/Instagram.png";
import X from "../assets/icons/X.png";
import Twitter from "../assets/icons/Twitter.png";
import Linkedin from "../assets/icons/Linkedin.png";
import Snapchat from "../assets/icons/Snapchat.png";

export default function FinalSection() {
  return (
    <section className="w-full relative overflow-hidden">

      {/* BACKGROUND */}
      <div className="bg-gradient-to-b from-primary to-secondary w-full relative">

        {/* WAVE FIX (NO SHIFT) */}
        <div className="relative w-full -mt-10 md:-mt-20 overflow-hidden leading-none">
          <svg viewBox="0 0 1440 320" className="w-full block">
            <path
              fill="#ffffff"
              d="M0,96L80,106.7C160,117,320,139,480,160C640,181,800,203,960,192C1120,181,1280,139,1440,128L1440,0L0,0Z"
            />
          </svg>
        </div>

        {/* PRICING */}
        <div className="pt-14 md:pt-20 pb-24 md:pb-36 px-6 md:px-20">

          <h2 className="text-center text-2xl md:text-4xl font-bold text-white mb-10 md:mb-14">
            Help Is One Click Away
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 max-w-5xl mx-auto">

            {/* FREE CARD */}
            <div className="bg-white rounded-3xl shadow-xl p-6 flex flex-col justify-between hover:scale-[1.02] transition">

              <div className="flex flex-col md:flex-row gap-5 md:gap-6">

                <div className="bg-blue-50 rounded-2xl w-full md:w-[140px] h-[120px] md:h-[140px] flex flex-col items-center justify-center">
                  <p className="text-blue-500 font-bold text-lg md:text-xl">Free</p>
                  <p className="text-slate-500 text-sm">Basic</p>
                </div>

                <div className="flex flex-col gap-2 md:gap-3 text-xs md:text-sm text-slate-700">
                  <p>✔ 1 Active Job</p>
                  <p>✔ Basic List Placement</p>
                  <p className="text-slate-400">✖ Unlimited Job Applicants</p>
                  <p className="text-slate-400">✖ Invite Anyone to Apply</p>
                </div>

              </div>

              <button className="mt-6 md:mt-8 border border-blue-500 text-blue-600 py-2 md:py-3 rounded-xl hover:bg-blue-50 transition text-sm md:text-base">
                Get Started
              </button>

            </div>

            {/* PREMIUM CARD */}
            <div className="bg-white rounded-3xl shadow-xl p-6 flex flex-col justify-between hover:scale-[1.02] transition">

              <div className="flex flex-col md:flex-row gap-5 md:gap-6">

                <div className="bg-blue-50 rounded-2xl w-full md:w-[140px] h-[120px] md:h-[140px] flex flex-col items-center justify-center">
                  <p className="text-blue-600 font-semibold">Premium</p>
                  <p className="text-xl md:text-2xl font-bold text-slate-900">$79.99</p>
                  <p className="text-xs md:text-sm text-slate-500">Per Month</p>
                </div>

                <div className="flex flex-col gap-2 md:gap-3 text-xs md:text-sm text-slate-700">
                  <p>✔ Unlimited Job Posts</p>
                  <p>✔ Instant Job Approval</p>
                  <p>✔ Premium Placement</p>
                  <p>✔ Unlimited Applicants</p>
                </div>

              </div>

              <button className="mt-6 md:mt-8 bg-blue-600 text-white py-2 md:py-3 rounded-xl hover:bg-blue-700 transition text-sm md:text-base">
                Get Started
              </button>

            </div>

          </div>
        </div>

        {/* FOOTER */}
        <div className="pb-10 md:pb-16 px-6 md:px-10 text-white">

          <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-6">

            {/* LEFT LOGO */}
            <img
              src={RemoteLogo}
              loading="lazy"
              decoding="async"
              className="w-28 md:w-[160px] hover:scale-105 transition"
              alt="RemoteRecruit Logo"
            />

            {/* CENTER LOGO */}
            <div className="md:translate-y-16">
              <img
                src={RemoteSmallLogo}
                loading="lazy"
                decoding="async"
                className="w-8 md:w-10 opacity-90"
                alt="Remote Small Logo"
              />
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex gap-2 md:gap-3 flex-wrap justify-center">

              {[Facebook, Instagram, X, Twitter, Linkedin, Snapchat].map((icon, i) => (
                <img
                  key={i}
                  src={icon}
                  loading="lazy"
                  decoding="async"
                  alt="social icon"
                  className="w-6 h-6 md:w-7 md:h-7 bg-white/20 rounded-full p-1 hover:scale-110 transition cursor-pointer"
                />
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}