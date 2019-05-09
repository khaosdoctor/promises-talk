function coinFlip () { return new Promise((resolve, reject) => Math.random() > 0.5 ? resolve('Yay') : reject('Oops')) }

// return and await will resolve the promise internally and handle the error within the catch block
async function start () {
  try {
    return await coinFlip()
  } catch (error) {
    console.log('Await error')
  }
}

// It is the equivalent of
// async function start () {
//   try {
//     const result = await coinFlip()
//     return result
//   } catch (error) {
//     console.log('Await error')
//   }
// }

start().then(console.log).catch((err) => console.log('Promise error:', err))