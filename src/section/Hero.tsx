/* eslint-disable react-hooks/purity */
import { ArrowRight, Github, Linkedin, Download } from "lucide-react";
import { FaMedium } from "react-icons/fa6";
import Tictactoe from "../components/Tictactoe";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center ">
      {/* Content */}
      <div className="container mx-auto px-6 pt-5 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                Software Engineer
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100 ">
                <span className=" italic">Hello!! I am</span> <br />{" "}
                <span className="text-primary glow-text ">Isuru Kavinda</span>
              </h1>
              <div></div>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                I enjoy building everything from simple business websites to
                fully interactive web applications. If you're looking to
                establish your online presence or hire a developer, feel free to
                reach out.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <a
                className="  glass rounded-full bg-primary/20 border-2 justify-center items-center px-8 py-4 hover:border-primary/50 transition-all  flex gap-2 w-52"
                href="#contact"
              >
                <span className="text-md font-medium text-lg">Contact Me</span>

                <ArrowRight className="w-5 h-5" />
              </a>

              {/* Floating Download Button */}
              <a href="/portfolio/CV_RVIK_Lakshan.pdf" download>
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
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Follow me: </span>
              {[
                { icon: Github, href: "https://github.com/IsuruKavi" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/rvikl" },
                {
                  icon: FaMedium,
                  href: "https://medium.com/@isurukavindalakshan863",
                },
              ].map((social, idx) => (
                <a
                  target="_blank"
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
              <div className="relative  rounded-3xl">
                <Tictactoe />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
