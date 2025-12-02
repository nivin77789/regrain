import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Cloud, Heart, Droplet, TrendingUp, Leaf, Sparkles } from "lucide-react";

const benefits = [
  {
    icon: Cloud,
    title: "Climate-Resilient",
    description: "Thrives in harsh conditions with minimal water requirements",
  },
  {
    icon: Heart,
    title: "Nutrient-Rich",
    description: "Packed with protein, fiber, and essential minerals",
  },
  {
    icon: Droplet,
    title: "Low Water Usage",
    description: "Requires 70% less water than traditional crops",
  },
  {
    icon: TrendingUp,
    title: "High Fiber & Protein",
    description: "Superior nutritional profile for health-conscious consumers",
  },
  {
    icon: Leaf,
    title: "Excellent for Dryland",
    description: "Perfect for sustainable dryland farming practices",
  },
  {
    icon: Sparkles,
    title: "Future-Ready Crop",
    description: "Aligned with sustainable food security goals",
  },
];

export const WhyMillets = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-millets" ref={ref} className="py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Why Millets?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The sustainable superfood powering India's agricultural future
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.12,
                type: "spring",
                stiffness: 100
              }}
              className="relative group"
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl blur-xl transition-all duration-300"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0, 0.5, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.5
                }}
              />
              <motion.div 
                className="relative bg-card p-8 rounded-3xl shadow-soft border border-border hover:shadow-card transition-all duration-300"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6"
                  whileHover={{ scale: 1.15, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <motion.div
                    animate={{ 
                      y: [0, -5, 0],
                      rotate: [0, 5, 0]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      delay: index * 0.3
                    }}
                  >
                    <benefit.icon className="w-7 h-7 text-primary" />
                  </motion.div>
                </motion.div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-card p-8 md:p-12 rounded-3xl shadow-card border border-border max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Millets are not just crops—they're a <span className="font-semibold text-foreground">climate solution</span>, 
              a <span className="font-semibold text-foreground">nutrition powerhouse</span>, and a 
              <span className="font-semibold text-foreground"> sustainable livelihood</span> for millions of farmers across India.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
