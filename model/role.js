const mongoose = require("mongoose");

const roleSchema = new mongoose.Schema({
  name: { type: String},
  scopes: { type: [String] },
  created: { type: mongoose.Schema.Types.Date },
  updated: { type: mongoose.Schema.Types.Date },
},{ versionKey: false });

module.exports = mongoose.model("role", roleSchema);