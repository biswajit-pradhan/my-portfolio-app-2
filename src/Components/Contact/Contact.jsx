import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

export default function Contact() {
  const formRef = useRef(null);
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const isLocalhost = window.location.hostname === "localhost";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e) => {
    if (isLocalhost) {
      e.preventDefault();
      toast.info(
        "Contact form submissions work only after deploying to Netlify.",
        { autoClose: 4000 },
      );
    }
  };

  const handleClear = () => {
    formRef.current?.reset();
    toast.info("Form cleared");
  };

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

          <div className="relative rounded-2xl p-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur border border-gray-200 dark:border-gray-800 shadow-xl">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white text-center">
              Get in Touch
            </h2>

            <div className="mt-3 flex justify-center">
              <span className="block w-16 h-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 animate-pulse" />
            </div>

            <p className="mt-4 text-gray-600 dark:text-gray-400 text-center">
              Let’s talk about systems, APIs, or opportunities.
            </p>

            <form
              ref={formRef}
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="mt-10 space-y-6"
            >
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="bot-field" />

              <div className="relative">
                <input
                  type="text"
                  name="user_name"
                  required
                  placeholder="Your Name"
                  className="peer w-full px-4 pt-6 pb-2 rounded-lg bg-white dark:bg-gray-950 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white placeholder-transparent focus:outline-none focus:border-indigo-500"
                />
                <label className="absolute left-4 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-indigo-500">
                  Your Name
                </label>
              </div>

              <div className="relative">
                <input
                  type="email"
                  name="user_email"
                  required
                  placeholder="Your Email"
                  className="peer w-full px-4 pt-6 pb-2 rounded-lg bg-white dark:bg-gray-950 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white placeholder-transparent focus:outline-none focus:border-indigo-500"
                />
                <label className="absolute left-4 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-indigo-500">
                  Your Email
                </label>
              </div>

              <div className="relative">
                <textarea
                  name="message"
                  rows="4"
                  required
                  placeholder="Message"
                  className="peer w-full px-4 pt-6 pb-2 rounded-lg bg-white dark:bg-gray-950 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white placeholder-transparent focus:outline-none focus:border-indigo-500"
                />
                <label className="absolute left-4 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-indigo-500">
                  Message
                </label>
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  className={`flex-1 py-3 rounded-lg font-medium text-white transition-all duration-300 ${
                    isLocalhost
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-gradient-to-r from-indigo-600 to-purple-600 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(99,102,241,0.4)]"
                  }`}
                >
                  {isLocalhost ? "Deploy to enable" : "Send Message"}
                </button>

                <button
                  type="button"
                  onClick={handleClear}
                  className="flex-1 py-3 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 transition-all"
                >
                  Clear
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
