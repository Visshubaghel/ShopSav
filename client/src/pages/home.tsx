import { useState, useEffect } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SearchSection } from "@/components/product/search-section";
import { ProductGrid } from "@/components/product/product-grid";
import { ProductWithListings, Platform } from "@shared/schema";
import { searchProducts } from "@/data/products";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("smartphone");
  const [activePlatform, setActivePlatform] = useState<Platform | "all">("all");
  const [products, setProducts] = useState<ProductWithListings[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const performSearch = (query: string, platform: Platform | "all" = "all") => {
    setIsLoading(true);
    // Simulate loading delay for better UX
    setTimeout(() => {
      const results = searchProducts(query, platform === "all" ? undefined : platform);
      setProducts(results);
      setIsLoading(false);
    }, 300);
  };

  // Initial search for smartphones
  useEffect(() => {
    performSearch(searchQuery);
  }, []);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    performSearch(query, activePlatform);
  };

  const handlePlatformFilter = (platform: Platform | "all") => {
    setActivePlatform(platform);
    performSearch(searchQuery, platform);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Header />
      
      <SearchSection
        onSearch={handleSearch}
        onPlatformFilter={handlePlatformFilter}
        activePlatform={activePlatform}
        isSearching={isLoading}
      />
      
      <ProductGrid
        products={products}
        searchQuery={searchQuery}
        isLoading={isLoading}
      />
      
      <Footer />
    </div>
  );
}
