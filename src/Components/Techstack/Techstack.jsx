import {
  Boxes,
  Cloud,
  Code,
  Database,
  GitBranch,
  Server,
  Shield,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const TechStack = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const techs = [
    { name: "Java", icon: Code },
    { name: "Spring Boot", icon: Server },
    { name: "Spring Security", icon: Shield },
    { name: "REST APIs", icon: GitBranch },
    { name: "PostgreSQL", icon: Database },
    { name: "MySQL", icon: Database },
    { name: "SQL", icon: Database },
    { name: "AWS", icon: Cloud },
    { name: "Docker", icon: Boxes },
    { name: "CI / CD", icon: GitBranch },
    { name: "React", icon: Code },
    { name: "JavaScript", icon: Code },
  ];

  useEffect(() => {
    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-28 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Technology Stack
          </h2>
          <p className="mt-3 text-gray-400 text-base sm:text-lg">
            Tools and technologies I use to build scalable systems
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-14 justify-items-center">
          {techs.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div
                key={tech.name}
                style={{ transitionDelay: `${index * 120}ms` }}
                className={`
                  group flex flex-col items-center gap-3
                  transition-all duration-[1000ms]
                  ease-[cubic-bezier(.16,1,.3,1)]
                  ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
                `}
              >
                <div
                  className="
                    w-20 h-20 rounded-full
                    flex items-center justify-center
                    bg-gray-900 border border-gray-700
                    text-gray-300
                    transition-all duration-300
                    group-hover:border-indigo-400
                    group-hover:shadow-[0_0_30px_rgba(99,102,241,0.35)]
                    group-hover:-translate-y-1
                  "
                >
                  <Icon className="w-7 h-7 transition-all duration-300 group-hover:scale-110 group-hover:text-white" />
                </div>

                <span className="text-sm font-medium text-gray-300 transition-colors duration-300 group-hover:text-white">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
