const express = require("express");
const Router = express.Router();
const {
  RegisterUser,
  LoginUser,
  deleteCookie
} = require("../Controllers/userControllers.js");
const handleAuthentication = require("../Middlewares/handleAuthentication.js");

//! Router End Points
Router.post("/Register", RegisterUser);
Router.post("/Login", LoginUser);
Router.get("/Protected", handleAuthentication, () => {
  console.log("WELCOME USER");
});
Router.delete("/logout", deleteCookie); 

module.exports = Router;
