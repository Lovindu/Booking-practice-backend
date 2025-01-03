import express, { json } from "express";
import { countByCity, createHotel, deleteHotel, getAllHotels, getOneHotel, updateHotel, countByType } from "../controllers/hotelController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// CREATE
router.post("/", verifyAdmin, createHotel);

// UPDATE
router.put("/updatehotel/:id", verifyAdmin, updateHotel);

// DELETE
router.delete("/deletehotel/:id",verifyAdmin, deleteHotel);

// GET
router.get("/findonehotel/:id", getOneHotel);

// GET ALL
router.get("/getall", getAllHotels);

router.get("/countbytype", countByType);
router.get("/countbycity", countByCity)


export default router;