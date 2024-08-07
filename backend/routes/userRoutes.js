import express from'express'
const router = express.Router();
import {
    authUser,
    registerUser,
    logoutUser,
    getuserProfile,
    updateuserProfile,
    getUsers,
    deleteUser,
    getUserByID,
    updateUser,
} from '../controllers/userController.js';
import {protect, admin} from '../middleware/authMiddleware.js';

router.route('/').post(registerUser).get(protect, admin, getUsers);
router.post('/logout', logoutUser);
router.post('/auth', authUser);
router.route('/profile').get(protect, getuserProfile).put(protect, updateuserProfile);
router.route('/:id').delete(protect, admin, deleteUser).get(protect, admin, getUserByID).put(protect, admin, updateUser);

export default router;
