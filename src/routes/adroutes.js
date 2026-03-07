const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const adController = require("../controllers/adcontroller");

// upload config
const upload = multer({
  dest: "generated/assets/"
});

// generate ad
router.post("/generate", upload.single("logo"), adController.generateAd);

// get ads
router.get("/", adController.getAds);

// delete ad
router.delete("/:id", adController.deleteAd);

module.exports = router;