const express = require("express");
const cors = require("cors"); // Import CORS
const App = express();
const PORT = 3000;
const { ConnectWithDB } = require("./ConnectionDB/connectionDB.js");
const userRoutes = require("./Routes/userRoutes.js");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");

//! DotEnv configuration
dotenv.config();

//! Middlewares
App.use(
  cors({
    origin: "http://localhost:3001", // Replace with your frontend URL
    methods: ["GET", "POST","DELETE"], // Allowed methods
    credentials: true, // Allow credentials (cookies, authorization headers)
  })
);
App.use(express.json());
App.use(express.urlencoded({ extended: true }));
App.use(cookieParser());

// ! DB Connection
ConnectWithDB(process.env.DATABASE_URL);

//! Routes
App.use("/API/users", userRoutes);

//! Endpoint
App.get("/", function (req, res) {
  return res.send("Hello World!");
});

App.listen(PORT, () => {
  console.log("App listening on port " + PORT);
});
