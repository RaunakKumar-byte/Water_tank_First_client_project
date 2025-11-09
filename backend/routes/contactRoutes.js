// routes/contactRoutes.js
import express from 'express';
import { submitContact, getContacts } from '../controllers/contactController.js';

const router = express.Router();

router.post('/', submitContact);

// Optional admin route to view messages
router.get('/', getContacts);

export default router;
