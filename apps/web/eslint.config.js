import baseConfig from '@repo/eslint-config/base';
import nextJsConfig from '@repo/eslint-config/nextjs';
import reactConfig from '@repo/eslint-config/react';

export default [...baseConfig, ...reactConfig, ...nextJsConfig];
