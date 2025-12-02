import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";
import { Card } from "./ui/card";
import farmerImage from "@/assets/farmer-portrait.jpg";

const stories = [
  {
    name: "Ramesh Kumar",
    location: "Anantapur, Andhra Pradesh",
    quote: "ReGrain's training and support helped me transition to millet farming. My income has increased by 40% and I'm now able to provide better for my family.",
    image: farmerImage,
  },
  {
    name: "Lakshmi Devi",
    location: "Kurnool, Andhra Pradesh",
    quote: "The direct market linkage provided by ReGrain ensures I get fair prices for my harvest. No middlemen, just honest business.",
  },
  {
    name: "Narasimha Rao",
    location: "Kadapa, Andhra Pradesh",
    quote: "Sustainable millet farming has transformed my land. The soil is healthier and my crops are more resilient to climate changes.",
  },
];

export const FarmerImpact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="impact" ref={ref} className="py-24 bg-gradient-to-br from-secondary/5 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Farmer Impact Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real stories from farmers whose lives have been transformed through sustainable millet farming
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {stories.map((story, index) => (
            <motion.div
              key={story.name}
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.25,
                type: "spring",
                stiffness: 80
              }}
            >
              <motion.div
                whileHover={{ y: -12, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="p-8 h-full bg-card border border-border rounded-3xl shadow-soft hover:shadow-card transition-all duration-300">
                  {story.image && (
                    <motion.div 
                      className="relative w-24 h-24 mx-auto mb-6"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <img
                        src={story.image}
                        alt={story.name}
                        className="w-full h-full object-cover rounded-full border-4 border-primary/20"
                      />
                      <motion.div 
                        className="absolute -top-2 -right-2 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center"
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                      >
                        <Quote className="w-6 h-6 text-primary" />
                      </motion.div>
                    </motion.div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-display font-semibold text-foreground mb-1">
                      {story.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{story.location}</p>
                  </div>
                  <p className="text-muted-foreground leading-relaxed italic">
                    "{story.quote}"
                  </p>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
