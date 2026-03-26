export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addWatchTarget("src/css/");

  return {
    dir: {
      input: "src",
      output: "/var/www/433.mx",  // ← aquí
      includes: "_includes",
      data: "_data",
    },
    templateFormats: ["njk", "html", "md"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
}
