import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Eye } from "lucide-react";
import missionImage from "@/assets/mission_harvest_hands.png";
import visionImage from "@/assets/farmer_empowerment.png";

export const MissionVision = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="mission" ref={ref} className="py-24 relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, delay: 4 }}
          className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10 space-y-24">
        {/* Mission Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-card/60 backdrop-blur-xl rounded-3xl border border-white/20 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500 flex flex-col md:flex-row overflow-hidden">
            {/* Image */}
            <div className="w-full md:w-1/2 h-[300px] md:h-auto">
              <img
                src={missionImage}
                alt="Mission - Sustainable Farming"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Text */}
            <div className="flex-1 p-8 md:p-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-primary/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-primary/20 shadow-lg">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                  Our Mission
                </h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Our mission is to empower farmers with <span className="font-semibold text-primary">sustainable millet cultivation</span> through education, technology, and resources, improving dry‑land productivity and economic resilience.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We also ensure a reliable supply of quality millets to businesses by bridging the gap between farm production and market demand, unlocking growth across the ecosystem.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Vision Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-card/60 backdrop-blur-xl rounded-3xl border border-white/20 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500 flex flex-col md:flex-row-reverse overflow-hidden">
            {/* Image */}
            <div className="w-full md:w-1/2 h-[300px] md:h-auto">
              <img
                src={visionImage}
                alt="Vision - Future of Millets"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Text */}
            <div className="flex-1 p-8 md:p-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-secondary/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-secondary/20 shadow-lg">
                  <Eye className="w-8 h-8 text-secondary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                  Our Vision
                </h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We aim to build a <span className="font-semibold text-secondary">resilient millet ecosystem</span> where farmers, consumers, and companies drive a sustainable future, ensuring a high‑quality supply while benefiting farmers.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Our vision is to be India’s top solution for bulk millet supply, using R&amp;D and IoT to enhance farm efficiency, crop quality, and climate resilience.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We also strive to create rural employment, empowering youth to champion a future‑ready agri‑economy.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
