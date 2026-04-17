import { ChevronDown } from "lucide-react";
import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaGitAlt,
  FaJava,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiSpringboot,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiTailwindcss,
  SiGithubactions,
  SiJavascript,
} from "react-icons/si";

const skills = [
  { name: "JavaScript", icon: SiJavascript },
  { name: "Java", icon: FaJava },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: FaReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "SpringBoot", icon: SiSpringboot },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Express.js", icon: SiExpress },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Docker", icon: FaDocker },
  { name: "AWS", icon: FaAws },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Git", icon: FaGitAlt },
  { name: "GitHub Actions", icon: SiGithubactions },
];

const Skill = () => {
  return (
    <div className="mt-20 animate-fade-in animation-delay-600">
      <p className="text-sm text-muted-foreground mb-6 text-center">
        Technologies I work with
      </p>
      <div className="relative overflow-hidden">
        <div
          className="absolute left-0 top-0 bottom-0 w-32
             bg-gradient-to-r from-background to-transparent z-10"
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-32
             bg-gradient-to-l from-background to-transparent z-10"
        />

        <div className="flex animate-marquee">
          {[...skills, ...skills].map((skill, idx) => {
            const Icon = skill.icon;

            return (
              <div key={idx} className="flex-shrink-0 px-8 py-4">
                <div className="flex flex-col items-center gap-2">
                  <Icon className="text-2xl  hover:text-bg-primary transition-colors text-bg-primary" />

                  <span className="text-xl font-normal text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill.name}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        
      </div>
       <div
        className=" mt-6
      animate-fade-in animation-delay-800"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </div>
  );
};

export default Skill;
