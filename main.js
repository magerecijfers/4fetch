const fs = require("fs");
const sleep = require("sleep");
const os = require("os");
const spawn = require("child_process");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
var prompt = require("prompt-sync-history")
const readline = require('readline');
var board = process.argv[2];
var threadID = process.argv[3];
// console.log("Board: %s\nThread ID: %s", process.argv[2], process.argv[3])
// TODO: refactor, and remove spaghest
// TODO: cleanup after downloading images
function cleanup() {
    fs.unlink(threadID);
    fs.unlink(threadID + ".1")
    return 0;
}

function getPage() {
    var url = "http://boards.4chan.org/" + board + "/thread/" + threadID;
    spawn.exec("wget " + url); // im sure there's a better way to do this. maybe with JSDOM?
}

getPage(); 
sleep.sleep(4); // there's this weird issue with racing. fs.readFileSync() gets called before the page is actually downloaded.
var file = fs.readFileSync("./" + threadID, "utf8"); // :)
sleep.sleep(4);
const dom = new JSDOM(file);
var images = dom.window.document.getElementsByClassName("fileThumb");
var links = new Array(images.length+1);
for(i = images.length-1;0 < i;i--) {
    spawn.exec("mkdir images");
   spawn.exec("cd images;wget " + images.item(i).toString().split("//")[1], (err, stdout) => console.log(stdout));
}
cleanup();