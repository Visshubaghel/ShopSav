import { Scale } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function Header() {
  return (
    <header className="bg-white dark:bg-slate-800 shadow-sm border-b border-gray-200 dark:border-slate-700 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Scale className="text-2xl text-brand-blue" />
            <h1 className="text-2xl font-bold text-brand-blue">ShopCompare</h1>
          </div>
          
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
