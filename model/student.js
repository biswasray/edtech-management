const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: { type: String},
  userId: { type: mongoose.Schema.Types.ObjectId },
  schoolId: { type: mongoose.Schema.Types.ObjectId },
  created: { type: mongoose.Schema.Types.Date },
  updated: { type: mongoose.Schema.Types.Date },
},{ versionKey: false });

module.exports = mongoose.model("student", studentSchema);