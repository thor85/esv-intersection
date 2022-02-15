module.exports = {
  stories: ['../.storybook/src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-docs', '@storybook/addon-storysource', 'storybook-dark-mode'],
  staticDirs: ['./src/esv-intersection-data', './src/esv-intersection-data-troll'],
};
