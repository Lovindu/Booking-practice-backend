import express from "express";
import { createRoom, updateRoom, deleteRoom, getOneRoom, getAllRooms } from "../controllers/roomController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();


router.post("/:hotelid", verifyAdmin, createRoom);

// UPDATE
router.put("/:id", verifyAdmin, updateRoom);

// DELETE
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);

// GET
router.get("/:id", getOneRoom);

// GET ALL
router.get("/", getAllRooms);

export default router