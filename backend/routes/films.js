const express = require("express");

const { getAll, get, add, replace, remove } = require("../data/films");
const {
  isValidText,
  isValidDate,
  isValidImageUrl,
} = require("../util/validation");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const films = await getAll();
    res.json({ films: films });
  } catch (error) {
    // #nextแล้วไปไหน เดี๋ยวมาหาคำตอบ55
    next(error);
  }
});

router.get("/:filmId", async (req, res, next) => {
  try {
    const film = await get(req.params.filmId);
    res.json(film);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  const data = req.body;

  let errors = {};
  if (!isValidText(data.title)) {
    errors.title = "Invalid title";
  }

  if (!isValidText(data.description)) {
    errors.description = "Invalid description";
  }

  if (!isValidDate(data.date)) {
    errors.date = "Invalid date";
  }

  if (!isValidImageUrl(data.image)) {
    errors.image = "Invalid image";
  }

  if (Object.keys(errors).length > 0) {
    return res.status(422).json({
      message: "Adding the film failed due to validation errors",
      errors,
    });
  }

  try {
    await add(data);
    res.status(201).json({
      message: "Film saved!",
      film: data,
    });
  } catch (error) {
    next(error);
  }
});

router.patch("/:filmId", async (req, res, next) => {
  const data = req.body;

  let errors = {};
  if (!isValidText(data.title)) {
    errors.title = "Invalid title";
  }

  if (!isValidText(data.description)) {
    errors.description = "Invalid description";
  }

  if (!isValidDate(data.date)) {
    errors.date = "Invalid date";
  }

  if (!isValidImageUrl(data.image)) {
    errors.image = "Invalid image";
  }

  if (Object.keys(errors).length > 0) {
    return res.status(422).json({
      message: "Updating the film failed due to validation errors",
      errors,
    });
  }

  try {
    await replace(req.params.filmId, data);
    res.json({
      message: "Film updated :)",
    });
  } catch (error) {
    next(error);
  }
});

router.delete("/:filmId", async (req, res, next) => {
  try {
    await remove(req.params.filmId);
    res.json({ message: "Film deleted" });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
