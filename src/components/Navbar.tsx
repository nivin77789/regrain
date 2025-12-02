import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu, X, Sprout } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "What We Do", href: "#values" },
  { name: "Mission", href: "#mission" },
  { name: "Products", href: "#products" },
  { name: "Why Millets", href: "#why-millets" },

  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(246, 241, 228, 0)", "rgba(246, 241, 228, 0.95)"]
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <motion.nav
        style={{ backgroundColor }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "shadow-card backdrop-blur-lg" : ""
          }`}
      >
        <div className="w-full lg:container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <div className={`transition-all duration-300 ${isScrolled ? "bg-primary/10" : "bg-beige/20 backdrop-blur-sm"
                } p-2 rounded-2xl`}>
                <Sprout className={`w-6 h-6 ${isScrolled ? "text-primary" : "text-beige"}`} />
              </div>
              <span className={`text-2xl font-display font-bold transition-colors duration-300 ${isScrolled ? "text-primary" : "text-beige"
                }`}>
                ReGrain
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-2">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => handleNavClick(link.href)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${isScrolled
                    ? "text-foreground hover:bg-primary/10 hover:text-primary"
                    : "text-beige hover:bg-beige/20"
                    }`}
                >
                  {link.name}
                </motion.button>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="hidden lg:block"
            >
              <Button
                onClick={() => handleNavClick("#contact")}
                className={`rounded-full transition-all duration-300 hover:scale-105 bg-[hsl(33,41%,30%)] text-primary-foreground hover:bg-[hsl(33,41%,30%)]/90`} shadow-lg
              >
                Partner With Us
              </Button>
            </motion.div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-xl transition-colors duration-300 ${isScrolled ? "text-foreground hover:bg-primary/10" : "text-beige hover:bg-beige/20"
                }`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          y: isMobileMenuOpen ? 0 : -20,
          pointerEvents: isMobileMenuOpen ? "auto" : "none",
        }}
        transition={{ duration: 0.3 }}
        className="fixed top-20 left-0 right-0 z-40 lg:hidden bg-beige/98 backdrop-blur-lg shadow-card"
      >
        <div className="w-full mx-auto px-4 py-6 space-y-2">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.href)}
              className="w-full text-left px-4 py-3 rounded-xl text-foreground hover:bg-primary/10 hover:text-primary transition-all duration-300 font-medium"
            >
              {link.name}
            </button>
          ))}
          <Button
            onClick={() => handleNavClick("#contact")}
            className="w-full mt-4 bg-primary text-primary-foreground hover:bg-primary/90 rounded-full shadow-lg"
          >
            Partner With Us
          </Button>
        </div>
      </motion.div>
    </>
  );
};
