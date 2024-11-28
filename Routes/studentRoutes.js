const express = require("express");
const router = new express.Router();

const studentController = require("../Controllers/studentController");

router.get("/", studentController.getAllStudents);
router.get("/:id", studentController.getStudentByID);
router.post("/", studentController.addNewStudent);
router.delete("/:id", studentController.deleteStudent);

module.exports = router;
