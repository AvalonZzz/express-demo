const mongoose = require("mongoose");
const baseModel = require("./baseModel");
const md5 = require("../util/md5");
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    set: (pwd) => {
      md5(pwd);
    },
  },
  phone: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: null,
  },
  ...baseModel,
});

module.exports = userSchema;
