import { Navbar } from "@/components/Navbar";
import { ValueBlocks } from "@/components/ValueBlocks";
import { Footer } from "@/components/Footer";
import { FloatingMillets } from "@/components/FloatingMillets";

const WhatWeDoPage = () => {
    return (
        <div className="min-h-screen animated-bg relative">
            <FloatingMillets />
            <Navbar />
            <div className="pt-20">
                <ValueBlocks />
            </div>
            <Footer />
        </div>
    );
};

export default WhatWeDoPage;
