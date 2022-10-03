const express = require("express");
const tourController = require("./../controllers/tourController");
const router = express.Router();
const fs = require("fs");

const tourRouter = require("../routes/touroutes");
const UserRouter = require("../routes/useroutes");

router.route("/").get(tourController.allTours).post(tourController.createTour); //get and post routes of URL
router.route("/:id").get(tourController.getTours).patch(tourController.update);
//patch is simply used to add more and more properties in an existing object
//while put is used to add the whole new object

module.exports = router;
