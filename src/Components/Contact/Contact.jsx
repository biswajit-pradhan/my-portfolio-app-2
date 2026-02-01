import { useEffect, useRef, useState } from "react";

export default function Contact() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-32 px-6 overflow-hidden bg-gray-50 dark:bg-black"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[520px] h-[520px] bg-indigo-500/20 blur-3xl rounded-full" />
      </div>

      <div
        className={`
          relative max-w-xl mx-auto
          transition-all duration-1000
          ease-[cubic-bezier(.16,1,.3,1)]
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
        `}
      >
        <div className="relative rounded-2xl p-[2px]">
          <div
            className="
              absolute inset-0 rounded-2xl
              bg-[conic-gradient(from_0deg,transparent,rgba(99,102,241,0.8),transparent)]
              animate-[spin_10s_linear_infinite]
              opacity-70
            "
          />

          <div className="relative rounded-2xl p-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur border border-gray-200 dark:border-gray-800 shadow-xl text-center">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
              Get in Touch
            </h2>

            <div className="mt-3 flex justify-center">
              <span className="block w-16 h-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 animate-pulse" />
            </div>

            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Let’s talk about systems, APIs, or opportunities.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:pbiswajit967@gmail.com"
                className="
                  flex-1 py-3 rounded-lg font-medium text-white
                  bg-gradient-to-r from-indigo-600 to-purple-600
                  hover:scale-[1.03]
                  hover:shadow-[0_0_30px_rgba(99,102,241,0.4)]
                  transition-all text-center
                "
              >
                Email Me
              </a>

              <a
                href="https://www.linkedin.com/in/biswajit-pradhan-1a4a7b1b1/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex-1 py-3 rounded-lg font-medium
                  bg-gray-200 dark:bg-gray-800
                  text-gray-700 dark:text-gray-300
                  hover:bg-gray-300 dark:hover:bg-gray-700
                  transition-all text-center
                "
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
