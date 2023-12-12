const express = require("express");
const app = express();
const port = 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/timer");

const userRoute = require("./routes/userRoute");
app.use("/", userRoute);

const timerRoute = require("./routes/timerRoute");
app.use("/", timerRoute);

app.listen(port, () => {
  console.log(`F1StartTimer app listening on port ${port}`);
});
