// npm i chalk progress figlet


console.log('Hello World!!');

// globle.
console.log(Date());

// Number.
console.log(Number.MIN_VALUE);


// accept arguments from the command line
process.argv.forEach((val, index) => {
    console.log(`${index}: ${val}`)
})

const args = process.argv.slice(2)
console.log(args)


//clear
console.clear()


// count
const x = 1
const y = 2
const z = 3
console.count(x)
console.count(x)
console.count(y)
console.count(y)
console.count(y)
console.count(z)

const oranges = ['orange', 'orange', 'apple']
oranges.forEach(fruit => {
    console.count(fruit)
})


// how did you reach that part of the code?
const function2 = () => console.trace()
const function1 = () => function2()
function1()


//Calculate the time spent
const measureDoingSomething = () => {
  console.time('doSomething()')
  console.log('ji')
  console.log('hi')
  console.log('ei')
  console.log('ti')
  console.timeEnd('doSomething()')
}
measureDoingSomething()


// Color OutPut
console.log('\x1b[33m%s\x1b[0m', 'hi!')

// chalk
const chalk = require('chalk');
console.log(chalk.yellow('hi!'));
console.log(chalk.red('hi!'));


// progressbar
// downloading [=====             ] 39/bps 29% 3.7s  
// https://www.npmjs.com/package/progress            
const ProgressBar = require('progress')
const bar = new ProgressBar(':bar', { total: 10 })
const timer = setInterval(() => {
  bar.tick()
  if (bar.complete) {
    clearInterval(timer)
  }
}, 100)


// Accept input from the command line
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})
readline.question(`What's your name?`, (name) => {
    console.log(`Hi ${name}!`)
    readline.close()
})


// local and global install package
// npm i abc //default locally
// npm i -g abc //default globally
// npm install <package>@<version>
// npm view cowsay versions


// installed version of an npm package
// > npm list
// > npm list --depth=0
// > outdated


// // version
// ^ : It will only do updates that do not change the leftmost non-zero number. If you write ^0.13.0, when running npm update, it can update to 0.13.1, 0.13.2, and so on, but not to 0.14.0 or above.
// ~ : if you write ~0.13.0 when running npm update it can update to patch releases: 0.13.1 is ok, but 0.14.0 is not.
// > : you accept any version higher than the one you specify
// >= : you accept any version equal to or higher than the one you specify
// <= : you accept any version equal or lower to the one you specify
// < : you accept any version lower than the one you specify
// = : you accept that exact version
// - : you accept a range of versions. Example: 2.1.0 - 2.6.2
// || : you combine sets. Example: < 2.1 || > 2.6


// // uninstall
// npm uninstall <package-name>

// //npx allows you to run that npm command without having it installed locally
// npx create-react-app <app>


// Event loop
const bar = () => console.log('bar')
const baz = () => console.log('baz')
const foo = () => {
    console.log('foo')
    setTimeout(bar, 0)
    baz()
}
foo()
// foo, baz, bar


// setTimeOut
setTimeout(() => {
    // runs after 2 seconds
    console.log('helloo world!!');
}, 2000)

const id = setInterval(() => {
    // runs every 2 seconds
    console.log('helloo world!!');
    // clearInterval(id);
}, 2000)


// ES2015: Promise -> a proxy for a value that will eventually become available 
// ES2017: replace with async and wait
let done = false
const isItDoneYet = new Promise((resolve, reject) => {
  if (done) {
    const workDone = 'Here is the thing I built'
    resolve(workDone)
  } else {
    const why = 'Still working on something else'
    reject(why)
  }
})
const checkIfItsDone = () => {
  isItDoneYet
    .then(ok => {
      console.log(ok)
    })
    .catch(err => {
      console.error(err)
    })
}
checkIfItsDone()

// Async and Wait
const doSomethingAsync = () => {
    return new Promise(resolve => {
        setTimeout(() => resolve('I did something'), 3000)
    })
}
const doSomething = async () => {
    console.log(await doSomethingAsync())
}
console.log('Before')
doSomething()
console.log('After') //Ans: Before, After, I did something

// api
const getFirstUserData = async () => {
    const response = await fetch('/users.json') // get users list
}


// Event emitter
// emit: is used to trigger an event
// on: is used to add a callback function that's going to be executed when the event is triggered
const EventEmitter = require('events')
const eventEmitter = new EventEmitter()
eventEmitter.on('start', () => {
    console.log('started')
})
eventEmitter.emit('start')
// once(): add a one-time listener
// removeListener() / off(): remove an event listener from an event
// removeAllListeners(): remove all listeners for an event



// HTTP : localhost:3000
const http = require('http');
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  res.end('<h1>Hello, World!</h1>')
})
server.listen(port, () => {
  console.log(`Server running at port ${port}`)
})





