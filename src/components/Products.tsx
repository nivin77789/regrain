import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import pearlMillet from "@/assets/pearl-millet.jpg";
import fingerMillet from "@/assets/finger-millet.jpg";
import foxtailMillet from "@/assets/foxtail-millet.jpg";
import sorghumMillet from "@/assets/sorghum-millet.png";
import kodoMillet from "@/assets/Kodo_Millet.png";
import barnyardMillet from "@/assets/Barnyard-Millet.png";
import prosoMillet from "@/assets/Proso_Millet.png";
import { ArrowRight, Leaf, Sprout, Activity, Droplet, Sun } from "lucide-react";

const millets = [
  {
    category: "Major Millets",
    description: "The staples of sustainable nutrition",
    items: [
      {
        name: "Pearl Millet",
        scientificName: "Pennisetum glaucum",
        image: pearlMillet,
        description: "High protein, drought-resistant grain perfect for dryland farming.",
        tags: ["High Protein", "Drought Resistant"],
        nutrition: {
          protein: "11g",
          fiber: "3g",
          minerals: "Iron (8mg), Magnesium",
          calories: "361 kcal",
        },
        benefits: [
          "Helps control blood sugar levels",
          "Excellent for heart health",
          "Rich in iron, prevents anemia",
          "Gluten-free alternative"
        ]
      },
      {
        name: "Finger Millet",
        scientificName: "Eleusine coracana",
        image: fingerMillet,
        description: "Rich in calcium and iron, excellent for nutrition and health.",
        tags: ["Calcium Rich", "Iron Rich"],
        nutrition: {
          protein: "7.3g",
          fiber: "3.6g",
          minerals: "Calcium (344mg), Iron",
          calories: "328 kcal",
        },
        benefits: [
          "Highest calcium content among cereals",
          "Good for bone health",
          "Helps in weight management",
          "Natural relaxant"
        ]
      },
      {
        name: "Sorghum",
        scientificName: "Sorghum bicolor",
        image: sorghumMillet,
        description: "Versatile cereal grain with high nutritional value.",
        tags: ["Versatile", "Nutritious"],
        nutrition: {
          protein: "10.4g",
          fiber: "6.7g",
          minerals: "Phosphorus, Potassium",
          calories: "329 kcal",
        },
        benefits: [
          "High antioxidant content",
          "Supports digestive health",
          "Safe for celiac patients",
          "Boosts energy levels"
        ]
      },
    ],
  },
  {
    category: "Minor Millets",
    description: "Hidden gems of the grain world",
    items: [
      {
        name: "Foxtail Millet",
        scientificName: "Setaria italica",
        image: foxtailMillet,
        description: "High fiber content, excellent for digestive health.",
        tags: ["High Fiber", "Digestive Health"],
        nutrition: {
          protein: "12.3g",
          fiber: "8g",
          minerals: "Vitamin B12, Iron",
          calories: "331 kcal",
        },
        benefits: [
          "Regulates blood sugar",
          "Improves immunity",
          "Good for nervous system",
          "Helps reduce cholesterol"
        ]
      },
      {
        name: "Kodo Millet",
        scientificName: "Paspalum scrobiculatum",
        image: kodoMillet,
        description: "Low glycemic index, ideal for diabetic diets.",
        tags: ["Low GI", "Diabetic Friendly"],
        nutrition: {
          protein: "8.3g",
          fiber: "9g",
          minerals: "Phosphorus, Calcium",
          calories: "309 kcal",
        },
        benefits: [
          "Excellent for diabetics",
          "Aids in weight loss",
          "Anti-bacterial properties",
          "Detoxifies the body"
        ]
      },
      {
        name: "Barnyard Millet",
        scientificName: "Echinochloa esculenta",
        image: barnyardMillet,
        description: "Fast growing with excellent nutritional profile.",
        tags: ["Fast Growing", "Nutritious"],
        nutrition: {
          protein: "6.2g",
          fiber: "9.8g",
          minerals: "Iron, Phosphorus",
          calories: "307 kcal",
        },
        benefits: [
          "Lowest calorie density",
          "Highest fiber content",
          "Low glycemic index",
          "Good for liver health"
        ]
      },
      {
        name: "Proso Millet",
        scientificName: "Panicum miliaceum",
        image: prosoMillet,
        description: "Rich in protein and B vitamins.",
        tags: ["Protein Rich", "B Vitamins"],
        nutrition: {
          protein: "12.5g",
          fiber: "2.2g",
          minerals: "Magnesium, Phosphorus",
          calories: "341 kcal",
        },
        benefits: [
          "Highest protein content",
          "Strengthens nervous system",
          "Prevents pellagra",
          "Anti-aging properties"
        ]
      },
    ],
  },
];

