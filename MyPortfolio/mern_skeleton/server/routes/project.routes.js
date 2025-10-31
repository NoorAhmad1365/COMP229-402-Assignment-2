import express from 'express';
import projectCtrl from '../controllers/project.controller.js';
import authCtrl from '../controllers/auth.controller.js';

const router = express.Router();

router.route('/api/projects')
  .get(projectCtrl.list)
  .post(authCtrl.requireSignin, projectCtrl.create);

router.route('/api/projects/:projectId')
  .get(projectCtrl.read)
  .put(authCtrl.requireSignin, authCtrl.hasAuthorization, projectCtrl.update)
  .delete(authCtrl.requireSignin, authCtrl.hasAuthorization, projectCtrl.remove);

router.param('projectId', projectCtrl.projectByID);

export default router;