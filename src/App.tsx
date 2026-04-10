import { useTheme } from "./hooks/useTheme";
import Navbar from "./layout/Navbar";
import About from "./section/About";
import Experience from "./section/Experience";
import Hero from "./section/Hero";
import Projects from "./section/Projects";
import Testimonials from "./section/Testimonials";

function App() {
  return (
    <div className=" min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Testimonials />
      </main>
    </div>
  );
}

export default App;
