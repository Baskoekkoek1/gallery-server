const axios = require("axios");
const apiToken = process.env.REACT_APP_ARTSY_TOKEN;
const { Router } = require("express");

const router = new Router();

router.get("/", async (req, res) => {
  try {
    const { searchTerm } = req.query;
    console.log(req.query);
    if (!searchTerm) {
      return res
        .status(400)
        .send({ message: "Please provide the name of an artist" });
    }
    const response = await axios.get(
      `https://api.artsy.net/api/search?q=${searchTerm}`,
      {
        headers: { "X-XAPP-Token": apiToken },
      }
    );
    console.log("response", response.data);

    return res.status(200).send(response.data);
  } catch (error) {
    console.log(error);
    // console.log("token", apiToken);
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

module.exports = router;
