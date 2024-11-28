const mongoose = require("mongoose");
var DB_URL = "mongodb://localhost:27017/class";

mongoose.connect(DB_URL, { useNewUrlParser: true });
// mongoose.createConnection(DB_URL, { useNewUrlParser: true });

let courseSchema = new mongoose.Schema({
  courseName: { type: String, pattern: "^[a-zA-Z]+$", required: true },
  grade: {
    type: String,
    enum: ["Good", "Very Good", "Excellent"],
    required: true,
  },
});

module.exports = mongoose.model("courses", courseSchema);
