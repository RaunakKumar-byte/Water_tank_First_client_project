// controllers/contactController.js
import Contact from '../models/Contact.js';

export const submitContact = async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Please fill all required fields.' });
    }

    const contact = new Contact({ 
      name, 
      email, 
      phone: phone || '', 
      subject: subject || '', 
      message 
    });
    await contact.save();

    // Since no backend email configured, just return success
    return res.status(201).json({ message: 'Contact message received.' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Server error' });
  }
};

export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};
