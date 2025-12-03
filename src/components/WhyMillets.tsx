import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Cloud, Heart, Droplet, TrendingUp, Leaf, Sparkles } from "lucide-react";
import environmentImage from "@/assets/environment_drought_resilient.png";
import healthImage from "@/assets/health_nutrition_bowl.png";
import farmerImage from "@/assets/farmer_empowerment.png";

const categories = [
  {
    title: "For Environment",
    image: environmentImage,
    items: [
      {
        icon: Cloud,
        title: "Climate-Resilient",
        description: "Thrives in harsh conditions with minimal water requirements",
      },
      {
        icon: Droplet,
        title: "Low Water Usage",
        description: "Requires 70% less water than traditional crops",
      },
    ]
  },
  {
    title: "For Health",
    image: healthImage,
    items: [
      {
        icon: Heart,
        title: "Nutrient-Rich",
        description: "Packed with protein, fiber, and essential minerals",
      },
      {
        icon: TrendingUp,
        title: "High Fiber & Protein",
        description: "Superior nutritional profile for health-conscious consumers",
      },
    ]
  },
  {
    title: "For Farmers",
    image: farmerImage,
    items: [
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
    ]
  }
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

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {categories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: catIndex * 0.2 }}
              whileHover={{ y: -10 }}
              className="group relative bg-card rounded-3xl overflow-hidden shadow-lg border border-border hover:shadow-2xl transition-all duration-500 flex flex-col"
            >
              {/* Image Section */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80" />
                <h3 className="absolute bottom-4 left-6 text-2xl font-display font-bold text-white tracking-wide">
                  {category.title}
                </h3>
              </div>

              {/* Content Section */}
              <div className="p-6 flex-grow flex flex-col gap-6">
                {category.items.map((benefit, index) => (
                  <div key={benefit.title} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                      <benefit.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-1">
                        {benefit.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Decorative Bottom Gradient */}
              <div className="h-1.5 w-full bg-gradient-to-r from-primary/40 via-secondary/40 to-primary/40 opacity-50" />
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
