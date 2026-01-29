const projects = [
  {
    title: "Portfolio Website",
    desc: "Personal portfolio built with React and Tailwind.",
  },
  {
    title: "Dashboard UI",
    desc: "Responsive admin dashboard layout.",
  },
  {
    title: "Landing Page",
    desc: "Marketing landing page with modern UI.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center">
          Featured Projects
        </h2>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-900 rounded-xl p-6 hover:translate-y-[-4px] transition"
            >
              <div className="h-40 bg-gray-800 rounded mb-4" />

              <h3 className="text-xl font-medium">{project.title}</h3>
              <p className="mt-2 text-gray-400">{project.desc}</p>

              <div className="mt-4 flex gap-4 text-sm text-indigo-400">
                <a href="#">Live</a>
                <a href="#">Code</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
