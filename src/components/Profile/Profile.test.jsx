import React from 'react';
import { render, screen } from '@testing-library/react';
import Profile from './Profile';

describe('Profile Component', () => {
  it('renders profile content correctly', () => {
    render(<Profile />);
    
    expect(screen.getByText('Software Engineer')).toBeInTheDocument();
    expect(screen.getByText('Full Stack Developer')).toBeInTheDocument();
    expect(screen.getByText(/Passionate software engineer/)).toBeInTheDocument();
  });

  it('renders CTA buttons with correct links', () => {
    render(<Profile />);
    
    const contactButton = screen.getByText('Get in Touch');
    const projectsButton = screen.getByText('View Projects');

    expect(contactButton).toHaveAttribute('href', '#contact');
    expect(projectsButton).toHaveAttribute('href', '#projects');
  });

  it('has correct section id', () => {
    render(<Profile />);
    const section = screen.getByRole('region');
    expect(section).toHaveAttribute('id', 'profile');
  });
});
