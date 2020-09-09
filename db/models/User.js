const mongoose = require('../connection')

module.exports = mongoose.model('User', new mongoose.Schema({
  login: String,
  avatar_url: String,
  html_url: String,
}))
