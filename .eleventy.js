const path = require('path');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/_assets/normalize.css');
  eleventyConfig.addPassthroughCopy('src/_assets/styles.css');

  // Collection "uebungen"
  eleventyConfig.addCollection('uebungen', function (collectionApi) {
    return collectionApi
      .getFilteredByGlob('src/uebungen/*.md')
      .sort((a, b) => a.inputPath.localeCompare(b.inputPath));
  });

  eleventyConfig.addFilter('relativeUrl', (url, page) => {
    if (!url.startsWith('/')) {
      throw new Error('URL is already relative');
    }
    const relativeUrl = path.relative(page.filePathStem, url);

    if (page.filePathStem === '/index') {
      return path.relative('..', relativeUrl);
    } else {
      return relativeUrl;
    }
  });
};
