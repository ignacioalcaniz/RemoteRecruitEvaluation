import Hero from "./sections/Hero";
import FeaturesSection from "./sections/FeaturesSection";
import FAQ from "./sections/FAQ";
import CTA from "./sections/CTA";
import ScrollToTop from "./components/ScrollToTop";
import FinalSection from "./sections/FinalSection";

export default function App() {
  return (
    <div>
      <Hero />
      <FeaturesSection />
      <CTA />
       <FAQ />
      <FinalSection />
      <ScrollToTop />
    </div>
  );
}