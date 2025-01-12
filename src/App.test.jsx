import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  it('renders header and profile sections', () => {
    render(<App />);
    
    // Check for header navigation items
    expect(screen.getByText('Profile')).toBeInTheDocument();
    expect(screen.getByText('Skills')).toBeInTheDocument();
    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();

    // Check for profile content
    expect(screen.getByText('Software Engineer')).toBeInTheDocument();
    expect(screen.getByText('Full Stack Developer')).toBeInTheDocument();
  });

  it('renders main content wrapper', () => {
    render(<App />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});
