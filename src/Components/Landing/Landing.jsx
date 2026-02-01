import { NavLink } from "react-router-dom";
import images from "../../assets/Images/images.json";

const Landing = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gray-50 dark:bg-black overflow-hidden px-4">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-500/5" />
      </div>

      <div className="relative max-w-md w-full text-center">
        <div className="mb-10 opacity-0 translate-y-8 animate-[fadeUp_0.9s_ease-out_forwards]">
          <div className="group inline-block">
            <img
              src={images.heroImage}
              alt="Landing"
              className="
                w-64 h-64 mx-auto object-cover rounded-2xl shadow-xl
                transition-transform duration-500 ease-out
                group-hover:scale-[1.02] group-hover:-rotate-1
                animate-[float_8s_ease-in-out_infinite]
              "
            />
          </div>
        </div>

        <h1
          className="text-3xl font-semibold text-gray-900 dark:text-white mb-2
                       opacity-0 translate-y-6 animate-[fadeUp_0.9s_0.1s_ease-out_forwards]"
        >
          Biswajit Pradhan
        </h1>

        <p
          className="text-gray-600 dark:text-gray-400 mb-10
                      opacity-0 translate-y-6 animate-[fadeUp_0.9s_0.2s_ease-out_forwards]"
        >
          Backend-focused software developer
        </p>

        <NavLink
          to="/home"
          className="
            inline-flex items-center justify-center px-10 py-3 rounded-lg font-medium text-white
            bg-gradient-to-r from-indigo-600 to-purple-600
            transition-all duration-300
            hover:scale-[1.05]
            hover:shadow-[0_12px_30px_rgba(99,102,241,0.35)]
            active:scale-[0.97]
            opacity-0 translate-y-6
            animate-[fadeUp_0.9s_0.3s_ease-out_forwards]
          "
        >
          Enter Portfolio
        </NavLink>
      </div>

      <style>
        {`
          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(24px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes float {
            0% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0); }
          }
        `}
      </style>
    </section>
  );
};

export default Landing;
