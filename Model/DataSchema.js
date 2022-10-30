const mongoose = require("mongoose"); //loading mongoose model

//defining Schema for data
const DataSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  summary: {
    type: String,
    required: true,
  },
});

//exporting schema to MongoDB
module.exports = mongoose.model("DataSchema", DataSchema);
