const request = require('superagent')

module.exports = movieRequest

function movieRequest(title) {
  const words = title.split(' ')
  var urlText = ""
  words.forEach(function(word, index) {
    if (index != words.length - 1) urlText += `${word}+`
    else urlText += word
  })

  const url = `http://www.omdbapi.com/?t=${urlText}&y=&plot=full&r=json`
  console.log("url", urlText)
  //request

  return new Promise (function (resolve, reject) {
    request
      .get(url)
      .end(function(err, res){
        console.log("gotem", res.body.Title)
        if (err) reject(err)
        else resolve(res.body.Plot)

        // return JSON.stringify(res.body.Plot)
      })
  })

    // .then(function(err, res) {
    //   if(err) return "error"
    //   console.log('request ', res.body)
    //   callback(url)
    // })


}
