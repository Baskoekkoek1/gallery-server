const axios = require("axios");
const authMiddleware = require("../auth/middleware");
const apiToken = process.env.REACT_APP_ARTSY_TOKEN;
const { Router } = require("express");

const Gallery = require("../models").gallery;
const Painting = require("../models").painting;
const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const galleries = await Gallery.findAll({ include: [Painting] });
    res.json({ galleries });
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const thisGallery = await Gallery.findByPk(id, { include: [Painting] });
    res.json({ thisGallery });
  } catch (error) {
    next(error);
  }
});

// router.get("/:id/artwork", async (req, res, next) => {
//   try {
//     const { apiArtworkUrl } = req.query;
//     if (!apiArtworkUrl) {
//       return res.status(400).send({ message: "Please provide link" });
//     }
//     const response = await axios.get(apiArtworkUrl, {
//       headers: { "X-XAPP-Token": apiToken },
//     });
//     return res.status(200).send(response.data);
//   } catch (error) {
//     next(error);
//   }
// });

router.post("/:id/add-artwork", authMiddleware, async (req, res, next) => {
  try {
    const gallery = await Gallery.findByPk(req.params.id);
    if (gallery === null) {
      return res.status(400).send("This gallery does not exist");
    } else if (gallery.userId !== req.user.id) {
      return res
        .status(400)
        .send("You are not authorized to add to this gallery");
    } else {
      const { apiID } = req.body;
      if (!apiID) {
        return res.status(400).send({ message: "Please provide artwork ID" });
      } else {
        const painting = await Painting.create({
          apiID,
          galleryId: gallery.id,
        });
        return res.status(200).send({ message: "Painting added", painting });
      }
    }
  } catch (error) {
    next(error);
  }
});

router.delete("/:paintingId", async (req, res, next) => {
  try {
    const { paintingId } = req.params;
    const thisPainting = await Painting.findByPk(paintingId);
    if (!thisPainting) {
      res.status(404).send("This painting is not found");
    } else {
      await thisPainting.destroy();
      res.json({ message: "Painting deleted", thisPainting });
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
