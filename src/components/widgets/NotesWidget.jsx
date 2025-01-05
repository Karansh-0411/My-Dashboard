import React, { useState, useEffect } from "react";
import axios from "../../utils/api";
import { FaEdit, FaTrash } from "react-icons/fa";

const NotesWidget = () => {
  const [notes, setNotes] = useState([]); // List of notes
  const [noteText, setNoteText] = useState(""); // Input field value
  const [editId, setEditId] = useState(null); // ID of note being edited

  // Fetch Notes
  const fetchNotes = async () => {
    try {
      const { data } = await axios.get("api/notes");
      setNotes(data);
    } catch (error) {
      console.error("Failed to fetch notes:", error);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  // Add or Update Note
  const handleSaveNote = async () => {
    if (editId) {
      // Update note
      try {
        await axios.put(`api/notes/update/${editId}`, { text: noteText });
        setEditId(null);
        fetchNotes();
      } catch (error) {
        console.error("Failed to update note:", error);
      }
    } else {
      // Create note
      try {
        await axios.post("api/notes/create", { text: noteText });
        fetchNotes();
      } catch (error) {
        console.error("Failed to create note:", error);
      }
    }
    setNoteText("");
  };

  // Edit Note
  const handleEditNote = (id, text) => {
    setNoteText(text);
    setEditId(id);
  };

  // Delete Note
  const handleDeleteNote = async (id) => {
    try {
      await axios.delete(`api/notes/delete/${id}`);
      fetchNotes();
    } catch (error) {
      console.error("Failed to delete note:", error);
    }
  };

  return (
    <div className="notes-widget p-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-2">Notes</h2>
      <div className="mb-4">
        <textarea
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
          className="w-full p-2 border rounded-lg"
          placeholder="Write your note here..."
        ></textarea>
        <button
          onClick={handleSaveNote}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2"
        >
          {editId ? "Update Note" : "Add Note"}
        </button>
      </div>
      <ul>
        {notes.map((note) => (
          <li
            key={note._id}
            className="flex items-center justify-between bg-white p-2 mb-2 rounded-lg shadow-sm"
          >
            <span>{note.text}</span>
            <div className="flex gap-2">
              <button
                onClick={() => handleEditNote(note._id, note.text)}
                className="text-yellow-500"
              >
                <FaEdit />
              </button>
              <button
                onClick={() => handleDeleteNote(note._id)}
                className="text-red-500"
              >
                <FaTrash />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotesWidget;
