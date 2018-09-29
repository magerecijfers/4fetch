const fs = require("fs");
const sleep = require("sleep");
const spawn = require("child_process").exec;
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const board = process.argv[2];
const threadID = process.argv[3];
const m = require("./func.js");
// TODO: refactor, and remove spaghet
if(!board || !threadID) {
    console.log("No board specified. Exiting.");
    console.log("Correct usage: ./node main.js board threadid")
    process.exit(1);
}
m.getPage(); 
sleep.sleep(1);
let file = fs.readFileSync("./" + threadID, "utf8");
const dom = new JSDOM(file);
let images = dom.window.document.getElementsByClassName("fileThumb");
for(i = images.length-1, z=1;0 < i;i--,z++) {
    
    console.log('[%d / %d] Downloading: %s', z, images.length, images.item(i).toString().split("//")[1])
    spawn("cd images;wget " + images.item(i).toString().split("//")[1], (err, stdout, stderr) => function(err,stdout, stderr) {
        return err;
    });
}
m.cleanup();