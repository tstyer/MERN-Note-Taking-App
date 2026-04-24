export const getAllNotes = (req, res) => {
    res.status(200).send("Here's your notes");
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