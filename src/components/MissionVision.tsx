import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Eye } from "lucide-react";

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

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="space-y-24">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -left-8 top-0 w-2 h-full bg-gradient-to-b from-primary to-transparent rounded-full hidden md:block opacity-50" />
            <div className="md:pl-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-primary/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-primary/20 shadow-lg">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
                  Our Mission
                </h2>
              </div>
              <div className="bg-card/60 backdrop-blur-xl p-8 md:p-12 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/20 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500 group">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6 group-hover:text-foreground/80 transition-colors duration-300">
                  Our mission is to empower farmers by enabling <span className="font-semibold text-primary">sustainable millet cultivation</span> through the right education, modern technology, and accessible on-ground resources. We are committed to improving India’s dry-land productivity, strengthening farmers’ economic resilience, and contributing to long-term national food security.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                  At the same time, we work to ensure a continuous, reliable, and cost-efficient supply of quality millets to processing companies and emerging startups. By bridging the gap between farm-level production and market-level demand, we help businesses overcome seasonal shortages and supply-chain challenges—unlocking growth across the entire millet ecosystem.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -right-8 top-0 w-2 h-full bg-gradient-to-b from-secondary to-transparent rounded-full hidden md:block opacity-50" />
            <div className="md:pr-8">
              <div className="flex items-center justify-end gap-4 mb-8">
                <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground text-right">
                  Our Vision
                </h2>
                <div className="w-16 h-16 bg-secondary/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-secondary/20 shadow-lg">
                  <Eye className="w-8 h-8 text-secondary" />
                </div>
              </div>
              <div className="bg-card/60 backdrop-blur-xl p-8 md:p-12 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/20 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500 group">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6 group-hover:text-foreground/80 transition-colors duration-300">
                  We aim to build a <span className="font-semibold text-secondary">resilient millet ecosystem in India</span>—one where farmers, consumers, and companies collectively drive a sustainable and equitable future. We are committed to strengthening India’s millet value chain by ensuring a year-round, high-quality supply of raw millets while ensuring that the economic and environmental benefits reach the farmers who cultivate them.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6 group-hover:text-foreground/80 transition-colors duration-300">
                  Our mission is to become India’s one-stop solution for bulk millet production and supply, powered by continuous R&D and IoT-enabled farming insights. By collecting real-time data from the fields, we aim to enhance farm efficiency, support climate-resilient cultivation, and ensure traceable, high-quality produce for the growing millet economy.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6 group-hover:text-foreground/80 transition-colors duration-300">
                  Through continuous R&D and IoT-enabled farming support, we aim to enhance on-field efficiency, improve crop quality, and strengthen climate-resilient agriculture in alignment with the UN Sustainable Development Goals.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                  As we scale, our mission is also to create meaningful employment opportunities in rural communities, empowering youth to participate in and champion future-ready agri-economy for generations to come.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
