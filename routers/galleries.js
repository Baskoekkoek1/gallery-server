const axios = require("axios");
const { Router } = require("express");

const Gallery = require("../models").gallery;

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const galleries = await Gallery.findAll();
    res.json({ galleries });
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const thisGallery = await Gallery.findByPk(id);
    res.json({ thisGallery });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
