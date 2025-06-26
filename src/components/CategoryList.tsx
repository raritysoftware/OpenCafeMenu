import React, { useState } from 'react';
import { MenuItem } from '../types';
import { ItemCard } from './ItemCard';

interface CategoryListProps {
  categories: string[];
  items: MenuItem[];
  currency?: string;
}

export const CategoryList: React.FC<CategoryListProps> = ({ categories, items, currency = '$' }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredItems = selectedCategory === 'All' 
    ? items 
    : items.filter(item => item.category === selectedCategory);

  const categoryButtons = ['All', ...categories];

  return (
    <div>
      {/* Category Filter */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 'var(--spacing-sm)',
        marginBottom: 'var(--spacing-xl)',
        justifyContent: 'center'
      }}>
        {categoryButtons.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            style={{
              background: selectedCategory === category ? 'var(--primary-color)' : 'transparent',
              color: selectedCategory === category ? 'white' : 'var(--primary-color)',
              border: `2px solid var(--primary-color)`,
              padding: 'var(--spacing-sm) var(--spacing-md)',
              borderRadius: 'var(--border-radius)',
              cursor: 'pointer',
              fontFamily: 'var(--font-family)',
              fontSize: '0.9rem',
              fontWeight: '500',
              transition: 'all 0.3s ease',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}
            onMouseEnter={(e) => {
              if (selectedCategory !== category) {
                e.currentTarget.style.background = 'var(--primary-color)';
                e.currentTarget.style.color = 'white';
              }
            }}
            onMouseLeave={(e) => {
              if (selectedCategory !== category) {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = 'var(--primary-color)';
              }
            }}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Items Grid */}
      {filteredItems.length > 0 ? (
        <>
          <h2 style={{
            color: 'var(--primary-color)',
            marginBottom: 'var(--spacing-lg)',
            textAlign: 'center',
            fontSize: '1.5rem'
          }}>
            {selectedCategory} ({filteredItems.length} items)
          </h2>
          
          <div className="grid grid-2">
            {filteredItems.map((item, index) => (
              <ItemCard key={`${item.name}-${index}`} item={item} currency={currency} />
            ))}
          </div>
        </>
      ) : (
        <div className="text-center py-xl">
          <p style={{ fontSize: '1.1rem', color: '#666' }}>
            No items found in the {selectedCategory} category.
          </p>
        </div>
      )}
    </div>
  );
};
