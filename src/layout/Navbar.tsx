import React, { useState } from "react";
import Button from "../components/Button";
import { Menu, X } from "lucide-react";
const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experince" },
  { href: "#testimonials", label: "Testimonials" },
];
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="flxe top-0 left-0 bg-transparent py-5">
      <nav className="container mx-auto px-6 flex flex-row justify-between items-center ">
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
        <div className="hidden md:flex">
          <Button>Contact Me</Button>
        </div>
        {/* Mobile Menu button */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? <X/>:<Menu size={24} />}
        </button>
        {/* Mobile Menu */}
      </nav>
      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong flex flex-col gap-4 px-6 py-4 animate-fade-in">
          {navLinks.map((link, index) => (
            <a
              className="text-md text-muted-foreground hover:text-foreground py-1"
              key={index}
              href={link.href}
            >
              {link.label}
            </a>
          ))}
          {/* CTA Button */}
          <div className=" md:hidden">
            <Button size="sm" className="w-full">
              Contact Me
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
