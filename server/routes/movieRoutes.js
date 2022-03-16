const express = require("express");
const movieController = require("../controllers/movieController");

const router = express.Router();

router.get("/movies", movieController.getMovieList);
router.get("/movies/:id", movieController.getMovieById);

module.exports = router;
