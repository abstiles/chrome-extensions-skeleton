const loaderUtils = require('loader-utils');
const fs = require('fs');

module.exports = function(source) {
  const pkg = JSON.parse(fs.readFileSync('./package.json'));
  const merged = Object.assign({}, JSON.parse(source), {
    'name': pkg.name,
    'description': pkg.description,
    'version': pkg.version,
    'author': pkg.author,
    'homepage_url': pkg.homepage,
  });
  const mergedJson = JSON.stringify(merged);
  this.emitFile('manifest.json', mergedJson);
  return mergedJson;
};
