import { Navbar } from "@/components/Navbar";
import { WhyMillets } from "@/components/WhyMillets";
import { Footer } from "@/components/Footer";
import { FloatingMillets } from "@/components/FloatingMillets";

const WhyMilletsPage = () => {
    return (
        <div className="min-h-screen animated-bg relative">
            <FloatingMillets />
            <Navbar />
            <div className="pt-20">
                <WhyMillets />
            </div>
            <Footer />
        </div>
    );
};

export default WhyMilletsPage;
