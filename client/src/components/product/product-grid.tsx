import { useState } from "react";
import { ProductWithListings, Platform } from "@shared/schema";
import { ProductComparisonCard } from "./product-comparison-card";
import { ComparisonModal } from "./comparison-modal";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface ProductGridProps {
  products: ProductWithListings[];
  searchQuery: string;
  isLoading?: boolean;
}

type SortOption = "price-low" | "price-high" | "rating" | "popularity";

export function ProductGrid({ products, searchQuery, isLoading }: ProductGridProps) {
  const [selectedProducts, setSelectedProducts] = useState<ProductWithListings[]>([]);
  const [isComparisonOpen, setIsComparisonOpen] = useState(false);
  const [sortBy, setSortBy] = useState<SortOption>("price-low");
  const [visibleCount, setVisibleCount] = useState(6);

  const handleCompare = (productId: string) => {
    const product = products.find(p => p.id === productId);
    if (product) {
      setSelectedProducts([product]);
      setIsComparisonOpen(true);
    }
  };

  const sortProducts = (products: ProductWithListings[], sortOption: SortOption): ProductWithListings[] => {
    return [...products].sort((a, b) => {
      const getLowestPrice = (product: ProductWithListings) => {
        const availableListings = product.listings.filter(l => l.available);
        if (availableListings.length === 0) return Infinity;
        return Math.min(...availableListings.map(l => l.price));
      };

      const getHighestRating = (product: ProductWithListings) => {
        const availableListings = product.listings.filter(l => l.available);
        if (availableListings.length === 0) return 0;
        return Math.max(...availableListings.map(l => l.rating));
      };

      const getTotalReviews = (product: ProductWithListings) => {
        return product.listings.reduce((sum, l) => sum + l.reviewCount, 0);
      };

      switch (sortOption) {
        case "price-low":
          return getLowestPrice(a) - getLowestPrice(b);
        case "price-high":
          return getLowestPrice(b) - getLowestPrice(a);
        case "rating":
          return getHighestRating(b) - getHighestRating(a);
        case "popularity":
          return getTotalReviews(b) - getTotalReviews(a);
        default:
          return 0;
      }
    });
  };

  const sortedProducts = sortProducts(products, sortBy);
  const visibleProducts = sortedProducts.slice(0, visibleCount);
  const hasMore = visibleCount < sortedProducts.length;

  if (isLoading) {
    return (
      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center py-12">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-blue mx-auto mb-4"></div>
            <p className="text-gray-600 dark:text-gray-400">Searching products...</p>
          </div>
        </div>
      </main>
    );
  }

  if (products.length === 0 && searchQuery) {
    return (
      <main className="container mx-auto px-4 py-8">
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold mb-2">No products found</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Try searching with different keywords or check your spelling.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-4 py-8">
      {products.length > 0 && (
        <>
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold mb-2">Search Results</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {searchQuery ? `Showing results for "${searchQuery}"` : "Browse all products"}
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-sm text-gray-600 dark:text-gray-400">Sort by:</span>
              <Select value={sortBy} onValueChange={(value) => setSortBy(value as SortOption)}>
                <SelectTrigger className="w-[180px] bg-white dark:bg-slate-700 border-gray-300 dark:border-slate-600">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Rating</SelectItem>
                  <SelectItem value="popularity">Popularity</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Product Comparison Cards Grid */}
          <div className="space-y-6">
            {visibleProducts.map(product => (
              <ProductComparisonCard
                key={product.id}
                product={product}
                onCompare={handleCompare}
              />
            ))}
          </div>

          {/* Load More Button */}
          {hasMore && (
            <div className="text-center mt-8">
              <Button 
                onClick={() => setVisibleCount(prev => prev + 6)}
                className="bg-brand-blue hover:bg-brand-blue-dark text-white px-8 py-3 font-medium"
                data-testid="button-load-more"
              >
                Load More Results
              </Button>
            </div>
          )}
        </>
      )}

      {/* Comparison Modal */}
      <ComparisonModal
        products={selectedProducts}
        isOpen={isComparisonOpen}
        onClose={() => setIsComparisonOpen(false)}
      />
    </main>
  );
}
