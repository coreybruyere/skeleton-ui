module.exports = {
  stories: [
    "../packages/**/src/components/**/*.stories.mdx",
    "../packages/**/src/docs/*.stories.mdx",
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
};
