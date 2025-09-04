const express = require('express');
const router = express.Router();
const urlController = require('../controllers/urlController');

router.get('/', urlController.getAllUrls);
router.post('/', urlController.createShortUrl);

module.exports = router;
