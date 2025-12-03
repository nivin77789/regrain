import { Navbar } from "@/components/Navbar";
import { MissionVision } from "@/components/MissionVision";
import { Footer } from "@/components/Footer";
import { FloatingMillets } from "@/components/FloatingMillets";

const MissionPage = () => {
    return (
        <div className="min-h-screen animated-bg relative">
            <FloatingMillets />
            <Navbar />
            <div className="pt-20">
                <MissionVision />
            </div>
            <Footer />
        </div>
    );
};

export default MissionPage;
