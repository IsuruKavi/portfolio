import Particles from "./components/Particles";

import { Footer } from "./layout/Footer";
import Navbar from "./layout/Navbar";
import { About } from "./section/About";
import { Contact } from "./section/Contact";

import { Experience } from "./section/Experience";
import { Hero } from "./section/Hero";

import { Projects } from "./section/Projects";
import Skill from "./section/Skill";

function App() {
 
  return (
    <div className=" min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <div
          style={{ width: "100%", height: "100%", position: "absolute" }}
          className="top-0 -z-10 min-h-screen"
        >
          <Particles
            particleColors={["#ffffff"]}
            particleCount={100}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            alphaParticles={false}
            disableRotation={false}
            pixelRatio={1}
          />
        </div>
        <Hero />
        <Skill />
        <About />

        <Experience />
        <Projects />

        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
