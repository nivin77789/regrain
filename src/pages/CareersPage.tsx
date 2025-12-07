import { motion } from "framer-motion";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { MapPin, Briefcase, Clock, Upload } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { useState, useEffect } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../firebase";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "../components/ui/dialog";



const CareersPage = () => {
    const [careers, setCareers] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedJob, setSelectedJob] = useState<any>(null);

    useEffect(() => {
        const fetchCareers = async () => {
            try {
                const q = query(collection(db, "careers"), orderBy("createdAt", "desc"));
                const snap = await getDocs(q);
                setCareers(snap.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
            } catch (error) {
                console.error("Error fetching careers:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchCareers();
    }, []);
    return (
        <div className="min-h-screen bg-background">
            <Navbar forceDarkText />

            <main className="pt-24 pb-16">
                <motion.div
                    className="container mx-auto px-4 max-w-5xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
                            Join the ReGrain Revolution
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            We are building a sustainable future with millets. If you are passionate about agriculture,
                            health, and sustainability, we'd love to hear from you.
                        </p>
                    </div>

                    {/* Open Positions */}
                    <section className="mb-20">
                        <div className="flex items-center gap-3 mb-8">
                            <Briefcase className="w-6 h-6 text-primary" />
                            <h2 className="text-3xl font-bold text-foreground">Open Positions</h2>
                        </div>

                        {loading ? (
                            <p className="text-muted-foreground">Loading positions...</p>
                        ) : careers.length === 0 ? (
                            <Card className="bg-card/30 backdrop-blur-xl p-8 rounded-xl shadow-lg border-border/50 text-center">
                                <h3 className="text-2xl font-bold text-foreground mb-4">No Openings Right Now</h3>
                                <p className="text-lg text-muted-foreground">
                                    We don't have any open positions at the moment. Please check back later or submit your resume below for future consideration.
                                </p>
                            </Card>
                        ) : (
                            <div className="grid md:grid-cols-3 gap-6">
                                {careers.map((job) => (
                                    <motion.div
                                        key={job.id}
                                        whileHover={{ y: -5 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Card className="h-full bg-card/30 backdrop-blur-xl p-6 rounded-xl shadow-lg border-border/50 hover:border-primary/50 transition-colors">
                                            <div className="mb-4">
                                                <h3 className="text-xl font-bold text-foreground mb-2">{job.title}</h3>
                                                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                                    <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {job.location}</span>
                                                    <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {job.type}</span>
                                                </div>
                                            </div>
                                            <p className="text-muted-foreground mb-6 text-sm leading-relaxed line-clamp-3">
                                                {job.description}
                                            </p>
                                            <Button
                                                variant="outline"
                                                className="w-full border-primary/20 hover:bg-primary/10 hover:text-primary"
                                                onClick={() => setSelectedJob(job)}
                                            >
                                                View Details
                                            </Button>
                                        </Card>
                                    </motion.div>
                                ))}
                            </div>
                        )}
                    </section>

                    {/* Application Form Removed */}
                    {/* <section>...</section> */}
                </motion.div>
            </main>

            <Dialog open={!!selectedJob} onOpenChange={() => setSelectedJob(null)}>
                <DialogContent className="max-w-2xl bg-card border-border">
                    <DialogHeader>
                        <DialogTitle className="text-2xl font-bold font-display">{selectedJob?.title}</DialogTitle>
                        <DialogDescription className="text-base">
                            <div className="flex items-center gap-4 mt-2 text-muted-foreground">
                                <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {selectedJob?.location}</span>
                                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {selectedJob?.type}</span>
                            </div>
                        </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-6 mt-4 max-h-[60vh] overflow-y-auto pr-2">
                        <div>
                            <h4 className="font-semibold mb-2 text-foreground">Role Description</h4>
                            <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap">
                                {selectedJob?.description}
                            </p>
                        </div>
                        <div className="bg-primary/5 p-6 rounded-xl border border-primary/10">
                            <h4 className="font-semibold mb-2 text-primary text-lg">How to Apply</h4>
                            <p className="text-foreground/80 leading-relaxed">
                                We'd love to see if you're a good fit! Please send your resume and a brief cover letter to our recruitment team at <a href="mailto:founder@regrain.in" className="text-primary font-bold hover:underline">founder@regrain.in</a>.
                            </p>
                            <p className="text-sm text-muted-foreground mt-4">
                                <span className="font-medium">Subject Line:</span> Application for {selectedJob?.title}
                            </p>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>

            <Footer />
        </div>
    );
};

export default CareersPage;
