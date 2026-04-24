// === Personal Learning Notes === //

// Common endpoint urls will first be placed here in 'app.use()'
// Then that endpoint is used in a dedicated file for specific routes (notes, contact, about, etc.) 
// Once the endpoint is placed in 'app.use()', we can simply use "/" in the dedicated file and it will replace it with the endpoint we placed in 'app.use()' (e.g. "/api/notes")
// Following this, the functions you write for the notesRoutes file will be placed in the controllers file (notesControllers) and then imported into the notesRoutes file.
// this splits the endpoint url code, the compilation of routes, and then the functions for the routes so it is easier to read.


// === Imports === //

import express from "express";
// Uusually the above is: const express = require('express')

import notesRoutes from "./routes/notesRoutes.js";
// this type of import asks to import the export default from notesRoutes.js

const app = express();


// === Basic server testing === //

app.listen(5001, () => {
    console.log("App works on 5001")
});


// === Notes Section === //

app.use("/api/notes", notesRoutes);
// because "api/notes" is common in all the below routes, I am saying to use that in notesRoutes
// ("what I want to take and implement", [in this file]) 


// === Contact Section === //


// === About Section === //






