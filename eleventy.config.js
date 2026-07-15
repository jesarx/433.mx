import { execSync } from "node:child_process";

export default function (eleventyConfig) {
  // Compila Tailwind antes de cada build (también en --serve/--watch).
  // El resultado (src/css/tailwind.css) está en .gitignore y se copia a
  // _site/css/ por el passthrough de src/css.
  eleventyConfig.on("eleventy.before", () => {
    execSync(
      "npx tailwindcss -c tailwind.config.js -i tailwind.source.css -o src/css/tailwind.css --minify",
      { stdio: "inherit" }
    );
  });
  eleventyConfig.watchIgnores.add("src/css/tailwind.css");

  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/docs");
  eleventyConfig.addWatchTarget("src/css/");

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    templateFormats: ["njk", "html", "md"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
}
