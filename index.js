const express = require("express");
const { PORT } = require("./config/constants");
const corsMiddleWare = require("cors");
const authRouter = require("./routers/auth");
const artistRouter = require("./routers/artists");
const galleryRouter = require("./routers/galleries");
const artworksRouter = require("./routers/artworks");

const app = express();

const bodyParserMiddleware = express.json();
app.use(bodyParserMiddleware);

app.use(corsMiddleWare());

if (process.env.DELAY) {
  app.use((req, res, next) => {
    setTimeout(() => next(), parseInt(process.env.DELAY));
  });
}

app.use("/artists", artistRouter);
app.use("/galleries", galleryRouter);
app.use("/artworks", artworksRouter);
app.use("/", authRouter);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
