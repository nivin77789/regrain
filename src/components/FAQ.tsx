import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

export const FAQ = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 max-w-4xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Everything you need to know about our mission and products.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="bg-card/60 backdrop-blur-xl rounded-3xl border border-white/20 p-8 md:p-12 shadow-lg hover:shadow-xl transition-shadow duration-500"
                >
                    <Accordion type="single" collapsible className="w-full space-y-4">
                        <AccordionItem value="item-1" className="border-b border-white/10 px-4">
                            <AccordionTrigger className="text-lg font-semibold hover:text-primary transition-colors text-left">
                                What is Regrain Fields?
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-4">
                                Regrain Fields is an initiative dedicated to empowering farmers through sustainable millet cultivation. We bridge the gap between farm production and market demand, ensuring a reliable supply of high-quality millets while improving farmer livelihoods.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2" className="border-b border-white/10 px-4">
                            <AccordionTrigger className="text-lg font-semibold hover:text-primary transition-colors text-left">
                                How do you support farmers?
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-4">
                                We provide farmers with education, modern technology, and resources to improve dry-land productivity. Our ecosystem ensures they get fair prices and consistent demand for their produce.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3" className="border-b border-white/10 px-4">
                            <AccordionTrigger className="text-lg font-semibold hover:text-primary transition-colors text-left">
                                Are your millets organic?
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-4">
                                Yes, we promote natural and sustainable farming practices. Our focus is on delivering healthy, chemical-free millets that are good for you and the planet.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4" className="border-b border-white/10 px-4">
                            <AccordionTrigger className="text-lg font-semibold hover:text-primary transition-colors text-left">
                                Do you supply in bulk to businesses?
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-4">
                                Absolutely! We specialize in bulk supply for businesses, ensuring consistent quality and quantity. Whether you are a food manufacturer or a retailer, we can meet your requirements.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-5" className="border-b-0 px-4">
                            <AccordionTrigger className="text-lg font-semibold hover:text-primary transition-colors text-left">
                                How can I partner with you?
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-4">
                                You can reach out to us via our Contact page. We are always looking for partners who share our vision of a sustainable and healthy future.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </motion.div>
            </div>
        </section>
    );
};
