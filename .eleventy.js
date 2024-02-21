const path = require('path');

function sortByName(a, b) {
  return a.inputPath.localeCompare(b.inputPath);
}

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/_assets/normalize.css');
  eleventyConfig.addPassthroughCopy('src/_assets/styles.css');
  eleventyConfig.addPassthroughCopy('src/_assets/images/');

  // Collection "uebungen"
  eleventyConfig.addCollection('uebungen', function (collectionApi) {
    return collectionApi
      .getFilteredByGlob('src/uebungen/*.md')
      .sort(sortByName);
  });

  // Collection "tests"
  eleventyConfig.addCollection('tests', function (collectionApi) {
    return collectionApi
      .getFilteredByGlob('src/tests/*.md')
      .sort(sortByName)
      .map((item) => {
        item.data.isTest = true;
        return item;
      });
  });

  // Ensure relative paths
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

  return {
    markdownTemplateEngine: 'njk',
  };
};
