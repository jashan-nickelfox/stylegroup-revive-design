import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [useDarkBg, setUseDarkBg] = useState(false);

  const handleScroll = () => {
    const yOffset = window.pageYOffset;

    // Show button after scrolling 300px
    setIsVisible(yOffset > 300);

    // Change style after 1500px (adjust based on where green section starts)
    setUseDarkBg(yOffset > 1500);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-40 p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      } ${
        useDarkBg
          ? "bg-white text-stylegroup-green hover:shadow-stylegroup-green/40"
          : "bg-stylegroup-green text-white hover:shadow-white/40"
      }`}
      aria-label="Back to top"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
};

export default BackToTop;
