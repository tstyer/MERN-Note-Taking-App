import Note from "../models/Note.js";

export async function getAllNotes(req, res) {
    try {
        const notes = (await Note.find().Sort({createdAt: -1})) // note.find() gives you all the notes.
        // sort method to show the most recently created notes first because '-1' shows in descending order: latest date and times is highest number
        res.status(200).json(notes);
    } catch (error) {
        console.error("Error in 'getAllNotes' controller/function"); // For degubbing purposes, put the error in the console.
        res.status(500).json({ message: "Could not get notes"});
    }
};

export async function getSpecificNote(req, res) {
    try {
        const aNote = await Note.findById(req.params.id); // note.find() gives you all the notes.
        if (!aNote) {
            res.status(404).jason({message: "Note not found"});
        } else {
            res.status(200).json(aNote);
        }
    } catch (error) {
        console.error("Error in 'getSpecificNote' controller/function"); // For degubbing purposes, put the error in the console.
        res.status(500).json({ message: "Could not get note"});
    }
};

export async function createNote(req, res) {
    // when thinking of creating something: so the user wants to pass a Title and Content
    try {
        const {title, content} = req.body;
        const note = new Note({title:title, content:content}) // since the key and const values are the same, you can shorten to const newNote = new Note({titel, content})
                                                                 // but I left as is for my learning
        const savedNote = await note.save();
        res.status(201).json({"message": "Note created successfully"});
    }  catch (error) {
        console.error("Not able to create new note in 'createNote' controller/function");
        res.status(500).json({ "message": "Could not create note"}); 
    }
};

export async function updateNote(req, res) {
    try {
        const { title, content } = req.body;
        const updatedNoted = await Note.findByIdAndUpdate(req.params.id, {title, content}); // re.params.id collects the id from the url. 'id' matches ':id' in the notesroutes.js file for put. 
        if(!updateNote) {
            res.status(404).json({message: "Note not found"});
        }

        res.status(200).json({message: "Updated successfuly"});

    } catch (error) {
        console.error("Not able to update note");
        res.status(500).json({ "message": "Could not update note"});
    }
};

export async function deleteNote(req, res) {
    try {
        const deletedNote = await Note.findByIdAndDelete(req.params.id);
        if(!deletedNote) {
            res.status(404).json({message: "Note not found"});
        }

        res.status(200).json({mesage: "Note deleted"});

    } catch (error) {
        console.error("Not able to delete note");
        res.status(500).json({ "message": "Could not delete note"});
    }
};