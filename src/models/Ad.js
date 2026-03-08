const mongoose = require("mongoose");

const adSchema = new mongoose.Schema({
<<<<<<< HEAD

  product: {
    type: String,
    required: true
  },

  audience: {
    type: String,
    required: true
  },

  platform: {
    type: String,
    required: true
  },

  headline: {
    type: String
  },

  caption: {
    type: String
  },

  hashtags: {
    type: String
  },

  image: {
    type: String
  },

  createdAt: {
    type: Date,
    default: Date.now
  }

=======
  product: { type: String, required: true },
  audience: { type: String, required: true },
  platform: { type: String, required: true },
  headline: { type: String },
  caption: { type: String },
  hashtags: { type: String },
  image: { type: String },
  createdAt: { type: Date, default: Date.now },
>>>>>>> bf9b5e3432a6c0d2e38dabf24a98689efbf8348f
});

module.exports = mongoose.model("Ad", adSchema);