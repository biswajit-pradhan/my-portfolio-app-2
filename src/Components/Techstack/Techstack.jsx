const tech = [
  "React",
  "Vite",
  "Tailwind CSS",
  "JavaScript",
  "HTML",
  "CSS",
  "Git",
];

export default function TechStack() {
  return (
    <section className="py-20 px-6 bg-gray-900">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold">Tech Stack</h2>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {tech.map((item) => (
            <div
              key={item}
              className="rounded-lg bg-gray-800 py-4 text-gray-300 hover:bg-gray-700 transition"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
