const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const hotelSchema = new Schema({
  hotelName: {
    type: String,
    required:true,
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  hotelAddress: {
    type: String,
    required: true,
    trim: true,
  },
  hotelPhone: {
    type: String,
    required: true,
    trim: true,
  },
  hotelCost: {
    type: Number,
    required: true
  },
  hotelRating: {
    type: Number,
    required: true,
    default: 1
  },
  hotelImage: {type: String},
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  }
});

const Hotel = model('Hotel', hotelSchema);

module.exports = Hotel;
