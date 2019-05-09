const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve('End'), 5000)
})

console.log('Begin')
promise.then((text) => console.log(text))
// Or
promise.then(console.log)
// Or
promise.then(
  (res) => setTimeout(() => res('End'), 5000),
  (rej) => console.error(rej)
)