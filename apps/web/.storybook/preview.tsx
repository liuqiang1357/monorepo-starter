import '../src/styles/globals.css';
import { DocsContainer } from '@storybook/blocks';
import { addons } from '@storybook/preview-api';
import { Preview } from '@storybook/react';
import { themes } from '@storybook/theming';
import { ComponentProps, useEffect, useState } from 'react';
import { DARK_MODE_EVENT_NAME } from 'storybook-dark-mode';

const channel = addons.getChannel();

function MyDocsContainer(props: ComponentProps<typeof DocsContainer>) {
  const [isDark, setDark] = useState(localStorage.getItem('theme') === 'dark');

  useEffect(() => {
    channel.on(DARK_MODE_EVENT_NAME, setDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    return () => channel.removeListener(DARK_MODE_EVENT_NAME, setDark);
  }, [isDark, setDark]);

  return <DocsContainer {...props} theme={isDark ? themes.dark : themes.light} />;
}

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    darkMode: {
      dark: themes.dark,
      light: themes.light,
      current: 'dark',
      stylePreview: true,
    },
    docs: {
      container: MyDocsContainer,
    },
  },
};

export default preview;
