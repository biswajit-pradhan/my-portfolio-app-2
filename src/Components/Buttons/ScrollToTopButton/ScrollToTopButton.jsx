import { useEffect, useState } from "react";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-6 right-6 z-50
        p-3 rounded-full
        bg-indigo-600 text-white
        shadow-lg
        transition-all duration-300
        hover:bg-indigo-700 hover:scale-110
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}
      `}
      aria-label="Scroll to top"
    >
      ↑
    </button>
  );
};

export default ScrollToTopButton;
