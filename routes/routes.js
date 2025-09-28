import express from 'express';
import axios from 'axios';
import { UserGetController, UserPostController } from '../controllers/controller.js';

const router = express.Router();
const UserGetControllerInstance = new UserGetController();
const UserPostControllerInstance = new UserPostController();

// Middleware verify captcha
async function verifyCaptcha(req, res, next) {
    const captchaToken = req.body["g-recaptcha-response"];

    if (!captchaToken) {
        return res.status(400).send("Captcha is required");
    }

    try {
        const verifyURL = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captchaToken}`;
        const response = await axios.post(verifyURL);

        if (!response.data.success) {
            return res.status(400).send("Invalid captcha");
        }

        // OK → cho đi tiếp vào controller
        next();
    } catch (err) {
        console.error("Captcha verification failed:", err);
        res.status(500).send("Captcha verification failed");
    }
}

// ------------------- GET -------------------
router.get('/signup', UserGetControllerInstance.getSignUpPage);
router.get('/signin', UserGetControllerInstance.getSignInPage);
router.get('/homepage', UserGetControllerInstance.homePage);
router.get('/signout', UserGetControllerInstance.logoutUser);
router.get('/forgot-password', UserGetControllerInstance.getForgotPassword);
router.get('/change-password', UserGetControllerInstance.getChangePassword);

// ------------------- POST -------------------
// 👇 Thêm verifyCaptcha trước createUser
router.post('/signup', verifyCaptcha, UserPostControllerInstance.createUser);
router.post('/signin', UserPostControllerInstance.signInUser);
router.post('/forgot-password', UserPostControllerInstance.forgotPassword);
router.post('/change-password', UserPostControllerInstance.changePassword);

export default router;