import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, Globe } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card } from "./ui/card";

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", "ff78b595-6374-4311-9f45-358d3e3c4d81");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      if (data.success) {
        setResult("Form Submitted Successfully");
        form.reset();
      } else {
        console.error("Web3Forms Error:", data);
        setResult(data.message || "Error submitting form");
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setResult("Error submitting form");
    }
  };

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
              <form className="space-y-6" onSubmit={onSubmit}>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <Input
                    type="text"
                    name="name"
                    required
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
                    name="email"
                    required
                    placeholder="your@email.com"
                    className="rounded-xl border-input"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    name="message"
                    required
                    placeholder="Tell us about your interest in sustainable millet cultivation..."
                    rows={6}
                    className="rounded-xl border-input"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full transition-all duration-300 hover:scale-105"
                >
                  Send Message
                </Button>
                {result && (
                  <div className={`text-center text-sm font-medium ${result.includes("Success") ? "text-green-600" : "text-red-600"}`}>
                    {result}
                  </div>
                )}
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
