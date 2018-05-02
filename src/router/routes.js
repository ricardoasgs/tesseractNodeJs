import express from "express";
import {
  recognize
} from "../controllers/tesseract";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Ok");
  });

  router.post("/recognize", recognize);

  export default router;