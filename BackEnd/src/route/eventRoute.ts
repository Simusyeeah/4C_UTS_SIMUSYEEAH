import express from "express";

import {
  getEvents,
  saveEvents,
  showEvent,
  updateEvent,
  deleteEvent,
} from "../controllers/eventController.js";

const router = express.Router();

router.get("/", getEvents);
router.get("/:id", showEvent);
router.post("/", saveEvents);
router.put("/:id", updateEvent);
router.delete("/:id", deleteEvent);

export default router;