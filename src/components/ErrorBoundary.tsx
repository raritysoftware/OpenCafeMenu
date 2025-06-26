import React, { Component, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="container py-xl">
          <div className="card text-center">
            <h1 style={{ color: 'var(--primary-color)', marginBottom: 'var(--spacing-md)' }}>
              Oops! Something went wrong
            </h1>
            <p className="mb-md">
              We're sorry, but there was an error loading the application.
            </p>
            <p className="mb-lg" style={{ fontSize: '0.9em', color: '#666' }}>
              {this.state.error?.message || 'Unknown error occurred'}
            </p>
            <button 
              className="btn"
              onClick={() => window.location.reload()}
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
