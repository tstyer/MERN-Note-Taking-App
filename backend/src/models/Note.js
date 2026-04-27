//  A model is basically used as a blue print for something that you will constantly use in the app. in this case, it will be a note model. 

import mongoose from "mongoose";

// 1st, create a schema
// 2nd, create model based on the schema

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
{ timeStamps: true } // timeStamps creates the createdAt and updatedAt fields 
);


const Note = mongoose.model("Note", noteSchema);

export default Note; 