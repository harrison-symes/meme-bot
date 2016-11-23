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

  return url
}
