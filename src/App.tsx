

import { Footer } from "./layout/Footer";
import Navbar from "./layout/Navbar";
import { About } from "./section/About";
import { Contact } from "./section/Contact";

import {Experience} from "./section/Experience";
import { Hero } from "./section/Hero";

import {Projects} from "./section/Projects";
import Skill from "./section/Skill";


function App() {
  return (
    <div className=" min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Skill/>
        <About />
        
        <Experience />
        <Projects />
        
        <Contact/>
        <Footer/>
      </main>
    </div>
  );
}

export default App;
