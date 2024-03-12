//os is a built in module
const os = require('os') // no need of ./ 

//info abt crrnt user
const user = os.userInfo()
console.log(user)

//method returns the system iptime in seconds
console.log(`the system uptime is ${os.uptime()} `)


const currentOS ={
    name : os.type(),
    release :os.release(),
    totalmem :os.totalmem(),
    freemem : os.freemem(),
}

console.log(currentOS)