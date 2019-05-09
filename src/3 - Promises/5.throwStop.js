function start () {
  throw new Error('An error')
}

console.log('Begin')
start()
console.log('End')