export const Products = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedMillet, setSelectedMillet] = useState<typeof millets[0]["items"][0] | null>(null);

  return (
    <section id="products" ref={ref} className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-64 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <Badge variant="outline" className="mb-4 px-4 py-1 text-sm border-primary/30 text-primary">
            Our Harvest
          </Badge>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6 tracking-tight">
            Millets We Offer
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover our premium selection of sustainably cultivated grains
          </p>
        </motion.div>

        <div className="space-y-24 max-w-7xl mx-auto">
          {millets.map((category, categoryIndex) => (
            <div key={category.category}>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                className="mb-12 flex items-center gap-4"
              >
                <div className="h-12 w-1 bg-primary rounded-full" />
                <div>
                  <h3 className="text-3xl font-display font-bold text-foreground">
                    {category.category}
                  </h3>
                  <p className="text-muted-foreground text-lg">
                    {category.description}
                  </p>
                </div>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8">
                {category.items.map((millet, index) => (
                  <motion.div
                    key={millet.name}
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                    whileHover={{ y: -12, scale: 1.02 }}
                    transition={{ duration: 0.4, delay: (categoryIndex * 0.2) + (index * 0.1) }}
                    className="h-full cursor-pointer"
                    onClick={() => setSelectedMillet(millet)}
                  >
                    <Card className="h-full overflow-hidden bg-card/80 backdrop-blur-xl border-border/60 hover:border-primary/50 hover:shadow-[0_22px_45px_-10px_hsla(33,41%,30%,0.3)] transition-all duration-500 group flex flex-col">
                      {millet.image ? (
                        <div className="relative h-72 overflow-hidden">
                          <motion.img
                            src={millet.image}
                            alt={millet.name}
                            className="w-full h-full object-cover"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.7 }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
                        </div>
                      ) : (
                        <div className="h-72 bg-muted/30 flex items-center justify-center border-b border-border/50 relative overflow-hidden group-hover:bg-muted/50 transition-colors duration-500">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          <Sprout className="w-20 h-20 text-muted-foreground/20 group-hover:text-primary/40 transition-colors duration-500" />
                        </div>
                      )}

                      <CardContent className="p-8 flex-1 flex flex-col">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h4 className="text-2xl font-display font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                              {millet.name}
                            </h4>
                            <p className="text-sm text-muted-foreground italic">
                              {millet.scientificName}
                            </p>
                          </div>
                          <div className="p-2 rounded-full bg-background border border-border/50 shadow-sm group-hover:border-primary/20 transition-colors duration-300">
                            <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary -rotate-45 group-hover:rotate-0 transition-all duration-300" />
                          </div>
                        </div>

                        <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                          {millet.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mt-auto">
                          {millet.tags?.map((tag) => (
                            <motion.span key={tag} className="text-xs font-medium px-3 py-1.5 rounded-full bg-secondary/50 text-secondary-foreground border border-secondary group-hover:border-primary/20 group-hover:bg-primary/5 group-hover:text-primary transition-all duration-300" whileHover={{ scale: 1.1 }}>
                              {tag}
                            </motion.span>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedMillet} onOpenChange={(open) => !open && setSelectedMillet(null)}>
        <DialogContent className="max-w-5xl w-[95vw] md:w-full bg-card border-none p-0 overflow-hidden shadow-2xl rounded-3xl h-auto max-h-[90vh] flex flex-col md:flex-row">
          {selectedMillet && (
            <>
              {/* Image Section */}
              <div className="w-full md:w-1/2 relative h-36 md:h-auto flex-shrink-0 bg-muted">
                <motion.img
                  initial={{ scale: 1.1, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  src={selectedMillet.image}
                  alt={selectedMillet.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-black/50" />

                {/* Mobile Title Overlay */}
                <div className="absolute bottom-3 left-4 right-4 text-white md:hidden">
                  <motion.h3
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl font-display font-bold mb-0.5"
                  >
                    {selectedMillet.name}
                  </motion.h3>
                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-white/90 text-xs italic"
                  >
                    {selectedMillet.scientificName}
                  </motion.p>
                </div>
              </div>

              {/* Content Section */}
              <div className="w-full md:w-1/2 p-4 md:p-8 overflow-y-auto md:overflow-y-auto bg-card relative flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="space-y-3 md:space-y-5"
                >
                  {/* Desktop Header */}
                  <div className="hidden md:block">
                    <h3 className="text-3xl font-display font-bold text-foreground mb-1">{selectedMillet.name}</h3>
                    <p className="text-lg text-primary font-medium italic">{selectedMillet.scientificName}</p>
                  </div>

                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {selectedMillet.description}
                  </p>

                  {/* Nutrition Stats */}
                  <div className="bg-secondary/5 rounded-2xl p-3 md:p-5 border border-secondary/10">
                    <h4 className="font-display font-semibold text-sm md:text-base text-foreground mb-2 md:mb-3 flex items-center gap-2">
                      <Activity className="w-4 h-4 text-primary" /> Nutritional Profile
                    </h4>
                    <div className="grid grid-cols-3 gap-2 md:gap-3">
                      <div className="text-center p-1.5 md:p-2 bg-background rounded-xl shadow-sm border border-border/50">
                        <span className="block text-lg md:text-xl font-bold text-foreground mb-0.5">{selectedMillet.nutrition.protein}</span>
                        <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">Protein</span>
                      </div>
                      <div className="text-center p-1.5 md:p-2 bg-background rounded-xl shadow-sm border border-border/50">
                        <span className="block text-lg md:text-xl font-bold text-foreground mb-0.5">{selectedMillet.nutrition.fiber}</span>
                        <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">Fiber</span>
                      </div>
                      <div className="text-center p-1.5 md:p-2 bg-background rounded-xl shadow-sm border border-border/50">
                        <span className="block text-lg md:text-xl font-bold text-foreground mb-0.5">{selectedMillet.nutrition.calories}</span>
                        <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">Calories</span>
                      </div>
                    </div>
                    <div className="mt-2 md:mt-3 pt-2 md:pt-3 border-t border-border/50 flex items-start gap-2">
                      <span className="text-[10px] md:text-xs font-semibold text-muted-foreground whitespace-nowrap">Key Minerals:</span>
                      <span className="text-[10px] md:text-xs text-foreground font-medium">{selectedMillet.nutrition.minerals}</span>
                    </div>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h4 className="font-display font-semibold text-sm md:text-base text-foreground mb-2 md:mb-3 flex items-center gap-2">
                      <Sun className="w-4 h-4 text-secondary" /> Health Benefits
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-1.5 md:gap-2">
                      {selectedMillet.benefits.map((benefit, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + (idx * 0.1) }}
                          className="flex items-start gap-2 p-1.5 md:p-2 rounded-lg hover:bg-muted/50 transition-colors duration-200"
                        >
                          <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <div className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-secondary" />
                          </div>
                          <span className="text-muted-foreground text-[10px] md:text-xs leading-relaxed">{benefit}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};


