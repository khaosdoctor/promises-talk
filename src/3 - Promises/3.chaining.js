const coinFlip = new Promise((resolve, reject) => Math.random() > 0.5 ? resolve(true) : reject(false))

console.log('Begin')

// First case, if we have an error the last 'then' won't execute
coinFlip.then((data) => console.log('Yay 1'))
  .then(() => console.log('End1'))
  .catch((err) => console.error('Error in first case, then will not execute'))

// Second case, in an exception the last then will execute
coinFlip.then((data) => console.log('Yay 2'))
coinFlip.catch((err) => console.error('Next then will execute'))
coinFlip.then(() => console.log('End2'))

// Same thing
coinFlip
  .then((success) => console.log('Yay 3'), (fail) => console.log('Error in third case'))
  .then(() => console.log('End3'))