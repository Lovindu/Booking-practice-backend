import express from "express";
import { createUser, updateUser, deleteUser, getOneUser, getAllUsers } from "../controllers/userController.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

router.get("/checkauthentication", verifyToken, (req, res, next) => {
    res.send("hello user, you are logged in");
})

router.get("/checkuser/:id", verifyUser, (req, res, next) => {
    res.send("hello user, you are logged in and you can delete your account");
})

router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
    res.send("hello admin, you are logged in and you can delete all account");
})

router.post("/", createUser);

// UPDATE
router.put("/:id",verifyUser, updateUser);

// DELETE
router.delete("/:id",verifyUser, deleteUser);

// GET
router.get("/:id", verifyUser, getOneUser);

// GET ALL
router.get("/",verifyAdmin, getAllUsers);

export default router;