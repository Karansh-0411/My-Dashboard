const Note = require("../models/Note");

// Get all notes for a user
exports.getNotes = async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user.userId });
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch notes", error });
  }
};

// Create a new note
exports.createNote = async (req, res) => {
    console.log("Here it is .....")
    console.log(req.user);
    console.log(req.body);
  try {
    const note = await Note.create({
      user: req.user.userId,
      text: req.body.text,
    });
    res.status(201).json(note);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to create note", error });
  }
};

// Update a note
exports.updateNote = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);

    if (!note) return res.status(404).json({ message: "Note not found" });

    if (note.user.toString() !== req.user.userId)
      return res.status(403).json({ message: "Unauthorized" });

    note.text = req.body.text;
    const updatedNote = await note.save();
    res.status(200).json(updatedNote);
  } catch (error) {
    res.status(500).json({ message: "Failed to update note", error });
  }
};

// Delete a note
exports.deleteNote = async (req, res) => {
  try {
    const note = await Note.findOneAndDelete({
      _id: req.params.id,
      user: req.user.userId,
    });
    // console.log(note);

    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.status(200).json({ message: "Note deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete note", error });
  }
};
