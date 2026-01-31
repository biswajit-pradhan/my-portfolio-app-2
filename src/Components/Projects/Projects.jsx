export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-[70vh] flex items-center justify-center px-6 bg-white dark:bg-gray-950"
    >
      <div className="max-w-3xl text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
          Projects
        </h2>

        <p className="mt-4 text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed">
          I’m currently curating and refining my project work to showcase
          real-world applications, clean architecture, and practical problem
          solving. This section will highlight projects focused on backend
          development, system design, and full-stack implementations.
        </p>

        <p className="mt-4 text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed">
          Each project will include clear descriptions, technical decisions, and
          links to live demos or source code where applicable. This section will
          be updated soon.
        </p>

        <div className="mt-8 inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-medium">
          <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
          <span>Projects coming soon</span>
        </div>
      </div>
    </section>
  );
}
