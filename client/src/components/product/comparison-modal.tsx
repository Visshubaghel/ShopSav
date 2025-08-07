import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ProductWithListings } from "@shared/schema";

interface ComparisonModalProps {
  products: ProductWithListings[];
  isOpen: boolean;
  onClose: () => void;
}

const formatPrice = (price: number) => {
  return `₹${(price / 100).toLocaleString('en-IN')}`;
};

export function ComparisonModal({ products, isOpen, onClose }: ComparisonModalProps) {
  const getProductStats = (product: ProductWithListings) => {
    const availableListings = product.listings.filter(l => l.available);
    
    if (availableListings.length === 0) {
      return {
        bestPrice: "N/A",
        bestPricePlatform: "N/A",
        fastestDelivery: "N/A",
        fastestDeliveryPlatform: "N/A",
        highestRating: "N/A",
        highestRatingPlatform: "N/A"
      };
    }

    const bestPriceListing = availableListings.reduce((best, current) => 
      current.price < best.price ? current : best
    );

    const fastestDeliveryListing = availableListings.reduce((fastest, current) => {
      const order = { "today": 1, "tomorrow": 2 };
      const currentOrder = order[current.shipping as keyof typeof order] || 999;
      const fastestOrder = order[fastest.shipping as keyof typeof order] || 999;
      return currentOrder < fastestOrder ? current : fastest;
    });

    const highestRatingListing = availableListings.reduce((highest, current) => 
      current.rating > highest.rating ? current : highest
    );

    return {
      bestPrice: formatPrice(bestPriceListing.price),
      bestPricePlatform: bestPriceListing.platform.charAt(0).toUpperCase() + bestPriceListing.platform.slice(1),
      fastestDelivery: fastestDeliveryListing.shipping === "today" ? "Today" : 
                      fastestDeliveryListing.shipping === "tomorrow" ? "Tomorrow" : 
                      fastestDeliveryListing.shipping,
      fastestDeliveryPlatform: fastestDeliveryListing.platform.charAt(0).toUpperCase() + fastestDeliveryListing.platform.slice(1),
      highestRating: `${(highestRatingListing.rating / 10).toFixed(1)}/5`,
      highestRatingPlatform: highestRatingListing.platform.charAt(0).toUpperCase() + highestRatingListing.platform.slice(1)
    };
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Detailed Comparison</DialogTitle>
        </DialogHeader>
        
        <div className="p-6">
          <div className={`grid gap-6 ${products.length === 1 ? 'grid-cols-1' : 'grid-cols-1 lg:grid-cols-2'}`}>
            {products.map(product => {
              const stats = getProductStats(product);
              
              return (
                <div key={product.id} className="space-y-4">
                  <h4 className="font-semibold text-lg" data-testid={`modal-product-${product.id}`}>
                    {product.name}
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between py-2 border-b border-gray-200 dark:border-slate-600">
                      <span className="text-gray-600 dark:text-gray-400">Best Price</span>
                      <span className="font-semibold" data-testid={`best-price-${product.id}`}>
                        {stats.bestPrice} ({stats.bestPricePlatform})
                      </span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200 dark:border-slate-600">
                      <span className="text-gray-600 dark:text-gray-400">Fastest Delivery</span>
                      <span className="font-semibold" data-testid={`fastest-delivery-${product.id}`}>
                        {stats.fastestDelivery} ({stats.fastestDeliveryPlatform})
                      </span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200 dark:border-slate-600">
                      <span className="text-gray-600 dark:text-gray-400">Highest Rating</span>
                      <span className="font-semibold" data-testid={`highest-rating-${product.id}`}>
                        {stats.highestRating} ({stats.highestRatingPlatform})
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
