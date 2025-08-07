import { Scale } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white dark:bg-slate-800 border-t border-gray-200 dark:border-slate-700 mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Scale className="text-xl text-brand-blue" />
              <h3 className="text-lg font-bold text-brand-blue">ShopCompare</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Compare products across all major e-commerce platforms and find the best deals.</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Platforms</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li><a href="#" className="hover:text-brand-blue transition-colors">Amazon</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Flipkart</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Myntra</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Meesho</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Features</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li><a href="#" className="hover:text-brand-blue transition-colors">Price Comparison</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Reviews Analysis</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Shipping Comparison</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Deal Alerts</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li><a href="#" className="hover:text-brand-blue transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-slate-700 mt-8 pt-6 text-center text-sm text-gray-600 dark:text-gray-400">
          <p>&copy; 2024 ShopCompare. All rights reserved. | Made with ❤️ for smart shoppers</p>
        </div>
      </div>
    </footer>
  );
}
