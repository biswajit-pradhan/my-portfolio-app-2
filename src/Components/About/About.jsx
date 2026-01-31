import { ReactTyped } from "react-typed";

const About = () => {
  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-950 px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            About Me
          </h1>

          <p className="mt-3 text-gray-600 dark:text-gray-400 text-sm h-5">
            <ReactTyped
              strings={["Backend-first developer with a strong system mindset"]}
              typeSpeed={40}
              startDelay={300}
              showCursor={false}
            />
          </p>
        </div>

        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-lg p-8 sm:p-10 space-y-6">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            I’m{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              Biswajit Pradhan
            </span>
            , a backend-focused software developer with hands-on experience
            building scalable, secure, and maintainable applications using Java,
            Spring Boot, and SQL. I enjoy designing clean APIs, structuring
            business logic effectively, and working with databases to ensure
            data consistency and performance.
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            My work involves developing RESTful services, handling
            authentication and authorization, optimizing queries, and applying
            best practices in error handling, logging, and application security.
            I value clean architecture, separation of concerns, and writing code
            that is easy to understand and extend.
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            While backend development is my primary focus, I also have working
            experience with React and Tailwind CSS, which helps me collaborate
            better with frontend teams and build complete end-to-end solutions.
            I continuously work on improving my understanding of system design,
            performance tuning, and real-world problem solving.
          </p>
        </div>

        <p className="mt-10 text-center text-sm text-gray-500 dark:text-gray-400">
          Open to backend-heavy roles and challenging engineering problems.
        </p>
      </div>
    </section>
  );
};

export default About;
