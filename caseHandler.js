const movieRequest = require('./movieRequest')
//const dreamRequest = require('./dreamRequest')

module.exports = caseHandler


function caseHandler(string) {

  const text = string.toLowerCase()
  const words = string.split(' ')
  const firstWord = words[0]
  words.splice(0, 1)
  var restWords = words.join(' ')


  return new Promise (function (resolve, reject) {
    switch(firstWord) {
      // case "dream":
      //   dreamRequest(restWords)
      //     .then(function(result) {
      //       resolve(result)
      //     })
      //   break;
      case "movie":
        movieCase(restWords)
          .then(function(result) {
            resolve(result)
          })
        break;

      default:
        resolve(textCase(text))
    }
  })

}

function movieCase(restWords) {
  return new Promise (function (resolve, reject) {
    movieRequest(restWords)
      .then(function(result) {
        console.log("got result " , result)
        console.log("type: ", typeof result)
        if (result === undefined) reject(result)
        resolve(result)
      })
    })
}

function textCase(text) {
  switch (text) {
    case "hello":
      return "hello, friend";
    case "how are you?":
      return "I am swell, friend";
    case "what is your favourite movie?":
      return "Bee Movie, starring Jerry Seinfeld, friend"
    default:
      return "Sorry, I didn't get that";
  }
}
