const fs = require("fs");
const spawn = require("child_process").exec;
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const board = process.argv[2];
const threadID = process.argv[3];
const m = require("./func.js");

let flag = false;
// TODO: Make a graphical user interface with Electron.
if (!board || !threadID) {
    console.log("No board specified. Exiting.");
    console.log("Correct usage: ./node app.js board threadid")
    process.exit(1);
}

if (fs.existsSync("./" + threadID)) {
    fs.unlink();
    flag = true; // Sets flag to true. getPage method will check if true, if true it will skip downloading the page. Making the application faster.
    console.log("File already exists. Skipping.")
}
m.getPage(flag);
let file = fs.readFileSync("./" + threadID, "utf8");
const dom = new JSDOM(file);
let images = dom.window.document.getElementsByClassName("fileThumb");
for (i = images.length - 1, z = 1; 0 < i; i-- , z++) {

    console.log('[%d / %d] Downloading: %s', z, images.length-1, images.item(i).toString().split("//")[1])
    spawn("cd images;wget " + images.item(i).toString().split("//")[1], (err, stdout, stderr) => function (err, stdout, stderr) {
        return err;
    });
}

fs.unlinkSync("./" + threadID);
dom.window.close();