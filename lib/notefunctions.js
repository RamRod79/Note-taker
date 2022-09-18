//  Packages needed for this application
const path = require('path');
const fs = require ('fs');


function noteCreateNewNote(body, noteTakerArray) {
    const note = body;
    noteTakerArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({
            notes: noteTakerArray
        }, null, 2)
    )
    return note;
}

// delete notes
function noteDeleteNote(noteTakerArray, id) {
    let deleteID = parseInt(id);
    noteTakerArray.splice(deleteID, 1);
    

    // for loop to replace deleted items
    for (let i = deleteID; i < noteTakerArray.length; i++) {
    noteTakerArray[i].id = i.toString();
    }

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({
            notes: noteTakerArray
        }, null, 2)
    )
}

module.exports = {
    noteCreateNewNote,
    noteDeleteNote
};