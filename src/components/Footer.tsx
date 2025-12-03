import { Sprout } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Sprout className="w-8 h-8" />
              <span className="text-2xl font-display font-bold">ReGrain</span>
            </div>
            <p className="text-secondary-foreground/80 text-sm leading-relaxed">
              Empowering farmers with sustainable millet cultivation for a resilient future.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors duration-300">
                  About ReGrain
                </a>
              </li>
              <li>
                <a href="#mission" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors duration-300">
                  Mission & Vision
                </a>
              </li>
              <li>
                <a href="#products" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors duration-300">
                  Our Products
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="#why-millets" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors duration-300">
                  Why Millets?
                </a>
              </li>
              <li>
                Farmer Impact
              </li>
              <li>
                <a href="#contact" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors duration-300">
                  Partner With Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="text-secondary-foreground/80">
                Phone: <a href="tel:+919880514622" className="hover:text-secondary-foreground transition-colors duration-300">+91 9880514622</a>
              </li>
              <li className="text-secondary-foreground/80">
                Email: <a href="mailto:founder@regrain.in" className="hover:text-secondary-foreground transition-colors duration-300">founder@regrain.in</a>
              </li>
              <li className="text-secondary-foreground/80">
                Website: <a href="https://regrain.in" target="_blank" rel="noopener noreferrer" className="hover:text-secondary-foreground transition-colors duration-300">ReGrain.in</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-secondary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-secondary-foreground/80 text-sm">
              © 2025 ReGrain Ventures Pvt. Ltd. All Rights Reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
