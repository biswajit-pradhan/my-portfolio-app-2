import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import images from "../../assets/Images/images.json";

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const imageContainerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (imageContainerRef.current) {
      const rect = imageContainerRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };
  return (
    <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-40 h-40 bg-indigo-400/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-10 w-40 h-40 bg-purple-400/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-pink-400/15 rounded-full blur-2xl animate-float" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          <div className="lg:col-span-3 space-y-6">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30"
              style={{ animation: "slideInLeft 0.6s ease-out" }}
            >
              <span className="text-xs font-semibold text-indigo-700 dark:text-indigo-300 uppercase tracking-wider">
                👋 Welcome
              </span>
              <div className="w-1 h-1 rounded-full bg-indigo-500 animate-pulse" />
              <span className="text-xs text-indigo-600 dark:text-indigo-400">
                Explore my portfolio
              </span>
            </div>

            <div style={{ animation: "slideInLeft 0.6s ease-out 0.1s both" }}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-gray-900 dark:text-white">
                Hi, I'm{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 animate-pulse">
                  Biswajit
                </span>
              </h1>
            </div>

            <div style={{ animation: "slideInLeft 0.6s ease-out 0.2s both" }}>
              <p className="text-lg sm:text-xl font-semibold text-gray-700 dark:text-gray-200">
                Fullstack Developer (Backend Focused)
              </p>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mt-2">
                Building beautiful, fast, and responsive web experiences with
                Springboot & React.
              </p>
            </div>

            <div
              style={{ animation: "slideInLeft 0.6s ease-out 0.3s both" }}
              className="space-y-2"
            >
              <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <span className="text-xl">⚡</span>
                <span>Fast and efficient development</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <span className="text-xl">🎨</span>
                <span>Beautiful UI</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <span className="text-xl">🚀</span>
                <span>Performance optimized</span>
              </div>
            </div>

            <div
              style={{ animation: "slideInLeft 0.6s ease-out 0.4s both" }}
              className="flex flex-col sm:flex-row gap-3 pt-4"
            >
              <NavLink
                to="/projects"
                className="group relative inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 transition-all group-hover:scale-110" />
                <div className="relative flex items-center gap-2">
                  <span>View Work</span>
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </NavLink>

              <NavLink
                to="/contact"
                className="group inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-600 transition-all duration-300 hover:scale-105 active:scale-95 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <span>Let's Talk</span>
                <span className="ml-2 group-hover:animate-bounce">💬</span>
              </NavLink>
            </div>
          </div>

          <div
            className="lg:col-span-2"
            style={{ animation: "slideInRight 0.6s ease-out 0.2s both" }}
            onMouseMove={handleMouseMove}
            ref={imageContainerRef}
          >
            <div className="relative group">
              <div
                className="absolute -inset-0.5 rounded-2xl pointer-events-none opacity-100 z-0 transition-all duration-100"
                style={{
                  background: `conic-gradient(from ${Math.atan2(mousePos.y - 100, mousePos.x - 100) * (180 / Math.PI)}deg, 
                    rgba(99, 102, 241, 0.8) 0%, 
                    rgba(168, 85, 247, 0.6) 25%, 
                    rgba(236, 72, 153, 0.4) 50%, 
                    rgba(99, 102, 241, 0.2) 75%, 
                    rgba(99, 102, 241, 0.8) 100%)`,
                  filter: "blur(10px)",
                }}
              />

              <div
                className="absolute -inset-1 rounded-2xl pointer-events-none opacity-75 z-0"
                style={{
                  background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, 
                    rgba(99, 102, 241, 0.6) 0%, 
                    rgba(168, 85, 247, 0.3) 30%, 
                    transparent 70%)`,
                  filter: "blur(15px)",
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/30 via-purple-500/20 to-pink-500/30 rounded-2xl blur-2xl animate-pulse z-0" />

              <div className="relative z-10 rounded-2xl border-2 border-white/20 dark:border-white/10 backdrop-blur-sm overflow-hidden shadow-2xl group hover:scale-105 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer" />

                <img
                  src={images.my_image}
                  alt="Portfolio"
                  className="w-full h-auto object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </section>
  );
}
