import React from 'react';
import { CafeConfig } from '../types';
import { CategoryList } from '../components/CategoryList';

interface MenuProps {
  config?: CafeConfig;
}

export const Menu: React.FC<MenuProps> = ({ config }) => {
  if (!config) {
    return (
      <div className="container py-xl">
        <div className="text-center">
          <h1 style={{
            color: 'var(--primary-color)',
            marginBottom: 'var(--spacing-lg)',
            fontSize: '2.5rem'
          }}>
            Menu
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#666' }}>
            Loading menu items...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-xl">
      {/* Header */}
      <div className="text-center mb-xl">
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          color: 'var(--primary-color)',
          marginBottom: 'var(--spacing-md)'
        }}>
          Our Menu
        </h1>
        
        <p style={{
          fontSize: '1.1rem',
          color: '#666',
          maxWidth: '600px',
          margin: '0 auto',
          lineHeight: '1.6'
        }}>
          Explore our carefully crafted selection of beverages and treats. 
          Each item is prepared with love and the finest ingredients.
        </p>
      </div>

      {/* Menu Categories and Items */}
      {config.items && config.items.length > 0 ? (
        <CategoryList 
          categories={config.categories} 
          items={config.items} 
          currency={config.currency}
        />
      ) : (
        <div className="text-center py-xl">
          <div className="card" style={{ maxWidth: '500px', margin: '0 auto' }}>
            <h2 style={{
              color: 'var(--primary-color)',
              marginBottom: 'var(--spacing-md)'
            }}>
              Coming Soon
            </h2>
            <p style={{ color: '#666', fontSize: '1.1rem' }}>
              We're working on updating our menu. Please check back soon!
            </p>
          </div>
        </div>
      )}

      {/* Footer Note */}
      <div className="text-center mt-xl">
        <div style={{
          background: 'var(--secondary-color)',
          padding: 'var(--spacing-lg)',
          borderRadius: 'var(--border-radius)',
          border: '1px solid var(--border-color)'
        }}>
          <p style={{
            color: '#666',
            fontSize: '0.9rem',
            margin: 0
          }}>
            Prices are subject to change. Please ask our staff about daily specials and seasonal offerings.
          </p>
        </div>
      </div>
    </div>
  );
};
