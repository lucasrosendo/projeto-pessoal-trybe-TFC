import * as express from 'express';
import loginController from '../controllers/longin.controller';
import validEmail from '../middlewares/validEmail';
import validPass from '../middlewares/validPass';
import validToken from '../middlewares/validToken';

const router = express();

router.get('/login/validate', validToken, loginController.validate);
router.post('/login', validEmail, validPass, loginController.login);

export default router;
