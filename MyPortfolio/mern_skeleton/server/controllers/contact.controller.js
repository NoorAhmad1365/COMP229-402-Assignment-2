import Contact from '../models/contact.model.js';
import extend from 'lodash/extend.js';
import errorHandler from './error.controller.js';

// Create a new contact
const create = async (req, res) => {
  const contact = new Contact(req.body);
  try {
    await contact.save();
    return res.status(200).json({
      message: "Contact successfully created!",
      contact: contact
    });
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    });
  }
};

// List all contacts
const list = async (req, res) => {
  try {
    const contacts = await Contact.find().select('firstname lastname email created');
    res.json(contacts);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    });
  }
};

// Find contact by ID middleware
const contactByID = async (req, res, next, id) => {
  try {
    let contact = await Contact.findById(id);
    if (!contact)
      return res.status('400').json({
        error: "Contact not found"
      });
    req.contact = contact;
    next();
  } catch (err) {
    return res.status('400').json({
      error: "Could not retrieve contact"
    });
  }
};

// Read a single contact
const read = (req, res) => {
  return res.json(req.contact);
};

// Update a contact
const update = async (req, res) => {
  try {
    let contact = req.contact;
    contact = extend(contact, req.body);
    contact.updated = Date.now();
    await contact.save();
    res.json(contact);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    });
  }
};

// Delete a contact
const remove = async (req, res) => {
  try {
    let contact = req.contact;
    let deletedContact = await contact.remove();
    res.json(deletedContact);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    });
  }
};

export default { create, list, contactByID, read, update, remove };