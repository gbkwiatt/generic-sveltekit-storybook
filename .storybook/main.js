import { mergeConfig } from 'vite';

const config = {
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        '@storybook/addon-svelte-csf'
    ],
    core: { builder: '@storybook/builder-vite' },
    framework: {
        name: '@storybook/sveltekit',
        options: {},
    },
    stories: [
        '../src/**/**/*.stories.@(js|jsx|ts|tsx|svelte|md|mdx)',
    ],
    viteFinal(config) {
        const merged = mergeConfig(config, {
            server: {
                fs: {
                    allow: ['../../'],
                },
            },
        });

        return merged;
    },
};

export default config;
