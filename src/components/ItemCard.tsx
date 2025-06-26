import React from 'react';
import { MenuItem } from '../types';

interface ItemCardProps {
  item: MenuItem;
  currency?: string;
}

export const ItemCard: React.FC<ItemCardProps> = ({ item, currency = '$' }) => {
  return (
    <div className="card" style={{
      transition: 'transform 0.2s ease, box-shadow 0.2s ease',
      cursor: 'pointer'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-2px)';
      e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = 'var(--shadow)';
    }}
    >
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        gap: 'var(--spacing-md)'
      }}>
        <div style={{ flex: 1 }}>
          <h3 style={{
            color: 'var(--primary-color)',
            marginBottom: 'var(--spacing-sm)',
            fontSize: '1.1rem',
            fontWeight: 'bold'
          }}>
            {item.name}
          </h3>
          <p style={{
            fontSize: '0.9rem',
            color: '#666',
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
          }}>
            {item.category}
          </p>
        </div>
        
        <div style={{
          background: 'var(--primary-color)',
          color: 'white',
          padding: 'var(--spacing-sm) var(--spacing-md)',
          borderRadius: 'var(--border-radius)',
          fontWeight: 'bold',
          fontSize: '1rem',
          minWidth: '60px',
          textAlign: 'center'
        }}>
          {currency}{item.price}
        </div>
      </div>
    </div>
  );
};
