import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Sprout, Leaf, ArrowUpRight } from "lucide-react";
import farmerImage from "@/assets/farmer-portrait.jpg";

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" ref={ref} className="py-24 relative overflow-hidden bg-background">
      {/* Decorative Background Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-6xl mx-auto"
        >
          {/* Main Glass Card */}
          <div className="relative bg-card/10 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
            <div className="grid lg:grid-cols-5 h-full">
              {/* Image Section - Takes up 2 columns */}
              <div className="lg:col-span-2 relative h-[400px] lg:h-auto overflow-hidden">
                <motion.div
                  className="absolute inset-0"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.7 }}
                >
                  <img
                    src={farmerImage}
                    alt="Farmer in millet field"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </motion.div>

                <div className="absolute bottom-6 left-6 right-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 }}
                    className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full"
                  >
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-white text-sm font-medium tracking-wide">Empowering Rural India</span>
                  </motion.div>
                </div>
              </div>

              {/* Content Section - Takes up 3 columns */}
              <div className="lg:col-span-3 p-8 md:p-12 flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 }}
                >
                  <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6 leading-tight">
                    A Farmer-First <br />
                    <span className="bg-gradient-to-r from-primary to-green-400 bg-clip-text text-transparent">Agri Movement</span>
                  </h2>

                  <div className="space-y-6 text-muted-foreground text-lg leading-relaxed mb-10 font-light">
                    <p>
                      <strong className="text-foreground font-semibold">ReGrain</strong> is a farmer-first initiative dedicated to improving sustainability, health, and rural prosperity. We empower farmers with modern cultivation knowledge, on-ground support, and access to markets—strengthening farmer livelihoods while ensuring quality millet supply for India's growing food ecosystem.
                    </p>
                    <p>
                      Based in <span className="text-foreground font-medium border-b border-primary/30 pb-0.5">Southern India</span>, we work directly with farming communities to transform dryland agriculture through sustainable millet cultivation practices.
                    </p>
                  </div>
                </motion.div>

                {/* Features Grid */}
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="space-y-4 mt-auto"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    {/* Sub Card 1 */}
                    <motion.div variants={itemVariants} className="relative group overflow-hidden p-5 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="relative z-10">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border border-primary/10">
                          <Users className="w-6 h-6 text-primary" />
                        </div>
                        <h4 className="font-display font-semibold text-lg text-foreground mb-2 flex items-center gap-2">
                          Empowering Farmers
                        </h4>
                        <p className="text-sm text-muted-foreground/90 leading-relaxed">
                          Strengtheninggggggg livelihoods through modern knowledge and support.
                        </p>
                      </div>
                    </motion.div>

                    {/* Sub Card 2 */}
                    <motion.div variants={itemVariants} className="relative group overflow-hidden p-5 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 hover:border-green-400/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                      <div className="absolute inset-0 bg-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="relative z-10">
                        <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border border-green-500/10">
                          <Sprout className="w-6 h-6 text-green-500" />
                        </div>
                        <h4 className="font-display font-semibold text-lg text-foreground mb-2">
                          Sustainable Practices
                        </h4>
                        <p className="text-sm text-muted-foreground/90 leading-relaxed">
                          Eco-friendly millet cultivation for a healthier planet.
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Sub Card 3 - Full Width */}
                  <motion.div variants={itemVariants} className="relative group overflow-hidden p-5 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 hover:border-emerald-500/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative z-10 flex flex-col sm:flex-row items-start gap-5">
                      <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex-shrink-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-emerald-500/10">
                        <Leaf className="w-6 h-6 text-emerald-500" />
                      </div>
                      <div>
                        <h4 className="font-display font-semibold text-lg text-foreground mb-2">
                          Quality Millet Supply
                        </h4>
                        <p className="text-sm text-muted-foreground/90 leading-relaxed">
                          Ensuring a consistent supply of high-quality, natural millets for India's food ecosystem.
                        </p>
                      </div>
                      <ArrowUpRight className="ml-auto w-5 h-5 text-white/30 group-hover:text-emerald-500 transition-colors duration-300" />
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

