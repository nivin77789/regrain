import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import farmerImage from "@/assets/farmer-portrait.jpg";

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-24 bg-gradient-to-br from-background to-beige-light">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            A Farmer-First Agri Movement
          </h2>
          <div className="w-24 h-1.5 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <motion.div 
              className="relative rounded-3xl overflow-hidden shadow-card"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.img
                src={farmerImage}
                alt="Farmer in millet field"
                className="w-full h-[500px] object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green/50 to-transparent" />
            </motion.div>
            <motion.div 
              className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary rounded-full opacity-20 blur-2xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              ReGrain is a <span className="font-semibold text-foreground">farmer-first initiative</span> dedicated to improving sustainability, health, and rural prosperity. We empower farmers with modern cultivation knowledge, on-ground support, and access to markets—strengthening farmer livelihoods while ensuring quality millet supply for India's growing food ecosystem.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Based in <span className="font-semibold text-foreground">Andhra Pradesh</span>, we work directly with farming communities to transform dryland agriculture through sustainable millet cultivation practices.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="bg-card p-6 rounded-2xl shadow-soft border border-border">
                <div className="text-3xl font-display font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Farmers Empowered</div>
              </div>
              <div className="bg-card p-6 rounded-2xl shadow-soft border border-border">
                <div className="text-3xl font-display font-bold text-secondary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Sustainable Practices</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
