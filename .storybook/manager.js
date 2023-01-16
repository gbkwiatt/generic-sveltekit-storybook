import { themes } from '@storybook/theming';
import { addons } from '@storybook/addons';

addons.setConfig({
    isFullscreen: false,
    showNav: true,
    showPanel: true,
    panelPosition: 'bottom',
    enableShortcuts: true,
    showToolbar: true,
    theme: themes.light,
    selectedPanel: undefined,
    initialActive: 'sidebar',
    sidebar: {
        showRoots: true,
        collapsedRoots: ['other'],
    },
    toolbar: {
        title: { hidden: false },
        zoom: { hidden: false },
        eject: { hidden: false },
        copy: { hidden: false },
        fullscreen: { hidden: false },
    },
});
