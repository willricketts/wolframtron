var Twit = require('twit');
var readline = require('readline');
var fs = require('fs');

var T = new Twit({
    consumer_key:         ''
  , consumer_secret:      ''
  , access_token:         ''
  , access_token_secret:  ''
})

function wolframtron() {
	var stream = T.stream('user');
      stream.on('tweet', function (tweet){
        if (tweet.in_reply_to_screen_name == '')
        {
          console.log('Mention:  ' + tweet.text);
          var question = tweet.text.replace("", "");
        }
      })
}

wolframtron();