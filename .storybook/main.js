module.exports = {
    stories: ['../src/components/**/stories.tsx'],
    addons: ['@storybook/addon-essentials', '@storybook/addon-knobs','@storybook/addon-actions', '@storybook/addon-links',],
    webpackFinal: (config) => {
      config.resolve.modules.push(`${process.cwd()}/src`)
      return config
    }
  }