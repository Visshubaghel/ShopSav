import { ThemeProvider as BaseThemeProvider } from "@/lib/theme-context";

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: "dark" | "light";
}

export function ThemeProvider({ children, defaultTheme = "light" }: ThemeProviderProps) {
  return (
    <BaseThemeProvider defaultTheme={defaultTheme}>
      {children}
    </BaseThemeProvider>
  );
}
