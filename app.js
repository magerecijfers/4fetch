const fetch = require('node-fetch');
// // const fs = require("fs");
// const spawn = require("child_process").exec;
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


// console.log(data);
// console.log(final);



/* i'MMA TELL EM IMMA TELL EM WHAT I WANT TO DO GOT A BIG GUN IN MY BAG AND IM GOING TO SCHOOL, ABOUT SPRAY EVERYONE DOWN AND THEY DONT EVEN WHO, I AM  I AM THE MAN */
