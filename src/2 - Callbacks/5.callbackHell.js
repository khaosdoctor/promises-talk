const fs = require('fs')
const path = require('path')
const basePath = './assets/'

console.log('Begin')

// Take all files in the directory
fs.readdir(path.resolve(basePath), (err, files) => {
  if (err) throw err
  files
    .filter((file) => /s[1-4].txt/gi.test(file)) // Filter the files
    .forEach((sentenceFile) => { // For each sentence, reads and prints (async)
      fs.readFile(path.resolve(basePath, sentenceFile), { encoding: 'utf-8' }, cb) // Will print unordered
    })
})

console.log('End')

// this callback is called everytime readFile executes
function cb (err, data) {
  if (err) throw err
  console.log(data)
}