const fs = require('fs')
const path = require('path')
const { promisify } = require('util')
const basePath = './assets/'
const readFileAsync = promisify(fs.readFile)

// Await returns a promise
async function start () {
  console.log('Begin')
  return await readFileAsync(path.resolve(basePath, 'invictus.txt'), { encoding: 'utf-8' })
}

start().then(console.log)