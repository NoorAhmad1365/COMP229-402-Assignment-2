import Qualification from '../models/qualification.model.js';
import extend from 'lodash/extend.js';
import errorHandler from './error.controller.js';

// Create a new qualification
const create = async (req, res) => {
  const qualification = new Qualification(req.body);
  try {
    await qualification.save();
    return res.status(200).json({
      message: "Qualification successfully created!",
      qualification: qualification
    });
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    });
  }
};

// List all qualifications
const list = async (req, res) => {
  try {
    const qualifications = await Qualification.find()
      .select('title firstname lastname email completion description created');
    res.json(qualifications);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    });
  }
};

// Find qualification by ID middleware
const qualificationByID = async (req, res, next, id) => {
  try {
    let qualification = await Qualification.findById(id);
    if (!qualification)
      return res.status('400').json({
        error: "Qualification not found"
      });
    req.qualification = qualification;
    next();
  } catch (err) {
    return res.status('400').json({
      error: "Could not retrieve qualification"
    });
  }
};

// Read a single qualification
const read = (req, res) => {
  return res.json(req.qualification);
};

// Update a qualification
const update = async (req, res) => {
  try {
    let qualification = req.qualification;
    qualification = extend(qualification, req.body);
    qualification.updated = Date.now();
    await qualification.save();
    res.json(qualification);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    });
  }
};

// Delete a qualification
const remove = async (req, res) => {
  try {
    let qualification = req.qualification;
    let deletedQualification = await qualification.remove();
    res.json(deletedQualification);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    });
  }
};

export default { create, list, qualificationByID, read, update, remove };