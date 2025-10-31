import express from 'express';
import contactCtrl from '../controllers/contact.controller.js';
import authCtrl from '../controllers/auth.controller.js';

const router = express.Router();

router.route('/api/contacts')
    .get(contactCtrl.list)
    .post(contactCtrl.create);

router.route('/api/contacts/:contactId')
    .get(contactCtrl.read)
    //.put(contactCtrl.update)
    //.delete(contactCtrl.remove);
    .put(authCtrl.requireSignin, authCtrl.hasAuthorization, contactCtrl.update)
    .delete(authCtrl.requireSignin, authCtrl.hasAuthorization, contactCtrl.remove);

router.param('contactId', contactCtrl.contactByID);

export default router;