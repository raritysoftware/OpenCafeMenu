import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Menu } from './pages/Menu';
import { ConfigService } from './services/configService';
import { ThemeService } from './services/themeService';
import { CafeConfig } from './types';
import './styles/variables.css';

function App() {
  const [config, setConfig] = useState<CafeConfig | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadConfiguration = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const configService = ConfigService.getInstance();
        const themeService = ThemeService.getInstance();
        
        const cafeConfig = await configService.loadConfig();
        setConfig(cafeConfig);
        
        // Apply theme from config
        if (cafeConfig.theme) {
          themeService.applyTheme(cafeConfig.theme);
        }
        
      } catch (err) {
        console.error('Failed to load configuration:', err);
        setError(err instanceof Error ? err.message : 'Failed to load configuration');
      } finally {
        setLoading(false);
      }
    };

    loadConfiguration();
  }, []);

  if (loading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        flexDirection: 'column',
        gap: 'var(--spacing-md)'
      }}>
        <div style={{
          width: '50px',
          height: '50px',
          border: '4px solid var(--border-color)',
          borderTop: '4px solid var(--primary-color)',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite'
        }}></div>
        <p style={{ color: '#666', fontSize: '1.1rem' }}>
          Loading cafe configuration...
        </p>
        <style>
          {`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}
        </style>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container py-xl">
        <div className="card text-center" style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h1 style={{ color: 'var(--primary-color)', marginBottom: 'var(--spacing-md)' }}>
            Configuration Error
          </h1>
          <p className="mb-md" style={{ fontSize: '1.1rem' }}>
            We're having trouble loading the cafe configuration.
          </p>
          <p className="mb-lg" style={{ fontSize: '0.9rem', color: '#666' }}>
            Error details: {error}
          </p>
          <div style={{
            background: 'var(--secondary-color)',
            padding: 'var(--spacing-md)',
            borderRadius: 'var(--border-radius)',
            marginBottom: 'var(--spacing-lg)',
            textAlign: 'left'
          }}>
            <p style={{ fontSize: '0.9rem', color: '#555', margin: 0 }}>
              <strong>Troubleshooting:</strong><br />
              • Make sure <code>cafe.yml</code> or <code>cafe.yaml</code> exists in the public folder<br />
              • Check that the YAML file is properly formatted<br />
              • Verify all required fields are present (location, about, categories, items, theme)
            </p>
          </div>
          <button 
            className="btn"
            onClick={() => window.location.reload()}
          >
            Retry Loading
          </button>
        </div>
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <Router>
        <Layout cafeName={config?.name}>
          <Routes>
            <Route path="/" element={<Home config={config} />} />
            <Route path="/about" element={<About config={config} />} />
            <Route path="/menu" element={<Menu config={config} />} />
          </Routes>
        </Layout>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
