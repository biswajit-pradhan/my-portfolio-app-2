import React from "react";
import { ReactTyped } from "react-typed";

const PrivacyPolicy = () => {
  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-950 px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <div className="mb-10 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Privacy Policy
          </h1>
          <p className="mt-3 text-gray-600 dark:text-gray-400 text-sm">
            <ReactTyped
              strings={[
                "Transparency matters. Here’s how your data is handled.",
              ]}
              typeSpeed={35}
              startDelay={300}
              showCursor={false}
            />
          </p>
        </div>

        <div className="rounded-2xl bg-white dark:bg-gray-900 shadow-lg border border-gray-200 dark:border-gray-800 p-8 space-y-8">
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Information Collection
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              If you contact me through this website, I may collect basic
              information such as your name, email address, and message content
              only to respond to your inquiry.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Usage of Information
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Your information is never sold, rented, or shared with third
              parties. It is used only for communication and improving the
              website experience.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Cookies & Analytics
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              This site may use cookies or basic analytics tools to understand
              usage patterns and improve performance. You can disable cookies in
              your browser settings at any time.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Data Security
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Reasonable measures are taken to protect your data. However, no
              online transmission can be guaranteed to be completely secure.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Updates
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              This Privacy Policy may be updated occasionally. Continued use of
              this website implies acceptance of the latest version.
            </p>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
          Questions? Reach out via the contact page anytime.
        </p>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
