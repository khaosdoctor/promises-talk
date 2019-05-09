const fs = require('fs')
const path = require('path')
const basePath = './assets/'

console.log('Begin')

// This is an example of a sync file read, it pauses the program and reads the file
const content = fs.readFileSync(path.resolve(basePath, 'invictus.txt'))

console.log(content.toString())

console.log('end')