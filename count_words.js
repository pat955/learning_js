const fs = require('fs')

fs.readFile('count_words.txt', function (err, data) {
    const text = data.toString().split(' ')
    console.log(countWords(text))
})


function countWords(text){
    return text.length
}
