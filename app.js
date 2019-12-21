const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

// Set environament variables
require("dotenv").config({ path: "process.env" });

// Connect to database
mongoose.connect(process.env.MONGODB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", () => console.log("Connection with database is established"));

const app = express();

// Set up middleware
app.use(morgan("dev"));
app.use(express.json());

// Set up routes
// app.use("/api/user", require("./routes/user"));
// app.use("/api/auth", require("./routes/auth"));
app.use("/api/note", require("./routes/notes"));

const PORT = process.env.PORT || 6000;

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));
