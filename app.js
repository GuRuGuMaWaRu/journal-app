const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const path = require("path");

// Set environament variables
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: "process.env" });
}

// Connect to database
mongoose.connect(process.env.MONGODB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

mongoose.set("useCreateIndex", true);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", () => console.log("Connection to database is established"));

const app = express();

// Set up middleware
app.use(morgan("dev"));
app.use(express.json());

// Set up routes
app.use("/api/user", require("./routes/user"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/note", require("./routes/notes"));

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

// Handle 404 errors
app.use((req, res) => {
  res.status(404).json({ msg: "Not found!" });
});
// Handle other errors
app.use((err, req, res) => {
  console.log("Error:", err.message);
  res
    .status(err.status || 500)
    .json({ msg: err.message || "There was an error" });
});

const PORT = process.env.PORT || 6000;

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));
