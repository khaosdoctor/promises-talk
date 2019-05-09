const coinFlip = new Promise((resolve, reject) => setTimeout(() => Math.random() > 0.5 ? resolve(true) : reject(false), 2000))
let p = Promise.resolve('Yay').then(coinFlip)

// P will resolve immediately to YAY, but will not be settled until the second promise resolves with the coinflip
p.then(console.log).catch(() => console.log('error'))