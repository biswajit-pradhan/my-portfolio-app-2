import { ReactTyped } from "react-typed";
import images from "../../assets/Images/images.json";

const About = () => {
  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-950 px-4 py-16">
      <div className="max-w-5xl mx-auto">
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

        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-lg p-8 sm:p-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="flex justify-center">
            <img
              src={images.my_image_2}
              alt="Biswajit Pradhan"
              className="w-64 h-64 object-cover rounded-full border border-gray-300 dark:border-gray-700"
            />
          </div>

          <div className="md:col-span-2 space-y-6">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              I’m{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                Biswajit Pradhan
              </span>
              , a backend-focused software developer with hands-on experience
              building scalable, secure, and maintainable applications using
              Java, Spring Boot, and SQL.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              My work involves developing RESTful services, handling
              authentication and authorization, optimizing queries, and applying
              best practices in error handling, logging, and application
              security. I value clean architecture and separation of concerns.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              While backend development is my primary focus, I also have working
              experience with React and Tailwind CSS, which helps me build
              end-to-end solutions and collaborate better with frontend teams.
            </p>
          </div>
        </div>

        <p className="mt-10 text-center text-sm text-gray-500 dark:text-gray-400">
          Open to backend-heavy roles and challenging engineering problems.
        </p>
      </div>
    </section>
  );
};

export default About;
