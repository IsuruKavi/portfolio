import React, { useEffect, useState } from "react";

import { Menu, Palette, X } from "lucide-react";
import { useTheme } from "../hooks/useTheme";
const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experince" },
  { href: "#contact", label: "Contact" },
  // { href: "#testimonials", label: "Testimonials" },
];

const themes = [
  { color: "Purple", name: "theme-purple", bg_color: "#a855f7" },
  { color: "Green", name: "theme-default", bg_color: "#20b2a6" },
  { color: "Amber", name: "theme-amber", bg_color: "#f59e0b" },
  { color: "Cyan", name: "theme-cyan", bg_color: "#06b6d4" },
  // { color: "Red", name: "theme-red", bg_color: "#f43f5e" },
  { color: "Indigo", name: "theme-indigo", bg_color: "#6366f1" },
  { color: "Navy", name: "theme-navy", bg_color: " #2563eb" },
  // { color: "Lime", name: "theme-lime", bg_color: "#84cc16" },
];
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { setTheme } = useTheme();
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      console.log("resize:", width);
      if (width > 640) {
        setIsDropdownOpen(false);
        setIsMobileMenuOpen(false);
        console.log("resizing");
      }
    };

    handleResize(); // run once on mount

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleClickOutside = (event: any) => {
      // Don't close if clicking on the button itself or inside dropdown
      if (
        !event.target.closest(".theme-dropdown") &&
        !event.target.closest(".theme-button")
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleThemeChange = (themeName: any) => {
    setTheme(themeName);
    setIsDropdownOpen(false); // Close dropdown after selection
  };
  console.log(isDropdownOpen);
  return (
    <header className="md:flex top-0 left-0 bg-transparent py-5">
      <nav className="container mx-auto px-6 flex flex-row md:justify-between items-center ">
        <a
          href="#"
          className="text-xl font-bold tracking-tight hover:text-primary"
        >
          IK <span className="text-primary">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden  md:flex md:flex-row gap-2 items-center glass p-3 py-2 ml-auto rounded-full">
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

        {/* Theme change */}
        {isMobileMenuOpen && <div className="ml-auto"></div>}
        {!isMobileMenuOpen && (
          <div className=" md:block relative ml-auto ">
            {/* Theme button */}

            <button
              className="md:p-2 rounded-full md:glass hover:bg-primary/10 hover:text-primary transition flex gap-2 theme-button items-center group "
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <Palette size={25} />
              <span className="md:block hidden text-sm md:text-muted-foreground  group-hover:text-white">
                Theme
              </span>
            </button>

            {/* Theme drop down menu */}
            {/* Theme dropdown menu - appears only when open */}
            {isDropdownOpen && (
              <div className=" theme-dropdown absolute mt-2 p-2 glass rounded-3xl right-0   z-50">
                {themes.map((theme) => (
                  <button
                    key={theme.name}
                    className="block px-3 py-2 text-sm w-full rounded-2xl  animate-fade-in-fast  hover:scale-[1.02]"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = `${theme.bg_color}20`; // 12% opacity on hover
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "transparent";
                    }}
                    onClick={() => handleThemeChange(theme.name)}
                  >
                    <div className="flex items-center gap-2">
                      <div
                        className="w-4 h-4 rounded-full"
                        style={{ background: theme.bg_color }}
                      />
                      <span>{theme.color}</span>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Mobile Menu button */}
        <button
          className="md:hidden p-2 text-foreground "
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? <X /> : <Menu size={24} />}
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
        </div>
      )}
    </header>
  );
};

export default Navbar;
