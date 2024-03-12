const { readFileSync, writeFileSync } = require('fs')
console.log('start')
const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

writeFileSync('./content/result-sync.txt',`here is the result : ${first},${second}`,{flag: 'a'})//flag used to append file
console.log('done with the task')