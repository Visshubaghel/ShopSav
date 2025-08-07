import { useState } from "react";
import { Search, ShoppingBag, ShoppingCart, Shirt, Store } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Platform } from "@shared/schema";

interface SearchSectionProps {
  onSearch: (query: string) => void;
  onPlatformFilter: (platform: Platform | "all") => void;
  activePlatform: Platform | "all";
  isSearching?: boolean;
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

export function SearchSection({ onSearch, onPlatformFilter, activePlatform, isSearching }: SearchSectionProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    if (searchQuery.trim()) {
      onSearch(searchQuery.trim());
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <section className="bg-white dark:bg-slate-800 py-8 border-b border-gray-200 dark:border-slate-700">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2">Compare Products Across All Platforms</h2>
          <p className="text-gray-600 dark:text-gray-400 text-center mb-8">Find the best deals on Amazon, Flipkart, Myntra, and Meesho</p>
          
          {/* Search Bar */}
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <Input
              type="text"
              placeholder="Search for products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={handleKeyPress}
              className="w-full pl-10 pr-20 py-4 text-lg h-auto focus:ring-2 focus:ring-brand-blue bg-white dark:bg-slate-700 border-gray-300 dark:border-slate-600"
              data-testid="input-search"
            />
            <Button 
              onClick={handleSearch}
              disabled={isSearching || !searchQuery.trim()}
              className="absolute right-2 top-2 bg-brand-blue hover:bg-brand-blue-dark text-white font-medium"
              data-testid="button-search"
            >
              {isSearching ? "Searching..." : "Search"}
            </Button>
          </div>

          {/* Platform Filters */}
          <div className="flex flex-wrap gap-3 justify-center">
            <Button
              variant={activePlatform === "all" ? "default" : "outline"}
              onClick={() => onPlatformFilter("all")}
              className={`${activePlatform === "all" 
                ? "bg-brand-blue hover:bg-brand-blue-dark text-white" 
                : "bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-slate-600 border-gray-300 dark:border-slate-600"
              } font-medium transition-colors`}
              data-testid="filter-all"
            >
              All Platforms
            </Button>
            
            {Object.entries(platformIcons).map(([platform, Icon]) => (
              <Button
                key={platform}
                variant={activePlatform === platform ? "default" : "outline"}
                onClick={() => onPlatformFilter(platform as Platform)}
                className={`${activePlatform === platform 
                  ? "bg-brand-blue hover:bg-brand-blue-dark text-white" 
                  : "bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-slate-600 border-gray-300 dark:border-slate-600"
                } font-medium transition-colors`}
                data-testid={`filter-${platform}`}
              >
                <Icon className={`w-4 h-4 mr-2 ${activePlatform === platform ? "text-white" : platformColors[platform as Platform]}`} />
                {platform.charAt(0).toUpperCase() + platform.slice(1)}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
