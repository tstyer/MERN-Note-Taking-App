//  A model is basically used as a blue print for something that you will constantly use in the app. in this case, it will be a note model: the standard layout for each note. 

import mongoose from "mongoose";

// 1st, create a schema
// 2nd, create model based on the schema

// becaue I am using mongoose, i must define the schema and the model. The schema defines the structure of the documents (and documents within them) using the field: data-type layout.

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
    },
{ timeStamps: true }  
);


const Note = mongoose.model("Note", noteSchema);

export default Note; 


/* Learning
    # { timeStamps: true } - This object of timestamps: true is one within mongoDB that creates the 'createdAt' and 'updatedAt' fields.
*/