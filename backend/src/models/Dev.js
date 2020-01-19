const mongoose = require('mongoose');

const DevSchema = new mongoose.Schema({
  nome: String,
  github_userName: String,
  bio: String,
  avatar_url: String,
  techs: [String]
});

module.exports = mongoose.model('Dev', DevSchema);