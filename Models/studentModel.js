const mongoose = require("mongoose");
var DB_URL = "mongodb://localhost:27017/class";

mongoose.connect(DB_URL, { useNewUrlParser: true });

let studentSchema = new mongoose.Schema({
  name: { type: String, pattern: "^[a-zA-Z]+$", required: true },
  dept: { type: String, enum: ["SA", "OS", "AI"], required: true },
});

module.exports = mongoose.model("students", studentSchema);
