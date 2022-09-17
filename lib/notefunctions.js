//  Packages needed for this application
const path = require('path');
const fs = require ('fs');

function noteCreateNewNote(body, noteTakerArray) {
    const note = body;
    noteTakerArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({
            notes; noteTakerArray
        }, null, 2)
    )
    return note;
}