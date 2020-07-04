const fs = require("fs");
fs.writeFile("./index.txt", "我懂得~!", {flag: "a", encoding: "utf-8"}, err => {
    console.log(err);
})