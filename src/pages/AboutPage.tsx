import { Navbar } from "@/components/Navbar";
import { AboutPageContent } from "@/components/AboutPageContent";
import { Footer } from "@/components/Footer";
import { FloatingMillets } from "@/components/FloatingMillets";

const AboutPage = () => {
    return (
        <div className="min-h-screen animated-bg relative">
            <FloatingMillets />
            <Navbar />
            <div className="pt-0"> {/* Removed pt-20 to allow Hero to be full screen behind nav if needed, but Navbar is fixed. 
                                      Actually, AboutPageContent has a Hero section. 
                                      If Navbar is fixed, we might need padding or the Hero should handle it.
                                      The Hero in AboutPageContent is 80vh.
                                      Let's keep pt-0 and let the Hero be at the top. 
                                      However, the Navbar is fixed and has a background on scroll.
                                      If I remove pt-20, the content starts at the top of the screen.
                                      The Hero image will be behind the navbar, which is usually desired for a transparent navbar effect.
                                      The Navbar component handles background color based on scroll.
                                      So pt-0 is correct for a Hero section.
                                   */}
                <AboutPageContent />
            </div>
            <Footer />
        </div>
    );
};

export default AboutPage;
