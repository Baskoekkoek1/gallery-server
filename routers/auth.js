const bcrypt = require("bcrypt");
const { Router } = require("express");
const { toJWT } = require("../auth/jwt");
const User = require("../models/").user;
const authMiddleware = require("../auth/middleware");
const SALT_ROUNDS = require("../config/constants").SALT_ROUNDS;
const Gallery = require("../models").gallery;
const Painting = require("../models").painting;

const router = new Router();

router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .send({ message: "Please provide both email and password" });
    }

    const user = await User.findOne({
      where: { email },
      include: {
        model: Gallery,
        include: [Painting],
      },
    });

    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(400).send({ message: "Email or password incorrect" });
    }
    delete user.dataValues["password"];
    const token = toJWT({ userId: user.id });
    return res.status(200).send({ token, ...user.dataValues });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Oops, something went wrong!" });
  }
});

router.post("/signup", async (req, res) => {
  const { email, password, name } = req.body;
  if (!email || !password || !name) {
    return res.status(400).send("Please provide an email, password and a name");
  }
  console.log("TEST", password, SALT_ROUNDS);
  try {
    const newUser = await User.create({
      email,
      password: bcrypt.hashSync(password, SALT_ROUNDS),
      name,
    });

    delete newUser.dataValues["password"];

    const token = toJWT({ userId: newUser.id });

    const newGallery = await Gallery.create({
      title: `${newUser.name}'s gallery`,
      description: `This gallery belongs to: ${newUser.name}`,
    });
    res.status(201).json({
      token,
      ...newUser.dataValues,
      gallery: {
        ...newGallery.dataValues,
        stories: [],
      },
    });
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      return res
        .status(400)
        .send({ message: "There is an existing account with this email" });
    }
    console.log(error);
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

router.get("/me", authMiddleware, async (req, res) => {
  const gallery = await Gallery.findOne({
    where: { userId: req.user.id },
    include: [Painting],
  });
  delete req.user.dataValues["password"];
  res.status(200).send({ ...req.user.dataValues, gallery });
});

module.exports = router;
