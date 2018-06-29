const fs = require("fs");
const sleep = require("sleep");
const spawn = require("child_process").exec;
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
let board = process.argv[2];
let threadID = process.argv[3];
// TODO: refactor, and remove spaghet
if(!board) {
    console.log("No board specified. Exiting.");
    process.exit(1);
}
function cleanup() {
    fs.unlink(threadID);
    dom.window.close();
    return 0;
}
function getPage() {
    var url = "http://boards.4chan.org/" + board + "/thread/" + threadID;
    spawn("wget " + url); // im sure there's a better way to do this. maybe with JSDOM?
    return 0;
}

getPage(); 
sleep.sleep(1); // there's this weird issue with racing. fs.readFileSync() gets called before the page is actually downloaded.
let file = fs.readFileSync("./" + threadID, "utf8");
const dom = new JSDOM(file);
let images = dom.window.document.getElementsByClassName("fileThumb");
for(i = images.length-1, z=1;0 < i;i--,z++) {
    
    console.log('[%d / %d] Downloading: %s', z, images.length, images.item(i).toString().split("//")[1])
    spawn("cd images;wget " + images.item(i).toString().split("//")[1], (err, stdout, stderr) => function(err,stdout, stderr) {
        return err;
    });
}
cleanup();