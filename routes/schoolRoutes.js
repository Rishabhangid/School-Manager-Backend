// backend/routes/schoolRoutes.js
const express = require('express');
const multer = require('multer');
const School = require('../models/School');
const router = express.Router();

// Image upload configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, './uploads'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname),
});
const upload = multer({ storage });

// Add school
router.post('/add', upload.single('image'), async (req, res) => {
  try {
    const { name, address, city, state, contact, email_id } = req.body;
    const image = req.file.filename;
    const school = new School({ name, address, city, state, contact, email_id, image });
    await school.save();
    res.status(201).json({ message: 'School added successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get schools
router.get('/get', async (req, res) => {
  try {
    const schools = await School.find({});
    res.status(200).json(schools);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
