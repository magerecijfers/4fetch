var exports = module.exports = {};


exports.cleanup = function() {
    fs.unlink(threadID);
    dom.window.close();
    return 0;
}

exports.getPage = function() {
    var url = "http://boards.4chan.org/" + board + "/thread/" + threadID;
    spawn("wget " + url);
    return 0;
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