import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { ValueBlocks } from "@/components/ValueBlocks";
import { MissionVision } from "@/components/MissionVision";
import { Products } from "@/components/Products";
import { WhyMillets } from "@/components/WhyMillets";

import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

import { FloatingMillets } from "@/components/FloatingMillets";

const Index = () => {
  return (
    <div className="min-h-screen animated-bg relative">
      <FloatingMillets />
      <Navbar />
      <Hero />
      <About />
      <ValueBlocks />
      <MissionVision />
      <Products />
      <WhyMillets />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
