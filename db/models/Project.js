const mongoose = require('../connection')
const User = require('./User')

module.exports = mongoose.model('Project', new mongoose.Schema({
  name: String,
  full_name: String,
  private: Boolean,
  owner: User,
  url: String,
  description: String,
  homepage: String,
  language: String,
  framework: String
}))
