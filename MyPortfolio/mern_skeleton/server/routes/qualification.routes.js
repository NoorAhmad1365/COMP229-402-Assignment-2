import express from 'express';
import qualificationCtrl from '../controllers/qualification.controller.js';
import authCtrl from '../controllers/auth.controller.js';

const router = express.Router();

router.route('/api/qualifications')
  .get(qualificationCtrl.list)
  .post(authCtrl.requireSignin, qualificationCtrl.create);

router.route('/api/qualifications/:qualificationId')
  .get(qualificationCtrl.read)
  .put(authCtrl.requireSignin, authCtrl.hasAuthorization, qualificationCtrl.update)
  .delete(authCtrl.requireSignin, authCtrl.hasAuthorization, qualificationCtrl.remove);

router.param('qualificationId', qualificationCtrl.qualificationByID);

export default router;