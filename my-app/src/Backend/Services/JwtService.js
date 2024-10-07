const express = require("express");
const JWT = require("jsonwebtoken");
const secretKey = "1234$1234uydsgfudshjdsgwg$1234$1234$1234$123";

async function GenerateToken(user) {
  return JWT.sign(user, secretKey);
}

module.exports = {
  GenerateToken,
};
