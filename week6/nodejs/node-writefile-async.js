const fs = require('fs')

let content = "This is what will be written to the file"

fs.writeFile('test.txt', content, (err) => {
    if (err) {
        console.error(err)
        return
    }
    console.log("File written!")
})