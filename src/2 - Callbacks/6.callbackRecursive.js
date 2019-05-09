const fs = require('fs')
const path = require('path')
const basePath = './assets/'

console.log('Begin')

// Take all files in the directory
start(1, 4)

console.log('End')

function start (index, max) {
  if (index > max) return
  fs.readFile(path.resolve(basePath, `s${index}.txt`), { encoding: 'utf-8' }, (err, data) => cb(err, data, index, max))
}

function cb (err, data, index, max) {
  if (err) throw err
  console.log(data)
  return start(index + 1, max)
}