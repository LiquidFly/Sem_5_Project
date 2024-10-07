const express = require("express");
const JWT = require("jsonwebtoken");

async function handleAuthentication(req, res, next) {
  // Fetch JWT Token from cookies and verify it

  const JWT_TOKEN = req.cookies.JWT_TOKEN;

  if (!JWT_TOKEN) {
    return res.status(400).json({
      status: false,
      Error: "No Cookies Found",
    });
  }

  const userData = JWT.verify(JWT_TOKEN, process.env.JWT_SECRET);

  if (!userData) {
    return res.status(400).json({
      status: false,
      Error: error.message,
    });
  } else {
    req.user = userData;
    next();
  }
}

module.exports = handleAuthentication;
