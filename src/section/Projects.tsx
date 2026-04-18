import { ArrowUpRight, Github, Globe } from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const projects = [
  {
    title: "Socialic",
    description:
      "Developed AI-powered content recommendations for a SaaS social media platform for improving content creation efficiency.",
    tags: ["Next.js", "Express.js", "MongoDB"],
    links: {
      live: "https://www.socialic.app",
    },
  },
  {
    title: "Anytask",
    description:
      "Contributed to a mobile marketplace app using React Native, working on API integration, authentication, Genie payments, and Firebase-based notifications and analytics.",
    tags: ["React Native", "Firebase", "MongoDB", "Express.js"],
    links: {
      live: "https://play.google.com/store/apps/details?id=com.skalafy.anytask&hl=en",
    },
  },
  {
    title: "Voclix",
    description:
      "Contributed to an AI-driven English learning application, focusing on offline-first functionality and developing interactive modules including impromptu speaking, vocabulary practice, and writing exercises.",
    tags: ["React Native", "Express.js", "SQLite"],
    links: {
      live: "https://play.google.com/store/apps/details?id=com.skalafy.voclix&hl=en",
    },
  },
  {
    title: "Patient Management System",
    description:
      "Designed a microservices-based backend system for managing patients, billing, and analytics using Spring Boot. Implemented gRPC for inter-service communication with PostgreSQL and Docker for scalable deployment.",
    tags: ["Java", "Spring Boot", "gRPC", "PostgreSQL", "Docker"],
    links: {
      github: "https://github.com/IsuruKavi/Patient-management-system",
    },
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          {/* <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p> */}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-3 pt-2">
                  {project.links?.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline flex items-center gap-1"
                    >
                       <Globe className="w-4 h-4" /> Live
                    </a>
                  )}


                  {project.links?.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline flex items-center gap-1"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div> */}
      </div>
    </section>
  );
};
