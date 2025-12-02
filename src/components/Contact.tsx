import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, Globe } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card } from "./ui/card";

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" ref={ref} className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's work together to build a sustainable millet ecosystem
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {[
              { icon: Phone, title: "Phone", content: "+91 9880514622", href: "tel:+919880514622", color: "primary" },
              { icon: Mail, title: "Email", content: "founder@regrain.in", href: "mailto:founder@regrain.in", color: "secondary" },
              { icon: Globe, title: "Website", content: "ReGrain.in", href: "https://regrain.in", color: "primary" }
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + (idx * 0.1) }}
                whileHover={{ x: 10, scale: 1.02 }}
              >
                <Card className="p-8 bg-card border border-border rounded-3xl shadow-soft hover:shadow-card transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <motion.div
                      className={`w-12 h-12 bg-${item.color}/10 rounded-2xl flex items-center justify-center flex-shrink-0`}
                      whileHover={{ scale: 1.15, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <item.icon className={`w-6 h-6 text-${item.color}`} />
                    </motion.div>
                    <div>
                      <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                        {item.title}
                      </h3>
                      <a
                        href={item.href}
                        target={item.title === "Website" ? "_blank" : undefined}
                        rel={item.title === "Website" ? "noopener noreferrer" : undefined}
                        className={`text-muted-foreground hover:text-${item.color} transition-colors duration-300 text-lg`}
                      >
                        {item.content}
                      </a>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="p-8 bg-card border border-border rounded-3xl shadow-card">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <Input
                    type="text"
                    placeholder="Enter your name"
                    className="rounded-xl border-input"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    className="rounded-xl border-input"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    placeholder="Tell us about your interest in sustainable millet cultivation..."
                    rows={6}
                    className="rounded-xl border-input"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-[hsl(33,41%,30%)] text-primary-foreground hover:bg-[hsl(33,41%,30%)]/90 rounded-full transition-all duration-300 hover:scale-105"
                >
                  Send Message
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
