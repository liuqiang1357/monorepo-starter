import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { HelloWorld } from './hello-world';

describe('HelloWorld', () => {
  it('renders hello world text', () => {
    render(<HelloWorld />);
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });

  it('applies default classes', () => {
    render(<HelloWorld />);
    expect(screen.getByText('Hello World')).toHaveClass('text-2xl', 'font-bold');
  });

  it('applies custom className', () => {
    render(<HelloWorld className="custom-class" />);
    expect(screen.getByText('Hello World')).toHaveClass('custom-class', 'text-2xl', 'font-bold');
  });

  it('forwards additional props', () => {
    render(<HelloWorld data-testid="hello" id="hello-id" />);
    const element = screen.getByText('Hello World');
    expect(element).toHaveAttribute('data-testid', 'hello');
    expect(element).toHaveAttribute('id', 'hello-id');
  });

  it('renders as a div element', () => {
    render(<HelloWorld />);
    const element = screen.getByText('Hello World');
    expect(element.tagName).toBe('DIV');
  });
});
