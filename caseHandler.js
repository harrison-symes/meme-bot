const movieRequest = require('./movieRequest')

module.exports = caseHandler


function caseHandler(string) {

  const text = string.toLowerCase()
  console.log("full text ", text)
  const words = string.split(' ')
  const firstWord = words[0]
  console.log('first word ', firstWord)
  words.splice(0, 1)
  var restWords = words.join(' ')
  console.log("rest", restWords)

  switch(firstWord) {
    case "dream":
      return "is but a dream, friend";
    case "movie":
      return movieCase(restWords)
    default:
      return textCase(text)
  }

}

function movieCase(text) {
  switch(text) {
    default:
      //return "https://www.youtube.com/watch?v=E6iN6VTL7v8"
      return movieRequest(text)
  }
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
