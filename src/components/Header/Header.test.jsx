import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header Component', () => {
  it('renders navigation links', () => {
    render(<Header />);
    
    expect(screen.getByText('Profile')).toBeInTheDocument();
    expect(screen.getByText('Skills')).toBeInTheDocument();
    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('has correct href attributes', () => {
    render(<Header />);
    
    expect(screen.getByText('Profile').closest('a')).toHaveAttribute('href', '#profile');
    expect(screen.getByText('Skills').closest('a')).toHaveAttribute('href', '#skills');
    expect(screen.getByText('Projects').closest('a')).toHaveAttribute('href', '#projects');
    expect(screen.getByText('Contact').closest('a')).toHaveAttribute('href', '#contact');
  });
});
