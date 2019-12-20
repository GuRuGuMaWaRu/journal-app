const express = require("express");
const morgan = require("morgan");

// Set environament variables
require("dotenv").config({ path: "process.env" });

const app = express();

// Set up middleware
app.use(morgan("dev"));

// Set up routes
app.use("/api/note", require("./routes/noteRoutes"));

const PORT = process.env.PORT || 6000;

app.listen(PORT, () => console.log(`Server is listening at port ${PORT}...`));
