import { VanillaExtractPlugin } from '@vanilla-extract/webpack-plugin';

import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
    stories: ['../components/**/*.stories.@(js|jsx|ts|tsx)', '../app/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        '@storybook/addon-onboarding',
        '@storybook/addon-essentials',
        '@chromatic-com/storybook',
        '@storybook/addon-interactions',
    ],
    framework: {
        name: '@storybook/nextjs',
        options: {},
    },
    staticDirs: ['../public'],
    webpackFinal: async (config) => {
        config.plugins = [...(config.plugins || []), new VanillaExtractPlugin()];
        return config;
    },
};
export default config;
