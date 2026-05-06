import Note from "../models/Note.js";

export async function getAllNotes = (req, res) => {

    try {
        const notes = await Note.find(); // note.find() gives you all the notes.
        res.status(200).json(notes);
    } catch (error) {
        console.error("Error in 'getAllNotes' controller/function"); // For degubbing purposes, put the error in the console.
        res.status(500).json({ message: "Could not get notes"});
    }
};

export const createNote = (req, res) => {
    res.status(201).json({ message: "Note created" });
};

export const updateNote = (req, res) => {
    res.json({ message: "Note updated" });
};

export const deleteNote = (req, res) => {
    res.json({ message: "Note deleted" });
};