import express from "express";
import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  UpdateUserProfile,
  getUsers,
  DeleteUser,
  getUserById,
  updateUser,
} from "../controllers/userController.js";
import { protect, admin } from "../middleware/authMiddleware.js";
const router = express.Router();

router.route("/").post(registerUser).get(protect, admin, getUsers);
router.post("/logout", logoutUser);
router.post("/login", authUser);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, UpdateUserProfile);
router
  .route("/:id")
  .delete(protect, admin, DeleteUser)
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUser);

export default router;
