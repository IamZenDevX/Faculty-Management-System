const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 1312;
const studentRouter = require("./Routes/studentRoutes");
const courseRouter = require("./Routes/courseRoutes");

const logging = require("./Middleware/logging");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/", logging);
app.use("/api/students", studentRouter);
app.use("/api/courses", courseRouter);


const dbURI = `mongodb://localhost:27017/`;

mongoose
.connect(dbURI)
.then(() => {
  app.listen(3000);
  console.log("MongoDB connected...");
})
.catch((err) => console.log(err));
app.use(ErrorHandler)
