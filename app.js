const fs = require("fs");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const board = process.argv[2];
const threadID = process.argv[3];

// TODO: Make a graphical user interface with Electron.

async () => {
    await fetch("www.google.com");
}

// for (i = images.length - 1, z = 1; 0 < i; i-- , z++) {

//     console.log('[%d / %d] Downloading: %s', z, images.length-1, images.item(i).toString().split("//")[1])
//     spawn("cd images;wget " + images.item(i).toString().split("//")[1], (err, stdout, stderr) => (err, stdout, stderr) {
//         console.log(err);
//     });
// }
