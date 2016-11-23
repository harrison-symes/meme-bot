const request = require('superagent')

module.exports = dreamRequest


function dreamRequest(address) {
  var filter = 'art_deco';
  var imageAddress = address;
  var url = 'https://dreamscopeapp.com/api/images'

  return new Promise (function (resolve, reject) {
    request
      .post(url)
      .field('filter', filter)
      .attach('image', imageAddress)
      .end(function(err, res) {
           if (err) return console.log(err);


        var poll_url = url + '/' + res.body.uuid;


        var poll = function() {
            request.get(poll_url, function(err, res) {
                if (!err && res.statusCode == 200) {
                    debug(res.headers);
                    debug(res.body);

                    var body = res.body;

                    // check if processing has finished
                    if (body.processing_status == 1 && body.filtered_url) {
                        console.log("Done.");
                        console.log(body.filtered_url);
                        resolve(body.filtered_url)
                    }
                }
            });
          };

          // Start polling
          process.stdout.write("Processing...");
          poll();
      });
    }
  }
