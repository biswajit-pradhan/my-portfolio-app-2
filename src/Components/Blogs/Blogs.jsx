const Blogs = () => {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950">
      <div className="max-w-3xl text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
          Blogs
        </h1>

        <p className="mt-4 text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed">
          I’m currently working on adding a dedicated blogging section to this
          website. This space will soon feature articles focused on backend
          development, system design, and practical learnings from building
          real-world applications.
        </p>

        <p className="mt-4 text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed">
          At the moment, I’m setting up a clean and maintainable publishing
          workflow so future posts are consistent, useful, and easy to keep
          updated. This section will be live soon.
        </p>

        <div className="mt-8 inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-medium">
          <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
          <span>Coming soon</span>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
