module.exports = {
  stories: [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-links',
    '@storybook/addon-controls',
    '@storybook/addon-essentials'
  ],
  core: {
    builder: 'storybook-builder-vite'
  }
}