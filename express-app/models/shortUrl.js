const mongoose = require('mongoose');

const shortUrlSchema = new mongoose.Schema({
  full: {
    type: String,
    required: true
  },
  short: {
    type: String,
    required: true,
    default: function () {
      return Math.random().toString(36).substring(2, 8);
    }
  },
  clicks: {
    type: Number,
    required: true,
    default: 0
  }
});

module.exports = mongoose.model('ShortUrl', shortUrlSchema);
