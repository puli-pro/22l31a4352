const ShortUrl = require('../models/shortUrl');

exports.getAllUrls = async (req, res) => {
  try {
    const urls = await ShortUrl.find();
    res.json(urls);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createShortUrl = async (req, res) => {
  const { fullUrl } = req.body;

  try {
    const newShortUrl = new ShortUrl({ full: fullUrl });
    await newShortUrl.save();
    res.status(201).json(newShortUrl);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
