import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: 'Project title is required',
    trim: true
  },
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
  completion: { 
    type: Date, 
    required: 'Completion date is required'
  },
  description: { 
    type: String, 
    required: 'Project description is required',
    trim: true,
    minlength: [10, 'Description must be at least 10 characters long']
  },
  created: {
    type: Date,
    default: Date.now
  },
  updated: {
    type: Date,
    default: Date.now
  }
});

const Project = mongoose.model('Project', projectSchema);
export default Project;
