const mongoose = require("mongoose");
const passwordHash = require("password-hash");
const jwt = require("jwt-simple");
const config = require("../config/config");

const userShema = mongoose.Schema(
  {
    email: {
      type: String,
      lowerCase: true,
      trim: true,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: { createAt: "created-at" },
  }
);

userShema.methods = {
  authenticate: function (password) {
    return passwordHash.verify(password, this.password);
  },
  getToken: function () {
    return jwt.encode(this, config.secret);
  },
};

module.exports = mongoose.model("User", userShema);
