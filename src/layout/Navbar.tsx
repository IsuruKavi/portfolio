import React, { useState } from "react";
import Button from "../components/Button";
const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experince" },
  { href: "#testimonials", label: "Testimonials" },
];
const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <header className="flxe top-0 left-0 bg-transparent py-5">
      <nav className="container mx-auto px-6 flex flex-row justify-between ">
        <a
          href="#"
          className="text-xl font-bold tracking-tight hover:text-primary"
        >
          IK <span className="text-primary">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden  md:flex md:flex-row gap-2 items-center glass p-3 py-2 rounded-full">
          {navLinks.map((link, index) => (
            <a
              className="text-sm rounded-full px-3 py-1 text-muted-foreground hover:text-foreground rouned-full hover:bg-surface"
              key={index}
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div>
          <Button>Contact Me</Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
