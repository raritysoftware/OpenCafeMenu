import { Theme } from '../types';

export class ThemeService {
  private static instance: ThemeService;

  static getInstance(): ThemeService {
    if (!ThemeService.instance) {
      ThemeService.instance = new ThemeService();
    }
    return ThemeService.instance;
  }

  applyTheme(theme: Theme): void {
    const root = document.documentElement;
    
    root.style.setProperty('--primary-color', theme.primaryColor);
    root.style.setProperty('--secondary-color', theme.secondaryColor);
    root.style.setProperty('--font-family', theme.font);
    
    // Apply font to body
    document.body.style.fontFamily = theme.font;
  }

  resetTheme(): void {
    const root = document.documentElement;
    
    root.style.setProperty('--primary-color', '#8B4513');
    root.style.setProperty('--secondary-color', '#F5F5DC');
    root.style.setProperty('--font-family', 'Georgia, serif');
    
    document.body.style.fontFamily = 'Georgia, serif';
  }

  toggleDarkMode(): void {
    const root = document.documentElement;
    const isDark = root.style.getPropertyValue('--background-color') === '#1a1a1a';
    
    if (isDark) {
      // Light mode
      root.style.setProperty('--background-color', '#ffffff');
      root.style.setProperty('--text-color', '#333');
      root.style.setProperty('--card-background', '#fafafa');
      root.style.setProperty('--border-color', '#e0e0e0');
      root.style.setProperty('--hover-color', '#f0f0f0');
    } else {
      // Dark mode
      root.style.setProperty('--background-color', '#1a1a1a');
      root.style.setProperty('--text-color', '#e0e0e0');
      root.style.setProperty('--card-background', '#2a2a2a');
      root.style.setProperty('--border-color', '#404040');
      root.style.setProperty('--hover-color', '#3a3a3a');
    }
  }
}
