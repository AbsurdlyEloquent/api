const mongoose = require('../connection')

module.exports = new mongoose.Schema({
  user: String,
  avatar_url: String,
  url: String,
})
