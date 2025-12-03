
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { ValueBlocks } from "@/components/ValueBlocks";
import { MissionVision } from "@/components/MissionVision";
import { Products } from "@/components/Products";
import { WhyMillets } from "@/components/WhyMillets";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { FloatingMillets } from "@/components/FloatingMillets";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { useSearchParams } from "react-router-dom";

const Index = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get("page") || "1");

  const handlePageChange = (page: number) => {
    setSearchParams({ page: page.toString() });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen animated-bg relative flex flex-col">
      <FloatingMillets />
      <Navbar forceDarkText={currentPage === 2} />

      <main className="flex-grow">
        {currentPage === 1 ? (
          <>
            <Hero />
            <About />
            <MissionVision />
            <ValueBlocks />
          </>
        ) : (
          <>
            <div className="pt-20">
              <WhyMillets />
              <Products />
              <Contact />
            </div>
          </>
        )}
      </main>

      <div className="py-8 bg-background/50 backdrop-blur-sm border-t border-border/20">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (currentPage > 1) handlePageChange(currentPage - 1);
                }}
                className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
              />
            </PaginationItem>

            <PaginationItem>
              <PaginationLink
                href="#"
                isActive={currentPage === 1}
                onClick={(e) => {
                  e.preventDefault();
                  handlePageChange(1);
                }}
              >
                1
              </PaginationLink>
            </PaginationItem>

            <PaginationItem>
              <PaginationLink
                href="#"
                isActive={currentPage === 2}
                onClick={(e) => {
                  e.preventDefault();
                  handlePageChange(2);
                }}
              >
                2
              </PaginationLink>
            </PaginationItem>

            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (currentPage < 2) handlePageChange(currentPage + 1);
                }}
                className={currentPage === 2 ? "pointer-events-none opacity-50" : "cursor-pointer"}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>

      <Footer />
    </div>
  );
};

export default Index;
