import FeatureCard from "../components/FeatureCard";

import Feature1 from "../assets/Feature1.png";
import Feature2 from "../assets/Feature2.png";
import Feature3 from "../assets/Feature3.png";

import useScrollReveal from "../hooks/useScrollReveal";

export default function FeaturesSection() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section className="bg-white py-20 md:py-28 px-6 md:px-20 space-y-24 md:space-y-40 overflow-hidden">

      {/* ================= FEATURE 1 ================= */}
      <div
        ref={ref}
        className={`flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-20
        transition-all duration-700
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >

        <div className="flex-1 space-y-4 md:space-y-6 text-center md:text-left">

          <span className="text-sm bg-sky-100 text-sky-600 px-4 py-1 rounded-full font-medium inline-block">
            Global Reach
          </span>

          <h2 className="text-2xl md:text-4xl font-bold text-slate-900 leading-tight">
            The First Fully Global Job Board, Anywhere, Ever
          </h2>

          <p className="text-sm md:text-base text-slate-600 leading-relaxed max-w-xl mx-auto md:mx-0">
            RemoteRecruit connects candidates with opportunities around the world.
            With today’s remote-first workforce, you need to be able to find the best jobs
            and the best people for them, wherever they may be.
          </p>

        </div>

        <div className="flex-1 flex justify-center">
          <img
            src={Feature1}
            loading="lazy"
            decoding="async"
            alt="Feature 1"
            className="w-full max-w-[520px] hover:scale-[1.03] transition-transform duration-500"
          />
        </div>

      </div>

      {/* ================= FEATURE 2 ================= */}
      <div
        className={`flex flex-col md:flex-row-reverse items-center md:items-start gap-10 md:gap-20
        transition-all duration-700 delay-150
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >

        <div className="flex-1 space-y-4 md:space-y-6 text-center md:text-left">

          <span className="text-sm bg-sky-100 text-sky-600 px-4 py-1 rounded-full font-medium inline-block">
            Actually Fee Free
          </span>

          <h2 className="text-2xl md:text-4xl font-bold text-slate-900">
            Fee-Free Forever
          </h2>

          <p className="text-sm md:text-base text-slate-600 max-w-xl mx-auto md:mx-0">
            We don’t charge you fees and we don’t put up paywalls.
            We’re the bridge that connects job opportunities with the best candidates,
            with no middleman involved.
          </p>

        </div>

        <div className="flex-1 flex justify-center">
          <img
            src={Feature2}
            loading="lazy"
            decoding="async"
            alt="Feature 2"
            className="w-full max-w-[520px] hover:scale-[1.03] transition-transform duration-500"
          />
        </div>

      </div>

      {/* ================= FEATURE 3 ================= */}
      <div
        className={`flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-20
        transition-all duration-700 delay-300
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >

        <div className="flex-1 space-y-4 md:space-y-6 text-center md:text-left">

          <span className="text-sm bg-sky-100 text-sky-600 px-4 py-1 rounded-full font-medium inline-block">
            Custom Profile
          </span>

          <h2 className="text-2xl md:text-4xl font-bold text-slate-900">
            Showcase Your Talents
          </h2>

          <p className="text-sm md:text-base text-slate-600 max-w-xl mx-auto md:mx-0">
            Personalize your profile with everything that makes you unique.
            Add an introductory video and other media for a personal touch
            that stands out to employers and candidates.
          </p>

        </div>

        <div className="flex-1 flex justify-center relative">

          <img
            src={Feature3}
            loading="lazy"
            decoding="async"
            alt="Feature 3"
            className="w-full max-w-[520px] hover:scale-[1.03] transition-transform duration-500"
          />

          <div className="absolute right-0 top-6 md:top-10">
            <FeatureCard
              title="Best Developer Ever!"
              subtitle="Past Client Feedback"
            />
          </div>

        </div>

      </div>

    </section>
  );
}