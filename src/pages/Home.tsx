import React from 'react';
import { Link } from 'react-router-dom';
import { CafeConfig } from '../types';

interface HomeProps {
  config?: CafeConfig;
}

export const Home: React.FC<HomeProps> = ({ config }) => {
  return (
    <div className="container py-xl">
      {/* Hero Section */}
      <div className="text-center mb-xl">
        <h1 style={{
          fontSize: '3rem',
          fontWeight: 'bold',
          color: 'var(--primary-color)',
          marginBottom: 'var(--spacing-lg)',
          textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
        }}>
          Welcome to {config?.name || 'Our Cafe'}
        </h1>
        
        <p style={{
          fontSize: '1.2rem',
          color: '#666',
          maxWidth: '600px',
          margin: '0 auto var(--spacing-xl)',
          lineHeight: '1.8'
        }}>
          Discover our carefully curated selection of premium beverages and delicious treats. 
          Every cup tells a story, every bite creates a memory.
        </p>

        <div style={{
          display: 'flex',
          gap: 'var(--spacing-md)',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <Link to="/menu" className="btn" style={{
            fontSize: '1.1rem',
            padding: 'var(--spacing-md) var(--spacing-xl)',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            fontWeight: 'bold'
          }}>
            View Menu
          </Link>
          
          <Link to="/about" className="btn" style={{
            fontSize: '1.1rem',
            padding: 'var(--spacing-md) var(--spacing-xl)',
            background: 'transparent',
            color: 'var(--primary-color)',
            border: '2px solid var(--primary-color)',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            fontWeight: 'bold'
          }}>
            Learn More
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="grid grid-3 mt-xl">
        <div className="card text-center">
          <div style={{
            fontSize: '3rem',
            marginBottom: 'var(--spacing-md)'
          }}>
            ☕
          </div>
          <h3 style={{
            color: 'var(--primary-color)',
            marginBottom: 'var(--spacing-md)',
            fontSize: '1.3rem'
          }}>
            Premium Coffee
          </h3>
          <p style={{ color: '#666', lineHeight: '1.6' }}>
            Freshly roasted beans from around the world, expertly brewed to perfection.
          </p>
        </div>

        <div className="card text-center">
          <div style={{
            fontSize: '3rem',
            marginBottom: 'var(--spacing-md)'
          }}>
            🥐
          </div>
          <h3 style={{
            color: 'var(--primary-color)',
            marginBottom: 'var(--spacing-md)',
            fontSize: '1.3rem'
          }}>
            Fresh Pastries
          </h3>
          <p style={{ color: '#666', lineHeight: '1.6' }}>
            Delicious baked goods made fresh daily with the finest ingredients.
          </p>
        </div>

        <div className="card text-center">
          <div style={{
            fontSize: '3rem',
            marginBottom: 'var(--spacing-md)'
          }}>
            🌿
          </div>
          <h3 style={{
            color: 'var(--primary-color)',
            marginBottom: 'var(--spacing-md)',
            fontSize: '1.3rem'
          }}>
            Natural Teas
          </h3>
          <p style={{ color: '#666', lineHeight: '1.6' }}>
            A curated selection of premium teas from organic and sustainable sources.
          </p>
        </div>
      </div>

      {/* Quick Stats */}
      {config && (
        <div className="text-center mt-xl">
          <div style={{
            background: 'var(--secondary-color)',
            padding: 'var(--spacing-xl)',
            borderRadius: 'var(--border-radius)',
            border: '1px solid var(--border-color)'
          }}>
            <h2 style={{
              color: 'var(--primary-color)',
              marginBottom: 'var(--spacing-lg)',
              fontSize: '1.8rem'
            }}>
              What We Offer
            </h2>
            
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: 'var(--spacing-xl)',
              flexWrap: 'wrap'
            }}>
              <div>
                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--primary-color)' }}>
                  {config.categories.length}
                </div>
                <div style={{ color: '#666', textTransform: 'uppercase', fontSize: '0.9rem' }}>
                  Categories
                </div>
              </div>
              
              <div>
                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--primary-color)' }}>
                  {config.items.length}
                </div>
                <div style={{ color: '#666', textTransform: 'uppercase', fontSize: '0.9rem' }}>
                  Menu Items
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
