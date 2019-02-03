const fs = require('fs');
const axios = require('axios');
const download = require('download');
const board = process.argv[1];
const threadnumber = process.argv[2];
const path = process.argv[3];

function validateInput(board, threadnumber, path) {
    if((board != null && board != undefined) && (threadnumber != NaN && threadnumber != undefined)) {

    } else {
        console.log("Correct usage: node app.js [board] [threadnumber] [OPTIONAL: path]");
        process.exit(-1);
    }
}

async function getPageData(board, threadnumber, path) {
    if(process.argv[3] != undefined)
    {
        fs.mkdir(path, (err) => {
            console.log(err);
        })
    }
    const res = await axios.get(`http://a.4cdn.org/${board}/thread/${threadnumber}.json`);
    let tim, ext;
    for(i = 0;i < res.data.posts.length; i++) {
        tim = m.data.posts[i].tim;
        ext = m.data.posts[i].ext;
        if(tim == undefined || ext == undefined) {
            console.log("Skipped item %s, because of no image.", i);
            continue;
        }
        console.log(`[%s / %s] Downloading: ${tim}${ext}`, i, m.data.posts.length);
        await download(`http://i.4cdn.org/${board}/${tim}${ext}`).then(data => {
            fs.writeFileSync(`img/${tim}${ext}`, data);
        })
    }
    console.log("Done!")
}


validateInput();
getPageData(process.argv[1], process.argv[2], process.argv[3]);