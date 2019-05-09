const fs = require('fs')
const path = require('path')
const basePath = './assets/'

console.log('Begin')

// Take all files in the directory
fs.readFile(path.resolve(basePath, 's1.txt'), { encoding: 'utf-8' }, (err, data) => {
  cb(err, data)
  fs.readFile(path.resolve(basePath, 's2.txt'), { encoding: 'utf-8' }, (err, data) => {
    cb(err, data)
    fs.readFile(path.resolve(basePath, 's3.txt'), { encoding: 'utf-8' }, (err, data) => {
      cb(err, data)
      fs.readFile(path.resolve(basePath, 's4.txt'), { encoding: 'utf-8' }, (err, data) => {
        cb(err, data)
      })
    })
  })
})

console.log('End')

function cb (err, data) {
  if (err) throw err
  console.log(data)
}