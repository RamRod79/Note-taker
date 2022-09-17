// express router
const router = require('express').Router();

// adding notes
const {
    notes 
 } = require('../../db/db.json');

//  create or delete note
 const {
    noteCreateNewNote,
    noteDeleteNote
 } = require('../../lib/noteFunctions');

// saving in history

// Rreading HTTP method
router.get('/notes', (req, res) => {
    let saved = notes;
    res.json(saved);
})

// Creating HTTP method
router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();
    let note = noteCreatedNewNote(req.body, notes);
    res.json(note);
})

// Deleting HTTP method
router.delete('/notes/:id', (req, res) => {
    noteDeleteNote(notes, req.params.id);
    res.json(notes);
 })

 module.exports = router;