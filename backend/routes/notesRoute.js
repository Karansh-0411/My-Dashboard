const express = require('express');
const router = express.Router();
const { createNote, getNotes, updateNote, deleteNote } = require('../controllers/notesController');
const {protect} = require("../middleware/authMiddleware")
// Create a new note
router.post('/create',protect, createNote);

// Get all notes
router.get('/', protect, getNotes);

// Update a note
router.put('/update/:id', protect, updateNote);

// Delete a note
router.delete('/delete/:id', protect, deleteNote);

module.exports = router;
