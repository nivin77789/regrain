import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Sprout, Users, Heart, Leaf } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import farmerImage from "@/assets/farmer-portrait.jpg";
import heroImage from "@/assets/hero-millet-field.jpg";
import farmerEmpowerment from "@/assets/farmer_empowerment.png";

export const AboutPageContent = () => {
    const navigate = useNavigate();
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <div ref={containerRef} className="relative">
            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                <motion.div
                    style={{ y, opacity }}
                    className="absolute inset-0 z-0"
                >
                    <div
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url(${heroImage})` }}
                    />
                    <div className="absolute inset-0 bg-black/40" />
                </motion.div>

                <div className="relative z-10 container mx-auto px-4 text-center text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-sm font-medium mb-6">
                            Our Story
                        </span>
                        <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
                            Rooted in Tradition,<br />Growing for Tomorrow
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed">
                            ReGrain is more than a brand; it's a movement to revive millets, empower farmers, and nourish the world.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* The Origin Story */}
            <section className="py-24 bg-background relative overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
                                <img
                                    src={farmerImage}
                                    alt="Our Founder with Farmers"
                                    className="w-full h-[600px] object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                <div className="absolute bottom-8 left-8 right-8 text-white">
                                    <p className="font-display text-2xl font-bold mb-2">"We grow together."</p>
                                    <p className="text-white/80">Empowering 500+ farmers across Southern India</p>
                                </div>
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl" />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-8">
                                A Farmer-First Initiative
                            </h2>
                            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                                <p>
                                    The story of ReGrain began in the fields of Southern India, where we witnessed the struggle of small-scale farmers and the gradual disappearance of nutrient-rich millets from our diets.
                                </p>
                                <p>
                                    We realized that the solution wasn't just about selling grains; it was about creating a <span className="text-primary font-semibold">sustainable ecosystem</span>. One that values the hands that toil the soil and the health of those who consume the harvest.
                                </p>
                                <p>
                                    Today, ReGrain stands as a bridge between traditional farming wisdom and modern market needs. We provide farmers with the knowledge, tools, and fair trade opportunities they deserve, ensuring that every grain you eat contributes to a better world.
                                </p>
                            </div>

                            <div className="mt-10 flex gap-4">
                                <Button
                                    onClick={() => navigate("/mission")}
                                    className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6 text-lg"
                                >
                                    View Our Mission
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Values / Pillars */}
            <section className="py-24 bg-secondary/5 relative">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-display font-bold text-foreground mb-4">Why We Do What We Do</h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Our work is guided by three fundamental pillars that define our existence.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Users,
                                title: "Farmer Empowerment",
                                desc: "We ensure fair wages, direct market access, and technical support for our farming partners.",
                                color: "text-blue-600",
                                bg: "bg-blue-100"
                            },
                            {
                                icon: Leaf,
                                title: "Sustainable Agriculture",
                                desc: "Promoting climate-resilient millet cultivation that requires less water and restores soil health.",
                                color: "text-green-600",
                                bg: "bg-green-100"
                            },
                            {
                                icon: Heart,
                                title: "Holistic Health",
                                desc: "Delivering 100% natural, nutrient-dense grains that combat lifestyle diseases and malnutrition.",
                                color: "text-red-600",
                                bg: "bg-red-100"
                            }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.2 }}
                                whileHover={{ y: -10 }}
                                className="bg-card p-8 rounded-3xl shadow-sm border border-border/50 hover:shadow-xl transition-all duration-300"
                            >
                                <div className={`w-16 h-16 ${item.bg} rounded-2xl flex items-center justify-center mb-6`}>
                                    <item.icon className={`w-8 h-8 ${item.color}`} />
                                </div>
                                <h3 className="text-2xl font-display font-bold text-foreground mb-4">{item.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Image Banner */}
            <section className="h-[60vh] relative flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center fixed-bg"
                    style={{ backgroundImage: `url(${farmerEmpowerment})`, backgroundAttachment: 'fixed' }}
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10 container mx-auto px-4 text-center">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-display font-bold text-white mb-8"
                    >
                        "Agriculture is the most healthful, most useful, and most noble employment of man."
                    </motion.h2>
                    <p className="text-white/80 text-xl italic">— George Washington</p>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4">
                    <div className="bg-primary/5 rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                            <Sprout className="absolute top-10 left-10 w-32 h-32 text-primary/5 -rotate-12" />
                            <Sprout className="absolute bottom-10 right-10 w-40 h-40 text-primary/5 rotate-12" />
                        </div>

                        <div className="relative z-10 max-w-3xl mx-auto">
                            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
                                Join Us in This Revolution
                            </h2>
                            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                                Whether you are a consumer looking for healthy food, a farmer seeking partnership, or an organization wanting to collaborate — there is a place for you at ReGrain.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button
                                    onClick={() => navigate("/contact")}
                                    size="lg"
                                    className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-10 py-7 rounded-full shadow-lg hover:shadow-xl transition-all"
                                >
                                    Partner With Us
                                </Button>
                                <Button
                                    onClick={() => navigate("/products")}
                                    variant="outline"
                                    size="lg"
                                    className="border-primary text-primary hover:bg-primary/5 text-lg px-10 py-7 rounded-full"
                                >
                                    Explore Products
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
