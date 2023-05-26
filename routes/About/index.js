const express = require('express');
const { about } = require('../../controllers/About');
const router = express();

// Registering routes
router.get('/', about);

module.exports = router;
