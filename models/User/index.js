const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema(
  {
    name: {
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
    },
    address: {
      type: String,
      required: true,
    },
    number: {
      type: Number,
      required: true,
    },
  }, //this will auto update the timestamp when we do inserting or updating documents of this type schema
  { timestamps: true }
);

const User = mongoose.model('User', UserSchema);
module.exports = User;
