import images from "../../assets/Images/images.json";
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6 md:px-12 overflow-hidden bg-white dark:bg-gray-950 transition-colors">
      <div className="absolute -top-40 -left-40 w-[420px] h-[420px] bg-indigo-500/30 blur-[140px] animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[520px] h-[520px] bg-purple-500/20 blur-[160px] animate-pulse" />

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        <div>
          <p
            className="text-sm uppercase tracking-widest text-indigo-400 animate-blur-in"
            style={{ animationDelay: "0s" }}
          >
            Frontend Developer
          </p>

          <h1
            className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 dark:text-white animate-blur-in-left"
            style={{ animationDelay: "0.2s" }}
          >
            Crafting clean <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-indigo-600">
              modern web UIs
            </span>
          </h1>

          <p
            className="mt-6 text-gray-600 dark:text-gray-400 max-w-xl animate-blur-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            I’m Biswajit, a frontend developer focused on building fast,
            responsive, and visually polished user interfaces using React, Vite,
            and Tailwind CSS.
          </p>

          <div
            className="mt-10 flex gap-4 animate-blur-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            <a
              href="#projects"
              className="px-7 py-4 rounded-xl bg-indigo-500 hover:bg-indigo-600 transition shadow-lg shadow-indigo-500/30 text-white hover:scale-105 hover:shadow-2xl duration-300"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-7 py-4 rounded-xl border border-gray-300 dark:border-white/10 backdrop-blur hover:border-gray-400 dark:hover:border-white/30 transition text-gray-900 dark:text-white hover:scale-105 duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div
          className="relative hidden md:flex justify-center animate-blur-in-right"
          style={{ animationDelay: "0.3s" }}
        >
          <div className="absolute w-[340px] h-[340px] bg-indigo-500/30 blur-[120px] rounded-full animate-pulse" />

          <div
            className="relative w-[260px] h-[330px] rounded-2xl overflow-hidden
                       border border-gray-300 dark:border-white/10 bg-gray-100 dark:bg-white/5 backdrop-blur-xl
                       shadow-2xl animate-float
                       hover:scale-105 hover:rotate-1 transition duration-500 animate-glow-pulse"
          >
            <img
              src={images.my_image}
              alt="Biswajit"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
