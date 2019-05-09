function coinFlip () { return new Promise((resolve, reject) => Math.random() > 0.5 ? resolve('Yay') : reject('Oops')) }

// returning the promise will delegate the error handling to the caller
async function start () {
  try {
    return coinFlip()
  } catch (error) {
    console.log('Await error')
  }
}

start().then(console.log).catch((err) => console.log('Promise error:', err))