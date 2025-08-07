import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SearchSection } from "@/components/product/search-section";
import { ProductGrid } from "@/components/product/product-grid";
import { ProductWithListings, Platform } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("smartphone");
  const [activePlatform, setActivePlatform] = useState<Platform | "all">("all");
  const [hasSearched, setHasSearched] = useState(false);
  const { toast } = useToast();

  const { data: products = [], isLoading, error, refetch } = useQuery<ProductWithListings[]>({
    queryKey: ["/api/products/search", searchQuery, activePlatform === "all" ? undefined : activePlatform],
    queryFn: async ({ queryKey }) => {
      const [_, query, platform] = queryKey;
      const params = new URLSearchParams();
      
      if (query && typeof query === "string") {
        params.append("q", query);
      }
      
      if (platform && typeof platform === "string") {
        params.append("platform", platform);
      }

      const response = await fetch(`/api/products/search?${params}`);
      if (!response.ok) {
        throw new Error("Failed to search products");
      }
      
      return response.json();
    },
    enabled: false, // Don't fetch automatically
  });

  // Initial search for smartphones
  useEffect(() => {
    if (!hasSearched) {
      refetch();
      setHasSearched(true);
    }
  }, [refetch, hasSearched]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    refetch();
  };

  const handlePlatformFilter = (platform: Platform | "all") => {
    setActivePlatform(platform);
    refetch();
  };

  useEffect(() => {
    if (error) {
      toast({
        variant: "destructive",
        title: "Search Error",
        description: "Failed to search products. Please try again.",
      });
    }
  }, [error, toast]);

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
