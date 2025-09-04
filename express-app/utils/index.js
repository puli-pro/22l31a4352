const validUrl = require('valid-url');

const isValidUrl = (url) => {
  return validUrl.isUri(url);
};

module.exports = isValidUrl;
