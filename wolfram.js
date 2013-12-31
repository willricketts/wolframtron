var Twit = require('twit');
var readline = require('readline');
var fs = require('fs');

var T = new Twit({
    consumer_key:         ''
  , consumer_secret:      ''
  , access_token:         ''
  , access_token_secret:  ''
})

function wolframBot() {
	var stream = T.stream('user');
      stream.on('tweet', function (tweet){
        if (tweet.in_reply_to_screen_name == 'Wolframtron')
        {
          console.log('Mention:  ' + tweet.user.screen_name + " -- " + tweet.text);
          //var question = tweet.text.replace("@wolframtron", "")
          var reply = "Well hello there, " + "@" + tweet.user.screen_name;
          console.log("reply: " + reply);

          T.post('statuses/update', { status: reply }, function(err, reply) {
            console.log("");
            console.log("Tweet successfully posted!")
            console.log("");
          })
        }
      })
}

wolframBot();