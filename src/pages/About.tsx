import React from 'react';
import { CafeConfig } from '../types';

interface AboutProps {
  config?: CafeConfig;
}

export const About: React.FC<AboutProps> = ({ config }) => {
  return (
    <div className="container py-xl">
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        {/* Header */}
        <div className="text-center mb-xl">
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: 'var(--primary-color)',
            marginBottom: 'var(--spacing-lg)'
          }}>
            About {config?.name || 'Our Cafe'}
          </h1>
        </div>

        {/* Main Content */}
        <div className="card" style={{
          padding: 'var(--spacing-xl)',
          marginBottom: 'var(--spacing-xl)'
        }}>
          {config?.about ? (
            <div>
              <p style={{
                fontSize: '1.1rem',
                lineHeight: '1.8',
                color: '#555',
                marginBottom: 'var(--spacing-lg)',
                textAlign: 'center'
              }}>
                {config.about}
              </p>
            </div>
          ) : (
            <div className="text-center">
              <p style={{
                fontSize: '1.1rem',
                color: '#666',
                marginBottom: 'var(--spacing-lg)'
              }}>
                Welcome to our cozy cafe! We're passionate about serving the finest coffee and creating memorable experiences for our customers.
              </p>
            </div>
          )}

          {/* Values Section */}
          <div className="mt-xl">
            <h2 style={{
              color: 'var(--primary-color)',
              marginBottom: 'var(--spacing-lg)',
              textAlign: 'center',
              fontSize: '1.8rem'
            }}>
              Our Values
            </h2>

            <div className="grid grid-2" style={{ gap: 'var(--spacing-lg)' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: '2.5rem',
                  marginBottom: 'var(--spacing-md)'
                }}>
                  🌱
                </div>
                <h3 style={{
                  color: 'var(--primary-color)',
                  marginBottom: 'var(--spacing-sm)',
                  fontSize: '1.2rem'
                }}>
                  Sustainability
                </h3>
                <p style={{ color: '#666', lineHeight: '1.6' }}>
                  We source our ingredients responsibly and are committed to reducing our environmental impact.
                </p>
              </div>

              <div style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: '2.5rem',
                  marginBottom: 'var(--spacing-md)'
                }}>
                  👥
                </div>
                <h3 style={{
                  color: 'var(--primary-color)',
                  marginBottom: 'var(--spacing-sm)',
                  fontSize: '1.2rem'
                }}>
                  Community
                </h3>
                <p style={{ color: '#666', lineHeight: '1.6' }}>
                  We believe in bringing people together and creating a welcoming space for everyone.
                </p>
              </div>

              <div style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: '2.5rem',
                  marginBottom: 'var(--spacing-md)'
                }}>
                  ⭐
                </div>
                <h3 style={{
                  color: 'var(--primary-color)',
                  marginBottom: 'var(--spacing-sm)',
                  fontSize: '1.2rem'
                }}>
                  Quality
                </h3>
                <p style={{ color: '#666', lineHeight: '1.6' }}>
                  Every product we serve meets our high standards for taste, freshness, and presentation.
                </p>
              </div>

              <div style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: '2.5rem',
                  marginBottom: 'var(--spacing-md)'
                }}>
                  💝
                </div>
                <h3 style={{
                  color: 'var(--primary-color)',
                  marginBottom: 'var(--spacing-sm)',
                  fontSize: '1.2rem'
                }}>
                  Passion
                </h3>
                <p style={{ color: '#666', lineHeight: '1.6' }}>
                  We're passionate about coffee culture and dedicated to sharing that love with our customers.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact/Hours Section */}
        <div className="card" style={{
          background: 'var(--secondary-color)',
          padding: 'var(--spacing-xl)',
          textAlign: 'center'
        }}>
          <h2 style={{
            color: 'var(--primary-color)',
            marginBottom: 'var(--spacing-lg)',
            fontSize: '1.8rem'
          }}>
            Visit Us
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: 'var(--spacing-lg)',
            marginBottom: 'var(--spacing-lg)'
          }}>
            <div>
              <h3 style={{
                color: 'var(--primary-color)',
                marginBottom: 'var(--spacing-sm)'
              }}>
                Hours
              </h3>
              {config?.hours ? (
                <div style={{ color: '#666', fontSize: '0.9rem' }}>
                  <div>Monday: {config.hours.monday}</div>
                  <div>Tuesday: {config.hours.tuesday}</div>
                  <div>Wednesday: {config.hours.wednesday}</div>
                  <div>Thursday: {config.hours.thursday}</div>
                  <div>Friday: {config.hours.friday}</div>
                  <div>Saturday: {config.hours.saturday}</div>
                  <div>Sunday: {config.hours.sunday}</div>
                </div>
              ) : (
                <p style={{ color: '#666' }}>
                  Monday - Friday: 7:00 AM - 6:00 PM<br />
                  Saturday - Sunday: 8:00 AM - 5:00 PM
                </p>
              )}
            </div>
            
            <div>
              <h3 style={{
                color: 'var(--primary-color)',
                marginBottom: 'var(--spacing-sm)'
              }}>
                Location
              </h3>
              {config?.location ? (
                <p style={{ color: '#666' }}>
                  {config.location.address}<br />
                  {config.location.city}<br />
                  {config.location.country}
                </p>
              ) : (
                <p style={{ color: '#666' }}>
                  {config?.name || 'Downtown Coffee District'}<br />
                  123 Coffee Street<br />
                  Cafe City, CC 12345
                </p>
              )}
            </div>
            
            <div>
              <h3 style={{
                color: 'var(--primary-color)',
                marginBottom: 'var(--spacing-sm)'
              }}>
                Contact
              </h3>
              {config?.contact ? (
                <p style={{ color: '#666' }}>
                  Phone: {config.contact.phone}<br />
                  Email: {config.contact.email}<br />
                  Instagram: {config.contact.instagram}
                </p>
              ) : (
                <p style={{ color: '#666' }}>
                  Phone: (555) 123-CAFE<br />
                  Email: hello@opencafe.menu<br />
                  Follow us @opencafemenu
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
