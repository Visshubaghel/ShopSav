import { ShoppingBag, ShoppingCart, Shirt, Store, Truck, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PlatformListing, Review } from "@shared/schema";

interface PlatformCardProps {
  listing: PlatformListing & { reviews: Review[] };
}

const platformIcons = {
  amazon: ShoppingBag,
  flipkart: ShoppingCart,
  myntra: Shirt,
  meesho: Store,
};

const platformColors = {
  amazon: "text-orange-500",
  flipkart: "text-blue-500",
  myntra: "text-pink-500",
  meesho: "text-green-500",
};

const platformButtonColors = {
  amazon: "bg-orange-500 hover:bg-orange-600",
  flipkart: "bg-blue-500 hover:bg-blue-600",
  myntra: "bg-pink-500 hover:bg-pink-600",
  meesho: "bg-green-500 hover:bg-green-600",
};

const formatPrice = (price: number) => {
  return `₹${(price / 100).toLocaleString('en-IN')}`;
};

const formatRating = (rating: number) => {
  return (rating / 10).toFixed(1);
};

const getShippingColor = (shipping: string) => {
  switch (shipping) {
    case "today":
      return "bg-green-50 dark:bg-green-900/20 border-green-400 text-green-700 dark:text-green-300";
    case "tomorrow":
      return "bg-blue-50 dark:bg-blue-900/20 border-blue-400 text-blue-700 dark:text-blue-300";
    default:
      return "bg-orange-50 dark:bg-orange-900/20 border-orange-400 text-orange-700 dark:text-orange-300";
  }
};

export function PlatformCard({ listing }: PlatformCardProps) {
  const Icon = platformIcons[listing.platform as keyof typeof platformIcons];
  const platformName = listing.platform.charAt(0).toUpperCase() + listing.platform.slice(1);

  if (!listing.available) {
    return (
      <div className="border border-gray-200 dark:border-slate-600 rounded-lg p-4 hover:shadow-md transition-shadow opacity-60">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center">
            <Icon className={`text-lg mr-2 ${platformColors[listing.platform as keyof typeof platformColors]}`} />
            <span className="font-medium text-sm">{platformName}</span>
          </div>
          <Badge variant="destructive" className="text-xs">
            Not Available
          </Badge>
        </div>
        
        <div className="text-center py-8 text-gray-400">
          <X className="mx-auto text-2xl mb-2" />
          <div className="text-sm">Product not available on this platform</div>
        </div>
      </div>
    );
  }

  return (
    <div className="border border-gray-200 dark:border-slate-600 rounded-lg p-4 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center">
          <Icon className={`text-lg mr-2 ${platformColors[listing.platform as keyof typeof platformColors]}`} />
          <span className="font-medium text-sm">{platformName}</span>
        </div>
        <Badge variant="secondary" className="text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200">
          Available
        </Badge>
      </div>
      
      {/* Price - Most Prominent */}
      <div className="mb-3">
        <div className="text-2xl font-bold text-green-600 dark:text-green-400" data-testid={`price-${listing.platform}`}>
          {formatPrice(listing.price)}
        </div>
        {listing.originalPrice && listing.originalPrice > listing.price && (
          <div className="text-sm text-gray-500 line-through">
            {formatPrice(listing.originalPrice)}
          </div>
        )}
        {listing.discount && listing.discount > 0 && (
          <div className="text-sm text-green-600 dark:text-green-400 font-medium">
            {listing.discount}% off
          </div>
        )}
        {listing.discount === 0 && (
          <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">
            No discount
          </div>
        )}
      </div>
      
      {/* Shipping - Second Most Prominent */}
      <div className={`mb-3 p-2 rounded border-l-4 ${getShippingColor(listing.shipping)}`}>
        <div className="text-sm font-medium flex items-center">
          <Truck className="w-4 h-4 mr-1" />
          {listing.shipping === "today" ? "Today" : 
           listing.shipping === "tomorrow" ? "Tomorrow" : 
           listing.shipping}
        </div>
        <div className="text-xs">
          {listing.shippingCost > 0 ? formatPrice(listing.shippingCost) : "Free delivery"}
        </div>
      </div>
      
      {/* Rating */}
      <div className="flex items-center mb-3">
        <div className="flex text-yellow-400 mr-2 text-sm">
          {[...Array(5)].map((_, i) => {
            const ratingValue = listing.rating / 10;
            if (i < Math.floor(ratingValue)) {
              return <span key={i}>★</span>;
            } else if (i === Math.floor(ratingValue) && ratingValue % 1 !== 0) {
              return <span key={i}>☆</span>;
            } else {
              return <span key={i} className="text-gray-300">★</span>;
            }
          })}
        </div>
        <span className="text-sm font-medium" data-testid={`rating-${listing.platform}`}>
          {formatRating(listing.rating)}
        </span>
        <span className="text-xs text-gray-500 ml-1" data-testid={`review-count-${listing.platform}`}>
          ({listing.reviewCount.toLocaleString()})
        </span>
      </div>
      
      {/* Quick Features */}
      <div className="text-xs text-gray-600 dark:text-gray-400 mb-3">
        {listing.features.map((feature, index) => (
          <div key={index}>• {feature}</div>
        ))}
      </div>
      
      <Button 
        className={`w-full text-white text-sm font-medium transition-colors ${platformButtonColors[listing.platform as keyof typeof platformButtonColors]}`}
        onClick={() => window.open(listing.url, '_blank')}
        data-testid={`button-view-${listing.platform}`}
      >
        View on {platformName}
      </Button>
    </div>
  );
}
