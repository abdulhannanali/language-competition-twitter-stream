var Twitter = require("twitter");
var io = require("socket.io");

var config = require("./config");

var client = new Twitter({
  consumer_key: process.env.TWITTER_API_KEY,
  consumer_secret: process.env.TWITTER_API_SECRET,
  access_token_key: process.env.TWITTER_API_TOKEN,
  access_token_secret: process.env.TWITTER_API_TOKEN_SECRET
})
