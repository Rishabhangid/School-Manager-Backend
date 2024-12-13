// backend/models/School.js
const mongoose = require('mongoose');

const SchoolSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  contact: { type: String, required: true },
  image: { type: String, required: true },
  email_id: { type: String, required: true },
});

module.exports = mongoose.model('School', SchoolSchema);
