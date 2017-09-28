// Require mongoose
var mongoose = require("mongoose");
// Create Schema class
var Schema = mongoose.Schema;

// Create Post schema
var ArticleSchema = new Schema({
  // title is a required string

  title: {
    type: String,
    required: true,
    unique: false
  },
  // link is a required string
  url: {
    type: String,
    required: true
  },
  snippet: {
      type: String,
      required: true,
  },
  date: {
      type: Date,
      required: true,
  },
});

// Create the Post model with the PostSchema
var Article = mongoose.model("Article", ArticleSchema);

// Export the model
module.exports = Article;