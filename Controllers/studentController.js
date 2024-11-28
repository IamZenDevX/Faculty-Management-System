const studentModel = require("../Models/studentModel");

var getAllStudents = async (req, res) => {
  try {
    let allStudents = await studentModel.find();
    res.json(allStudents);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

var getStudentByID = async (req, res) => {
  try {
    let student = await studentModel.findById(req.params.id);
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.json(student);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

var addNewStudent = async (req, res) => {
  try {
    var newStudent = new studentModel(req.body);
    await newStudent.save();
    res.json(newStudent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

var deleteStudent = async (req, res) => {
  try {
    await studentModel.findByIdAndDelete(req.params.id);
    res.json({ message: "Student Deleted Successfully! ✅" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllStudents,
  getStudentByID,
  addNewStudent,
  deleteStudent,
};
