import { ThemeShowcase } from '@repo/ui/components/theme-showcase';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ThemeShowcase> = {
  title: 'Design System/Theme',
  component: ThemeShowcase,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ThemeShowcase>;

export const Default: Story = {
  args: {},
};
