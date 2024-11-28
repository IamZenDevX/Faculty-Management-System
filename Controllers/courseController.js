const courseModel = require("../Models/courseModel");

var getAllCourses = async (req, res) => {
  try {
    let allCourses = await courseModel.find();
    res.json(allCourses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

var getCourseByID = async (req, res) => {
  try {
    let course = await courseModel.findById(req.params.id);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }
    res.json(course);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

var addNewCourse = async (req, res) => {
  try {
    var newCourse = new courseModel(req.body);
    await newCourse.save();
    res.json(newCourse);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

var deleteCourse = async (req, res) => {
  try {
    await courseModel.findByIdAndDelete(req.params.id);
    res.json({ message: "Course Deleted Successfully! ✅" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAllCourses, getCourseByID, addNewCourse, deleteCourse };
