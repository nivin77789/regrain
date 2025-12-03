import { Navbar } from "@/components/Navbar";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { FloatingMillets } from "@/components/FloatingMillets";

const ContactPage = () => {
    return (
        <div className="min-h-screen animated-bg relative">
            <FloatingMillets />
            <Navbar />
            <div className="pt-20">
                <Contact />
            </div>
            <Footer />
        </div>
    );
};

export default ContactPage;
