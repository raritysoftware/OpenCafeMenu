import React, { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ThemeService } from '../services/themeService';

interface LayoutProps {
  children: ReactNode;
  cafeName?: string;
}

export const Layout: React.FC<LayoutProps> = ({ children, cafeName }) => {
  const location = useLocation();
  const themeService = ThemeService.getInstance();

  const handleThemeToggle = () => {
    themeService.toggleDarkMode();
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <header style={{
        background: 'var(--primary-color)',
        color: 'white',
        padding: 'var(--spacing-md) 0',
        boxShadow: 'var(--shadow)'
      }}>
        <div className="container">
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 'var(--spacing-md)'
          }}>
            <h1 style={{ fontSize: '1.8rem', fontWeight: 'bold' }}>
              {cafeName || 'Open Cafe Menu'}
            </h1>
            
            <nav style={{ display: 'flex', gap: 'var(--spacing-md)', alignItems: 'center' }}>
              <Link 
                to="/" 
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  padding: 'var(--spacing-sm) var(--spacing-md)',
                  borderRadius: 'var(--border-radius)',
                  backgroundColor: isActive('/') ? 'rgba(255,255,255,0.2)' : 'transparent',
                  transition: 'background-color 0.3s ease'
                }}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  padding: 'var(--spacing-sm) var(--spacing-md)',
                  borderRadius: 'var(--border-radius)',
                  backgroundColor: isActive('/about') ? 'rgba(255,255,255,0.2)' : 'transparent',
                  transition: 'background-color 0.3s ease'
                }}
              >
                About
              </Link>
              <Link 
                to="/menu" 
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  padding: 'var(--spacing-sm) var(--spacing-md)',
                  borderRadius: 'var(--border-radius)',
                  backgroundColor: isActive('/menu') ? 'rgba(255,255,255,0.2)' : 'transparent',
                  transition: 'background-color 0.3s ease'
                }}
              >
                Menu
              </Link>
              
              <button
                onClick={handleThemeToggle}
                style={{
                  background: 'transparent',
                  border: '1px solid white',
                  color: 'white',
                  padding: 'var(--spacing-sm)',
                  borderRadius: 'var(--border-radius)',
                  cursor: 'pointer',
                  fontSize: '1rem'
                }}
                title="Toggle Dark Mode"
              >
                🌙
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ flex: 1 }}>
        {children}
      </main>

      {/* Footer */}
      <footer style={{
        background: 'var(--card-background)',
        borderTop: '1px solid var(--border-color)',
        padding: 'var(--spacing-lg) 0',
        marginTop: 'var(--spacing-xl)'
      }}>
        <div className="container text-center">
          <p style={{ color: '#666', fontSize: '0.9rem' }}>
            © 2025 {cafeName || 'Open Cafe Menu'}. Made with ❤️ for coffee lovers.
          </p>
        </div>
      </footer>
    </div>
  );
};
