import { ArrowUpRight, Code2, Lightbulb, Rocket, Users } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className=" gap-16 items-center w-">
          {/* Left Column */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              About me
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200 md:flex w-full justify-between ">
              <div className="space-y-4 md:w-1/2 w-full">
                <p>
                  I’m a software engineer with 2+ years of experience developing
                  digital solutions. I began with web and game development,
                  which helped me build strong fundamentals.
                </p>
                <p>
                  I specialize in React, Next.js, Node.js, and Express, creating
                  everything from sleek websites to full-scale SaaS platforms.
                  Currently, I’m learning Java and Spring Boot to deepen my
                  backend development skills.
                </p>
                <p className="text-white/80">
                  I enjoy writing tech blogs about what I learn in my day-to-day
                  journey, with the goal of making things easier for others.
                  Feel free to explore my blog—an interactive space where I
                  share my knowledge and experiences.
                </p>
                <a
                  className=" gap-2 items-center underline decoration-primary hover:decoration-2 md:block md:flex hidden"
                  href="https://medium.com/@isurukavindalakshan863"
                  target="_blank"
                >
                  <span className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                  <span className=" italic text-2xl font-semibold text-white">
                    Check out my blog
                  </span>
                  <ArrowUpRight className="w-6 h-6" />
                </a>
              </div>
              {/* Right Column - Hilights */}
              <div className="">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-secondary-foreground">
                    Education
                  </h3>

                  <div className="space-y-3 text-muted-foreground">
                    <div>
                      <p className="font-medium text-white">
                        BSc (Hons) Computer Networks
                      </p>
                      <p>University of Wolverhampton</p>
                      <p className="text-sm opacity-70">2025 - 2026</p>
                    </div>

                    <div>
                      <p className="font-medium text-white">
                        Electronic & Telecommunication Engineering Technology
                        (Merit)
                      </p>
                      <p>Institute of Technology University of Moratuwa</p>
                      <p className="text-sm opacity-70">2020 - 2024</p>
                    </div>
                  </div>
                   <a
                  className=" gap-2 items-center underline decoration-primary hover:decoration-2 md:hidden flex"
                  href="https://medium.com/@isurukavindalakshan863"
                  target="_blank"
                >
                  <span className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                  <span className=" italic text-2xl font-semibold text-white">
                    Check out my blog
                  </span>
                  <ArrowUpRight className="w-6 h-6" />
                </a>
                </div>
                {/* <div className="relative flex justify-center mt-6 ">
              <div
                className="absolute inset-0 
              rounded-3xl bg-gradient-to-br 
              from-primary/30 via-transparent 
              to-primary/10 blur-2xl animate-pulse"
              />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/profile-photo.jpg"
                  alt="Pedro Machado"
                  className="w-56  rounded-2xl"
                />
              </div>
            </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
