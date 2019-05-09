const fs = require('fs')
const path = require('path')
const basePath = './assets/'

console.log('Begin')

// This is an async fileRead process, it won't stop the program
// Notice the function in the end, that is a callback
fs.readFile(path.resolve(basePath, 'invictus.txt'), { encoding: 'utf-8' }, cb)

console.log('End')

function cb (err, data) {
  // This is the way we handle errors in callbacks
  if (err) throw err
  console.log(data)
}