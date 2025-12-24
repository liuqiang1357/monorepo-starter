import { Button } from '@repo/ui/components/button';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, within } from 'storybook/test';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link', 'unstyled'],
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon', 'unsized'],
    },
    asChild: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Button',
    variant: 'default',
    size: 'default',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: 'Button' });
    await expect(button).toBeVisible();
    await expect(button).toHaveClass('bg-primary');
  },
};

export const Destructive: Story = {
  args: {
    children: 'Destructive',
    variant: 'destructive',
  },
};

export const Outline: Story = {
  args: {
    children: 'Outline',
    variant: 'outline',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: 'Outline' });
    await expect(button).toBeVisible();
    await expect(button).toHaveClass('border');
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary',
    variant: 'secondary',
  },
};

export const Ghost: Story = {
  args: {
    children: 'Ghost',
    variant: 'ghost',
  },
};

export const Link: Story = {
  args: {
    children: 'Link',
    variant: 'link',
  },
};

export const Unstyled: Story = {
  args: {
    children: 'Unstyled',
    variant: 'unstyled',
  },
};

export const Small: Story = {
  args: {
    children: 'Small',
    size: 'sm',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: 'Small' });
    await expect(button).toBeVisible();
    await expect(button).toHaveClass('h-8');
  },
};

export const Large: Story = {
  args: {
    children: 'Large',
    size: 'lg',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: 'Large' });
    await expect(button).toBeVisible();
    await expect(button).toHaveClass('h-10');
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled',
    disabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: 'Disabled' });
    await expect(button).toBeVisible();
    await expect(button).toBeDisabled();
    await expect(button).toHaveClass('disabled:pointer-events-none');
  },
};

export const Unsized: Story = {
  args: {
    children: 'Unsized',
    size: 'unsized',
  },
};
