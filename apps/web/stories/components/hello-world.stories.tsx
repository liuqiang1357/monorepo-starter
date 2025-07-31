import type { Meta, StoryObj } from '@storybook/react';
import { HelloWorld } from '@/components/hello-world/hello-world';

const meta: Meta<typeof HelloWorld> = {
  title: 'Components/HelloWorld',
  component: HelloWorld,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply',
    },
  },
};

export default meta;
type Story = StoryObj<typeof HelloWorld>;

export const Default: Story = {
  args: {},
};

export const WithCustomClass: Story = {
  args: {
    className: 'text-blue-600',
  },
};

export const Large: Story = {
  args: {
    className: 'text-4xl',
  },
};

export const Colored: Story = {
  args: {
    className: 'text-green-500 bg-gray-100 p-4 rounded-lg',
  },
};

export const Interactive: Story = {
  args: {
    className: 'cursor-pointer hover:text-blue-600 transition-colors',
    onClick: () => alert('Hello World clicked!'),
  },
};
