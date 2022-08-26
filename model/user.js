const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  first_name: { type: String},
  last_name: { type: String},
  email: { type: String, unique: true },
  mobile: { type: String},
  password: { type: String },
  roleId: { type: mongoose.Schema.Types.ObjectId, default: null},
  created: { type: mongoose.Schema.Types.Date },
  updated: { type: mongoose.Schema.Types.Date },
},{ versionKey: false });

module.exports = mongoose.model("user", userSchema);