const fetch = require('node-fetch');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const board = process.argv[2];
const threadID = process.argv[3];

if (!(board && threadID) == true) {
    console.log("Correct usage node app.js [board] [threadID]");
    process.exit(-1);
}
fetch("http://www.4chan.org/" + board + "/" + threadID)
.then((data) => {
    data.text().then((f) => {
        const dom = new JSDOM(f);
        console.log(dom.window.document.documentElement.innerHTML);
    });
})
