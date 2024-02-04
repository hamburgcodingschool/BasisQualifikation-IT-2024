module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/_assets/normalize.css');
  eleventyConfig.addPassthroughCopy('src/_assets/styles.css');

  // Collection "uebungen"
  eleventyConfig.addCollection('uebungen', function (collectionApi) {
    return collectionApi
      .getFilteredByGlob('src/uebungen/*.md')
      .sort((a, b) => a.inputPath.localeCompare(b.inputPath));
  });
};
