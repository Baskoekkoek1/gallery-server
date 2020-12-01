const axios = require("axios");
const authMiddleware = require("../auth/middleware");
const apiToken = process.env.REACT_APP_ARTSY_TOKEN;
const { Router } = require("express");

const router = new Router();

router.get("/", async (req, res) => {
  try {
    const { apiArtworksUrl } = req.query;
    if (!apiArtworksUrl) {
      return res.status(400).send({ message: "Please provide link" });
    }
    const response = await axios.get(apiArtworksUrl, {
      headers: { "X-XAPP-Token": apiToken },
    });
    return res.status(200).send(response.data);
  } catch (error) {
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

module.exports = router;
