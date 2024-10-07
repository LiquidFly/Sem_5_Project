const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
    unique: true,
  },
  PhoneNumber: {
    type: Number,
    required: true,
  },
  Password: {
    type: String,
    required: true,
  },
  Role: {
    type: String,
    required: true,
  },
});

const userModel = mongoose.model("userSchema", userSchema);
module.exports = userModel;
