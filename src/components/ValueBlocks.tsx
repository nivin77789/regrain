import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sprout, Users, Link2, TrendingUp } from "lucide-react";
import { Card } from "./ui/card";

const values = [
  {
    icon: Sprout,
    title: "Sustainable Millet Cultivation",
    description: "Climate-resilient farming practices that preserve soil health and maximize dryland productivity.",
    color: "bg-green/10 text-green",
  },
  {
    icon: Users,
    title: "Farmer Training & Field Support",
    description: "Hands-on education, modern technology, and continuous on-ground support for farming communities.",
    color: "bg-brown/10 text-brown",
  },
  {
    icon: Link2,
    title: "Direct Market Linkages",
    description: "Connecting farmers directly with buyers to ensure fair prices and strengthen value chains.",
    color: "bg-green/10 text-green",
  },
  {
    icon: TrendingUp,
    title: "Stable Millet Supply for Companies",
    description: "Reliable, cost-efficient millet supply ensuring quality and consistency for business partners.",
    color: "bg-brown/10 text-brown",
  },
];

export const ValueBlocks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="values" ref={ref} className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            What We Do
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building India's resilient millet ecosystem through innovation and collaboration
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 50, rotateX: -10 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15, type: "spring", stiffness: 100 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <Card className="p-8 h-full bg-card hover:shadow-hover transition-all duration-300 border border-border rounded-3xl group">
                <motion.div 
                  className={`w-16 h-16 ${value.color} rounded-2xl flex items-center justify-center mb-6`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  >
                    <value.icon className="w-8 h-8" />
                  </motion.div>
                </motion.div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
