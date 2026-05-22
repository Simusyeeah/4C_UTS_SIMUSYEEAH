import express from "express";

import {
  getCategory,
  saveCategory,
  showCategory,
  updateCategory,
  deleteCategory,
} from "../controllers/categoryController.js";

const router = express.Router();

// GET ALL
router.get("/", getCategory);

// GET DETAIL
router.get("/:id", showCategory);

// CREATE
router.post("/", saveCategory);

// UPDATE
router.put("/:id", updateCategory);

// DELETE
router.delete("/:id", deleteCategory);

export default router;