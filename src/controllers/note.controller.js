const Note = require('../models/note.model');

const createNote = async (req, res) => {
  try {
    const { title, content, category } = req.body;

    const newNote = new Note({ title, content, category });
    await newNote.save();

    res.status(201).json({
      success: true,
      message: "Note created successfully",
      data: newNote
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message
    });
  }
};

//// Create multiple notes
const multipleNotes = async (req, res) => {
  try {
    const { notes } = req.body;

    if (!notes || !Array.isArray(notes) || notes.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Notes array is required and cannot be empty",
        data: null
      });
    }

    const createdNotes = await Note.insertMany(notes);

    res.status(201).json({
      success: true,
      message: `${createdNotes.length} notes created successfully`,
      data: createdNotes
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Server error",
      data: null
    });
  }
};

module.exports = { createNote , multipleNotes};