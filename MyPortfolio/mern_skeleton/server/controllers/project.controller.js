import Project from '../models/project.model.js';
import extend from 'lodash/extend.js';
import errorHandler from './error.controller.js';

// Create a new project
const create = async (req, res) => {
  const project = new Project(req.body);
  try {
    await project.save();
    return res.status(200).json({
      message: "Project successfully created!",
      project: project
    });
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    });
  }
};

// List all projects
const list = async (req, res) => {
  try {
    const projects = await Project.find()
      .select('title firstname lastname email completion description created');
    res.json(projects);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    });
  }
};

// Find project by ID middleware
const projectByID = async (req, res, next, id) => {
  try {
    let project = await Project.findById(id);
    if (!project)
      return res.status('400').json({
        error: "Project not found"
      });
    req.project = project;
    next();
  } catch (err) {
    return res.status('400').json({
      error: "Could not retrieve project"
    });
  }
};

// Read a single project
const read = (req, res) => {
  return res.json(req.project);
};

// Update a project
const update = async (req, res) => {
  try {
    let project = req.project;
    project = extend(project, req.body);
    project.updated = Date.now();
    await project.save();
    res.json(project);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    });
  }
};

// Delete a project
const remove = async (req, res) => {
  try {
    let project = req.project;
    let deletedProject = await project.remove();
    res.json(deletedProject);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    });
  }
};

export default { create, list, projectByID, read, update, remove };