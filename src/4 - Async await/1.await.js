const fs = require('fs')
const path = require('path')
const { promisify } = require('util')
const basePath = './assets/'
const readFileAsync = promisify(fs.readFile)

// Await can be a function apart
async function start () {
  console.log('Begin')
  const poem = await readFileAsync(path.resolve(basePath, 'invictus.txt'), { encoding: 'utf-8' })
  console.log(poem)
}

start()