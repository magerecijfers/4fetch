const fs = require("fs");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const axios = require('axios');
const board = process.argv[2];
const threadID = process.argv[3];
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
// TODO: Make a graphical user interface with Electron.
async function getPageData(board, threadID) {

const m = await axios.get(`https://104.16.116.221/${board}/thread/${threadID}`);
console.log(m);
// const data = await m.text();
// // console.log(data);
}
getPageData("wg",7352435);
// getPageData("wg", 4343);
// for (i = images.length - 1, z = 1; 0 < i; i-- , z++) {

//     console.log('[%d / %d] Downloading: %s', z, images.length-1, images.item(i).toString().split("//")[1])
//     spawn("cd images;wget " + images.item(i).toString().split("//")[1], (err, stdout, stderr) => (err, stdout, stderr) {
//         console.log(err);
//     });
// }
