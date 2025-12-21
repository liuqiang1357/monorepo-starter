import '../src/styles/globals.css';
import { DocsContainer, type DocsContainerProps } from '@storybook/addon-docs/blocks';
import { withThemeByClassName } from '@storybook/addon-themes';
import type { Preview } from '@storybook/react-vite';
import { themes as sbThemes } from 'storybook/theming';

const ThemedDocsContainer = ({ context, ...props }: DocsContainerProps) => {
  let isDark = false;
  try {
    const { globals } = context.getStoryContext(context.storyById());
    isDark = (globals as Record<string, unknown>)?.theme === 'dark';
  } catch {
    isDark = false;
  }
  return (
    <DocsContainer {...props} context={context} theme={isDark ? sbThemes.dark : sbThemes.light} />
  );
};

const preview: Preview = {
  decorators: [
    withThemeByClassName({
      themes: {
        light: '',
        dark: 'dark',
      },
      defaultTheme: 'light',
      parentSelector: 'html',
    }),
  ],
  parameters: {
    docs: {
      container: ThemedDocsContainer,
    },
    themes: {
      default: 'light',
      list: [
        { name: 'light', class: '', color: '#ffffff' },
        { name: 'dark', class: 'dark', color: '#0f172a' },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: 'todo',
    },
  },
};

export default preview;
