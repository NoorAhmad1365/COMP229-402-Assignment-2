import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  firstname: { 
    type: String, 
    required: 'First name is required',
    trim: true
  },
  lastname: { 
    type: String, 
    required: 'Last name is required',
    trim: true
  },
  email: { 
    type: String, 
    required: 'Email is required',
    trim: true,
    match: [/.+\@.+\..+/, 'Please fill a valid email address']
  },
  message: {
    type: String,
    trim: true
  },
  created: {
    type: Date,
    default: Date.now
  }
});

const Contact = mongoose.model('Contact', contactSchema);

export default Contact;
