import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Home from './page';

describe('Home Page', () => {
  it('renders the main heading', () => {
    render(<Home />);

    const heading = screen.getByRole('heading', {
      name: /welcome to brainpatch/i,
      level: 1,
    });

    expect(heading).toBeInTheDocument();
  });

  it('displays the main description', () => {
    render(<Home />);

    const description = screen.getByText(/intelligent, llm-powered learning platform/i);

    expect(description).toBeInTheDocument();
  });

  it('shows the four main feature cards', () => {
    render(<Home />);

    const features = [
      'Dynamic Knowledge Assessment',
      'Personalised Course Generation',
      'Adaptive Learning Modules',
      'Privacy-First AI',
    ];

    features.forEach(feature => {
      expect(screen.getByText(feature)).toBeInTheDocument();
    });
  });

  it('displays the call-to-action button', () => {
    render(<Home />);

    const button = screen.getByRole('button', {
      name: /start your assessment/i,
    });

    expect(button).toBeInTheDocument();
  });

  it('mentions ReactJS focus in MVP section', () => {
    render(<Home />);

    const reactFocus = screen.getByText(/initial focus: reactjs mastery/i);

    expect(reactFocus).toBeInTheDocument();
  });
});
