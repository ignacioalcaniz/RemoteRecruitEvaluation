import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollTop}
      aria-label="Scroll to top"
      className="
        fixed bottom-6 right-6
        bg-sky-500 text-white
        w-12 h-12
        rounded-full
        shadow-lg
        flex items-center justify-center
        text-xl
        hover:bg-sky-600
        hover:scale-110
        transition-all duration-300
        animate-fade-up
      "
    >
      ↑
    </button>
  );
}