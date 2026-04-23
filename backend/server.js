// need to change "type" in package.json to "module" so it works with express

import express from "express";
// Uusually the above is: const express = require('express')

import notesRoutes from "./routes/notesRoutes.js";
// connect this file to the notesRoutes file

const app = express();

app.use("/api/notes", notesRoutes);
// because "api/notes" is common in all the below routes, I am saying to use that in notesRoutes
// ("what I want to take and implement", [in this file]) 

app.listen(5001, () => {
    console.log("App works on 5001")
});






