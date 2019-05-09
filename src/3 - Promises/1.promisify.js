const fs = require('fs')
const path = require('path')
const basePath = './assets/'

function readFileAsync (path, options) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, options, (err, data) => {
      if (err) return reject(err)
      resolve(data)
    })
  })
}

console.log('Begin')
readFileAsync(path.resolve(basePath, 'invictus.txt'), { encoding: 'utf-8' })
  .then((data) => console.log(data))
  .catch((err) => console.error(err))
console.log('End')