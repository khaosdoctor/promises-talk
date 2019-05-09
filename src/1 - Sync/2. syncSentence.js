const fs = require('fs')
const path = require('path')
const basePath = './assets/'

console.log('Begin\n')

// Take all files in the directory
const files = fs.readdirSync(path.resolve(basePath))
// Filter the ones we want
const sentences = files.filter((file) => /s[1-4].txt/gi.test(file))
//Read all files in order, synchronously
for (const file of sentences) {
  const sentence = fs.readFileSync(path.resolve(basePath, file)).toString()
  console.log(sentence, '\n')
}

console.log('end')