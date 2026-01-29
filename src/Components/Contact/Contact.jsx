export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-semibold">Get in Touch</h2>

        <p className="mt-4 text-gray-400">
          Want to work together or just say hi?
        </p>

        <a
          href="mailto:your.email@example.com"
          className="inline-block mt-8 px-6 py-3 bg-indigo-500 rounded-lg hover:bg-indigo-600 transition"
        >
          Say Hello
        </a>
      </div>
    </section>
  );
}
