const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
  setup: {
    type: String,
    required: [true, "Setup is required!"],
    minLength: [10, "Setup must be at least 10 characters long!"]
  },
  punchline: {
    type: String,
    required: [true, "Punchline is required!"],
    minLength: [10, "Punchline must be at least 10 characters long!"]
  },
});

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;
