// routes/contactRoutes.js
const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

router.post('/', contactController.submitContact);

// Optional admin route to view messages
router.get('/', contactController.getContacts);

module.exports = router;
