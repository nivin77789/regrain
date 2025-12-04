import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Sprout, MapPin, Leaf } from "lucide-react";
import farmerImage from "@/assets/farmer-portrait.jpg";

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
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
              className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20"
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Floating Badge */}
              <div className="absolute bottom-8 left-8 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl">
                <p className="text-white font-display font-bold text-xl">Empowering Rural India</p>
              </div>
            </motion.div>
            <motion.div
              className="absolute -top-10 -left-10 w-40 h-40 bg-primary rounded-full opacity-20 blur-3xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary rounded-full opacity-20 blur-2xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
              transition={{ duration: 4, repeat: Infinity, delay: 2 }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-card/40 backdrop-blur-lg p-8 rounded-3xl border border-white/10 shadow-lg">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                ReGrain is a <span className="font-semibold text-primary">farmer-first initiative</span> dedicated to improving sustainability, health, and rural prosperity. We empower farmers with modern cultivation knowledge, on-ground support, and access to markets—strengthening farmer livelihoods while ensuring quality millet supply for India's growing food ecosystem.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Based in <span className="font-semibold text-primary">Southern India</span>, we work directly with farming communities to transform dryland agriculture through sustainable millet cultivation practices.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-card/60 backdrop-blur-xl p-6 rounded-2xl shadow-lg border border-primary/10 group hover:border-primary/30 transition-all duration-300"
              >
                <div className="text-4xl font-display font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300 origin-left">500+</div>
                <div className="text-sm font-medium text-muted-foreground">Farmers Empowered</div>
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-card/60 backdrop-blur-xl p-6 rounded-2xl shadow-lg border border-secondary/10 group hover:border-secondary/30 transition-all duration-300"
              >
                <div className="text-4xl font-display font-bold text-secondary mb-2 group-hover:scale-110 transition-transform duration-300 origin-left">100%</div>
                <div className="text-sm font-medium text-muted-foreground">Sustainable Practices</div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Detailed Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { icon: Users, count: "500+", label: "Farmers Empowered", color: "text-blue-500", bg: "bg-blue-500/10" },
            { icon: Sprout, count: "1200+", label: "Acres Cultivated", color: "text-green-500", bg: "bg-green-500/10" },
            { icon: MapPin, count: "50+", label: "Villages Impacted", color: "text-orange-500", bg: "bg-orange-500/10" },
            { icon: Leaf, count: "100%", label: "Natural Produce", color: "text-emerald-500", bg: "bg-emerald-500/10" }
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="bg-card border border-border/50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 text-center group"
            >
              <div className={`w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center ${stat.bg} group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className={`w-7 h-7 ${stat.color}`} />
              </div>
              <h3 className="text-3xl font-display font-bold text-foreground mb-1">{stat.count}</h3>
              <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
