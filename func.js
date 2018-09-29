var exports = module.exports = {};
const board = process.argv[2];
const threadID = process.argv[3];
const spawn = require("child_process").exec;
const fs = require("fs");
const sleep = require("sleep");
exports.cleanup = function() {
    fs.unlink(threadID);
    dom.window.close();
    return 0;
}

exports.getPage = function(flag) {
    if(flag) {
        return 1;
    } else {
    var url = "http://boards.4chan.org/" + board + "/thread/" + threadID;
    spawn("wget " + url);
    sleep.sleep(1);
    return 0;
    }
}


// function cleanup() {
//     fs.unlink(threadID);
//     dom.window.close();
//     return 0;
// }
// function getPage() {
//     var url = "http://boards.4chan.org/" + board + "/thread/" + threadID;
//     spawn("wget " + url); // im sure there's a better way to do this. maybe with JSDOM?
//     return 0;
// }