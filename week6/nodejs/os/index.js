const os = require('os');

console.log("Architecture:", os.arch(), "\n")
console.log("CPUs:", os.cpus(), "\n")
console.log("Network interfaces:", os.networkInterfaces(), "\n")
console.log("Platform:", os.platform(), "\n")
console.log("Release number:", os.release(), "\n")
console.log("User info:", os.userInfo(), "\n")