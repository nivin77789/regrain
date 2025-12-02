import { motion, useScroll, useTransform } from "framer-motion";
import { Sprout, Leaf, Cloud, Sun } from "lucide-react";

export const FloatingMillets = () => {
    const { scrollYProgress } = useScroll();

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -1000]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -1500]);
    const y3 = useTransform(scrollYProgress, [0, 1], [0, -2000]);
    const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 360]);
    const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -360]);

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {/* Layer 1 - Slow moving large icons */}
            <motion.div style={{ y: y1, rotate: rotate1 }} className="absolute top-[10%] left-[5%] opacity-[0.03]">
                <Sprout size={120} />
            </motion.div>
            <motion.div style={{ y: y1, rotate: rotate2 }} className="absolute top-[40%] right-[5%] opacity-[0.03]">
                <Leaf size={140} />
            </motion.div>
            <motion.div style={{ y: y1, rotate: rotate1 }} className="absolute top-[70%] left-[10%] opacity-[0.03]">
                <Sun size={100} />
            </motion.div>

            {/* Layer 2 - Medium speed icons */}
            <motion.div style={{ y: y2, rotate: rotate2 }} className="absolute top-[20%] right-[15%] opacity-[0.04]">
                <Cloud size={80} />
            </motion.div>
            <motion.div style={{ y: y2, rotate: rotate1 }} className="absolute top-[50%] left-[15%] opacity-[0.04]">
                <Sprout size={90} />
            </motion.div>
            <motion.div style={{ y: y2, rotate: rotate2 }} className="absolute top-[80%] right-[10%] opacity-[0.04]">
                <Leaf size={85} />
            </motion.div>

            {/* Layer 3 - Fast moving small icons */}
            <motion.div style={{ y: y3, rotate: rotate1 }} className="absolute top-[15%] left-[25%] opacity-[0.05]">
                <Leaf size={40} />
            </motion.div>
            <motion.div style={{ y: y3, rotate: rotate2 }} className="absolute top-[45%] right-[25%] opacity-[0.05]">
                <Sprout size={45} />
            </motion.div>
            <motion.div style={{ y: y3, rotate: rotate1 }} className="absolute top-[75%] left-[30%] opacity-[0.05]">
                <Cloud size={35} />
            </motion.div>

            {/* Additional scattered elements */}
            {/* Additional scattered elements - Increased Density */}
            <motion.div style={{ y: y2, rotate: rotate1 }} className="absolute top-[30%] left-[40%] opacity-[0.03]">
                <Sun size={60} />
            </motion.div>
            <motion.div style={{ y: y1, rotate: rotate2 }} className="absolute top-[60%] right-[40%] opacity-[0.03]">
                <Sprout size={70} />
            </motion.div>
            <motion.div style={{ y: y3, rotate: rotate2 }} className="absolute top-[5%] left-[50%] opacity-[0.04]">
                <Leaf size={50} />
            </motion.div>
            <motion.div style={{ y: y2, rotate: rotate1 }} className="absolute top-[85%] left-[60%] opacity-[0.03]">
                <Cloud size={65} />
            </motion.div>
            <motion.div style={{ y: y3, rotate: rotate2 }} className="absolute top-[25%] right-[35%] opacity-[0.05]">
                <Sprout size={40} />
            </motion.div>
            <motion.div style={{ y: y1, rotate: rotate1 }} className="absolute top-[55%] left-[5%] opacity-[0.02]">
                <Sun size={90} />
            </motion.div>
            <motion.div style={{ y: y2, rotate: rotate2 }} className="absolute top-[90%] right-[50%] opacity-[0.04]">
                <Leaf size={55} />
            </motion.div>
            <motion.div style={{ y: y3, rotate: rotate1 }} className="absolute top-[10%] right-[5%] opacity-[0.05]">
                <Sprout size={35} />
            </motion.div>

            {/* Extended Scroll Elements (Below Viewport) */}
            <motion.div style={{ y: y1, rotate: rotate2 }} className="absolute top-[110%] left-[15%] opacity-[0.03]">
                <Leaf size={130} />
            </motion.div>
            <motion.div style={{ y: y2, rotate: rotate1 }} className="absolute top-[125%] right-[20%] opacity-[0.04]">
                <Sun size={95} />
            </motion.div>
            <motion.div style={{ y: y3, rotate: rotate2 }} className="absolute top-[140%] left-[35%] opacity-[0.05]">
                <Cloud size={70} />
            </motion.div>
            <motion.div style={{ y: y1, rotate: rotate1 }} className="absolute top-[160%] right-[10%] opacity-[0.03]">
                <Sprout size={110} />
            </motion.div>
            <motion.div style={{ y: y2, rotate: rotate2 }} className="absolute top-[180%] left-[5%] opacity-[0.04]">
                <Leaf size={100} />
            </motion.div>
            <motion.div style={{ y: y3, rotate: rotate1 }} className="absolute top-[200%] right-[30%] opacity-[0.05]">
                <Sun size={85} />
            </motion.div>
            <motion.div style={{ y: y1, rotate: rotate2 }} className="absolute top-[220%] left-[25%] opacity-[0.03]">
                <Cloud size={120} />
            </motion.div>
            <motion.div style={{ y: y2, rotate: rotate1 }} className="absolute top-[240%] right-[45%] opacity-[0.04]">
                <Sprout size={90} />
            </motion.div>
            <motion.div style={{ y: y3, rotate: rotate2 }} className="absolute top-[260%] left-[10%] opacity-[0.05]">
                <Leaf size={60} />
            </motion.div>
        </div>
    );
};
