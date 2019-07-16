import express from 'express';
import Users from '../controllers/userController'
import validateUser from '../middlewares/validateUser';

const router = express.Router();
router.post('/signup', validateUser.validateSignupFormData, Users.signup)

export default router;