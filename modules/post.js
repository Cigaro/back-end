const { Schema, model } = require('mongoose');

const Post = new Schema({
  id: String,
  value: { type: String, require: true },
  status: { type: Boolean, require: true },
});

module.exports = model('Post', Post);
