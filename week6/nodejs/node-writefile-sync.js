const fs = require('fs')

let content = "This is what will be written to the file"

try {
    fs.writeFileSync('test.txt', content)
    console.log("File written!")
} catch (err) {
    console.error(err)
}