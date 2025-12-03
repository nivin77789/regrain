import { Navbar } from "@/components/Navbar";
import { Products } from "@/components/Products";
import { Footer } from "@/components/Footer";
import { FloatingMillets } from "@/components/FloatingMillets";

const ProductsPage = () => {
    return (
        <div className="min-h-screen animated-bg relative">
            <FloatingMillets />
            <Navbar />
            <div className="pt-20">
                <Products />
            </div>
            <Footer />
        </div>
    );
};

export default ProductsPage;
