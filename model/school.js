const mongoose = require("mongoose");

const schoolSchema = new mongoose.Schema({
  name: { type: String },
  city: { type: String },
  state: { type: String },
  country: { type: String },
  created: { type: mongoose.Schema.Types.Date },
  updated: { type: mongoose.Schema.Types.Date },
},{ versionKey: false });

module.exports = mongoose.model("school", schoolSchema);