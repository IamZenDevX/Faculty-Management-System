const express = require("express");
const router = new express.Router();

const courseController = require("../Controllers/courseController");

router.get("/", courseController.getAllCourses);
router.get("/:id", courseController.getCourseByID);
router.post("/", courseController.addNewCourse);
router.delete("/:id", courseController.deleteCourse);

module.exports = router;
