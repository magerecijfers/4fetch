const fs = require('fs');
const axios = require('axios');
const download = require('download');

async function getPageData(board, threadnumber, path) {
    fs.mkdir(path, (err) => {
        console.log(err);
    })
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
getPageData("wg", 7354908);