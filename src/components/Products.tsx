import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import pearlMillet from "@/assets/pearl-millet.jpg";
import fingerMillet from "@/assets/finger-millet.jpg";
import foxtailMillet from "@/assets/foxtail-millet.jpg";
import sorghumMillet from "@/assets/sorghum-millet.png";
import kodoMillet from "@/assets/Kodo_Millet.png";
import barnyardMillet from "@/assets/Barnyard-Millet.png";
import prosoMillet from "@/assets/Proso_Millet.png";
import { ArrowRight, Leaf, Sprout } from "lucide-react";

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
        tags: ["High Protein", "Drought Resistant"]
      },
      {
        name: "Finger Millet",
        scientificName: "Eleusine coracana",
        image: fingerMillet,
        description: "Rich in calcium and iron, excellent for nutrition and health.",
        tags: ["Calcium Rich", "Iron Rich"]
      },
      {
        name: "Sorghum",
        scientificName: "Sorghum bicolor",
        image: sorghumMillet,
        description: "Versatile cereal grain with high nutritional value.",
        tags: ["Versatile", "Nutritious"]
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
        tags: ["High Fiber", "Digestive Health"]
      },
      {
        name: "Kodo Millet",
        scientificName: "Paspalum scrobiculatum",
        image: kodoMillet,
        description: "Low glycemic index, ideal for diabetic diets.",
        tags: ["Low GI", "Diabetic Friendly"]
      },
      {
        name: "Barnyard Millet",
        scientificName: "Echinochloa esculenta",
        image: barnyardMillet,
        description: "Fast growing with excellent nutritional profile.",
        tags: ["Fast Growing", "Nutritious"]
      },
      {
        name: "Proso Millet",
        scientificName: "Panicum miliaceum",
        image: prosoMillet,
        description: "Rich in protein and B vitamins.",
        tags: ["Protein Rich", "B Vitamins"]
      },
    ],
  },
];

export const Products = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
                    className="h-full"
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
    </section>
  );
};


