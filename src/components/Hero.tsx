import { motion } from "framer-motion";
import { Button } from "./ui/button";

import heroVideo from "@/assets/hero.mp4";
import heroPoster from "@/assets/hero-millet-field.jpg";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

export const Hero = () => {
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Video autoplay failed:", error);
      });
    }
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video with Overlay */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          controls={false}
          poster={heroPoster}
          className="absolute inset-0 w-full h-full object-cover scale-[1.5] blur-[4px]"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent backdrop-blur-[2px]" />

      </motion.div>



      {/* Logo and Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 100 }}
          className="mb-8 flex justify-center"
        >
          <motion.div
            className="flex items-center gap-3 bg-beige/20 backdrop-blur-sm px-6 py-3 rounded-full border border-beige/30"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              <img src="/logo.png" alt="ReGrain Logo" className="w-8 h-8 object-contain" />
            </motion.div>
            <span className="text-2xl font-display font-bold text-beige select-none">ReGrain</span>
          </motion.div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 50 }}
          className="text-5xl md:text-7xl font-display font-bold text-beige mb-6"
        >
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="inline-block"
          >
            Growing Prosperity
          </motion.span>
          {" "}
          <motion.span
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="inline-block"
          >
            From India's Fields
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="text-xl md:text-2xl text-beige-light mb-12 max-w-3xl mx-auto font-light"
        >
          Empowering farmers with sustainable millet cultivation, technology, and direct market access
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              onClick={() => navigate("/products")}
              className="bg-beige text-secondary hover:bg-beige-light transition-all duration-300 text-lg px-8 py-6 rounded-full shadow-lg"
            >
              Explore Our Millets
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              onClick={() => navigate("/contact")}
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 hover:border-white/40 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] transition-all duration-300 text-lg px-8 py-6 rounded-full"
            >
              Partner With Us
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-beige flex items-start justify-center p-2"
        >
          <div className="w-1.5 h-1.5 bg-beige rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};
