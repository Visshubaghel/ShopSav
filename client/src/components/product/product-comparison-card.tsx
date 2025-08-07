import { useState } from "react";
import { Plus, Heart, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductWithListings } from "@shared/schema";
import { PlatformCard } from "./platform-card";

interface ProductComparisonCardProps {
  product: ProductWithListings;
  onCompare: (productId: string) => void;
}

export function ProductComparisonCard({ product, onCompare }: ProductComparisonCardProps) {
  const [showReviews, setShowReviews] = useState(false);

  // Get sample reviews from available listings
  const allReviews = product.listings.flatMap(listing => listing.reviews);
  const sampleReviews = allReviews.slice(0, 2); // Show up to 2 reviews

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-200 dark:border-slate-700 overflow-hidden">
      <div className="p-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Product Image and Basic Info */}
          <div className="lg:w-1/4">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h4 className="font-semibold text-lg mb-2" data-testid={`product-name-${product.id}`}>
              {product.name}
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3" data-testid={`product-description-${product.id}`}>
              {product.description}
            </p>
            
            {/* Quick Actions */}
            <div className="flex gap-2">
              <Button 
                className="flex-1 bg-brand-blue hover:bg-brand-blue-dark text-white font-medium"
                onClick={() => onCompare(product.id)}
                data-testid={`button-compare-${product.id}`}
              >
                <Plus className="w-4 h-4 mr-1" />
                Compare
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="border-gray-300 dark:border-slate-600 hover:bg-gray-50 dark:hover:bg-slate-700"
                data-testid={`button-favorite-${product.id}`}
              >
                <Heart className="w-4 h-4 text-gray-400" />
              </Button>
            </div>
          </div>

          {/* Platform Comparison */}
          <div className="lg:w-3/4">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
              {/* Render all platforms, showing unavailable ones as disabled */}
              {["amazon", "flipkart", "myntra", "meesho"].map(platform => {
                const listing = product.listings.find(l => l.platform === platform);
                if (listing) {
                  return <PlatformCard key={platform} listing={listing} />;
                } else {
                  // Create a placeholder for unavailable platforms
                  return (
                    <PlatformCard 
                      key={platform}
                      listing={{
                        id: `placeholder-${platform}`,
                        productId: product.id,
                        platform,
                        price: 0,
                        originalPrice: null,
                        discount: null,
                        available: false,
                        shipping: "",
                        shippingCost: 0,
                        rating: 0,
                        reviewCount: 0,
                        features: [],
                        url: "",
                        reviews: []
                      }}
                    />
                  );
                }
              })}
            </div>

            {/* Expandable Reviews Section */}
            {sampleReviews.length > 0 && (
              <div className="mt-6 border-t border-gray-200 dark:border-slate-600 pt-4">
                <button 
                  className="flex items-center justify-between w-full text-left"
                  onClick={() => setShowReviews(!showReviews)}
                  data-testid={`button-toggle-reviews-${product.id}`}
                >
                  <h5 className="font-medium text-gray-900 dark:text-gray-100">Customer Reviews Summary</h5>
                  <ChevronDown className={`w-5 h-5 transition-transform ${showReviews ? 'rotate-180' : ''}`} />
                </button>
                
                {showReviews && (
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4" data-testid={`reviews-${product.id}`}>
                    {sampleReviews.map((review, index) => (
                      <div key={review.id} className="p-3 bg-gray-50 dark:bg-slate-700 rounded-lg">
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-medium ${
                              review.platform === 'amazon' ? 'bg-orange-500' : 
                              review.platform === 'flipkart' ? 'bg-blue-500' :
                              review.platform === 'myntra' ? 'bg-pink-500' : 'bg-green-500'
                            }`}>
                              {review.platform.charAt(0).toUpperCase()}
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center mb-1">
                              <span className="font-medium text-sm">{review.customerName}</span>
                              <div className="flex text-yellow-400 ml-2 text-xs">
                                {[...Array(5)].map((_, i) => {
                                  const ratingValue = review.rating / 10;
                                  return (
                                    <span key={i}>
                                      {i < Math.floor(ratingValue) ? '★' : '☆'}
                                    </span>
                                  );
                                })}
                              </div>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">"{review.comment}"</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
