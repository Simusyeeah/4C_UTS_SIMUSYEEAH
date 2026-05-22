import express from "express";

import {
  getPembicara,
  savePembicara,
  showPembicara,
  updatePembicara,
  deletePembicara,
} from "../controllers/pembicaraController.js";

const router = express.Router();

router.get("/", getPembicara);
router.get("/:id", showPembicara);
router.post("/", savePembicara);
router.put("/:id", updatePembicara);
router.delete("/:id", deletePembicara);

export default router;