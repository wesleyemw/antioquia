import { I18nPlugin } from "@11ty/eleventy";

export default function (eleventyConfig) {
  eleventyConfig.addPlugin(I18nPlugin, {
    defaultLanguage: "en",
  });
}

export const config = {
  markdownTemplateEngine: "njk",
  htmlTemplateEngine: "njk",
  dataTemplateEngine: "njk",
  dir: {
    input: "src",
    output: "dist",
  },
};
