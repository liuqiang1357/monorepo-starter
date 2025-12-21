import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { Button } from './button';

describe('Button', () => {
  it('renders button with text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument();
  });

  it('applies default variant classes', () => {
    render(<Button>Default Button</Button>);
    expect(screen.getByRole('button', { name: 'Default Button' })).toHaveClass('bg-primary');
  });

  it('applies custom variant classes', () => {
    render(<Button variant="outline">Outline Button</Button>);
    expect(screen.getByRole('button', { name: 'Outline Button' })).toHaveClass('border');
  });

  it('applies custom size classes', () => {
    render(<Button size="lg">Large Button</Button>);
    expect(screen.getByRole('button', { name: 'Large Button' })).toHaveClass('h-10');
  });

  it('forwards additional props', () => {
    render(<Button disabled>Disabled Button</Button>);
    expect(screen.getByRole('button', { name: 'Disabled Button' })).toBeDisabled();
  });

  it('applies custom className', () => {
    render(<Button className="custom-class">Custom Button</Button>);
    expect(screen.getByRole('button', { name: 'Custom Button' })).toHaveClass('custom-class');
  });

  it('fires onClick handler', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Click me</Button>);
    await user.click(screen.getByRole('button', { name: 'Click me' }));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
