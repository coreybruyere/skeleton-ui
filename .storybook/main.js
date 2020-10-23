module.exports = {
  stories: [
    "../packages/**/src/components/**/*.stories.mdx",
    "../packages/**/src/docs/*.stories.mdx",
  ],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  typescript: {
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false,
      },
      propFilter: (prop) => {
        if (prop.parent) {
          return (
            !prop.parent.fileName.includes("react") &&
            !prop.parent.fileName.includes("styled-components")
          );
        }

        return true;
      },
    },
  },
};
