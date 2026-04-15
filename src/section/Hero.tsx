/* eslint-disable react-hooks/purity */
import {
  ArrowRight,
  ChevronDown,
  Github,
  Linkedin,
  Twitter,
  Download,
} from "lucide-react";

import Dino from "../components/Tictactoe";
import Tictactoe from "../components/Tictactoe";

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

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Bg */}
      <div className="absolute inset-0">
        {/* <img
          src="/hero-bg.jpg"
          alt="Hero image"
          className="w-full h-full object-cover opacity-40"
        /> */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-10 md:pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Software Engineer • React Specialist
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Crafting <span className="text-primary glow-text">digital</span>
                <br />
                experiences with
                <br />
                <span className="font-serif italic font-normal text-white">
                  precision.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Hi, I'm Pedro Machado — a software engineer specializing in
                React, Next.js, and TypeScript. I build scalable, performant web
                applications that users love.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <button className="  glass rounded-full bg-primary/20 border-2 justify-center items-center px-8 py-4 hover:border-primary/50 transition-all  flex gap-2 w-52">
                <span className="text-md font-medium text-lg">Contact Me</span>

                <ArrowRight className="w-5 h-5" />
              </button>

              {/* Floating Download Button */}
              <button
                className="md:animate-float relative bg-transparent border-2 border-border  
        text-foreground hover:border-primary hover:border-2 transition-all flex gap-2 items-center
        duration-500 
        disabled:opacity-50 disabled:cursor-not-allowed group 
        px-8 py-4 text-lg font-medium rounded-full 
        animated-border glass w-52"
              >
                <Download className="w-5 h-5 text-primary" />
                <span className="text-md font-medium text-white">
                  Download CV
                </span>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Follow me: </span>
              {[
                { icon: Github, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Twitter, href: "#" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  {<social.icon className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </div>
          {/* Right Column - dino game */}
          <div className="relatice animate-fade-in animation-delay-300 ">
            {/* Profile Image */}
            <div className="relative  mx-auto">
              <div className="relative  rounded-3xl"><Tictactoe /></div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
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
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 
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
    </section>
  );
};
