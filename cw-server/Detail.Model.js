const mongoose = require("mongoose");

const DetailSchema = mongoose.Schema({
  propertyType: String,
  bedRoom: String,
  addingDate: Date,
  monthlyRentPrice: Number,
  furnitureType: String,
  notes: String,
  reporterName: String,
});

module.exports = mongoose.model("Details", DetailSchema);
