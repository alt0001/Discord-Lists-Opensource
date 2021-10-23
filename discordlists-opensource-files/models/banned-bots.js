const mongoose = require('mongoose')

const banned_bot = new mongoose.Schema({
  botid: {
      type: String,
      required: true
  },
  banned: {
      type: Boolean,
      required: true,
      default: false
  }
})

module.exports = mongoose.model('banned-bots', banned_bot);