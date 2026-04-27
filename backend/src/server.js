// === Personal Learning Notes === //

// Common endpoint urls will first be placed here in 'app.use()'
// Then that endpoint is used in a dedicated file for specific routes (notes, contact, about, etc.) 
// Once the endpoint is placed in 'app.use()', we can simply use "/" in the dedicated file and it will replace it with the endpoint we placed in 'app.use()' (e.g. "/api/notes")
// Following this, the functions you write for the notesRoutes file will be placed in the controllers file (notesControllers) and then imported into the notesRoutes file.
// this splits the endpoint url code, the compilation of routes, and then the functions for the routes so it is easier to read.


// === Imports === //

import dotenv from "dotenv";
dotenv.config(); // dotenv.config() is a method from dotenv that basically defines that values in the console. 
// this value would be the MONGO_URI value in the .env file. if you don't add dotenv.config(), then it will run, but you wont see the value of it in the console. 

import express from "express";
// Uusually the above is: const express = require('express')

const PORT = process.env.PORT || 5001;
// this is saying to use the PORT value in the .env file, but if it doesn't exist, then use 5001. This is important because when you deploy your app, the hosting service will usually provide a PORT value for you to use.

import notesRoutes from "./routes/notesRoutes.js";
// this type of import asks to import the "export default" from notesRoutes.js

import { connectDB } from "../config/db.js";

// call the below method because it connects to database
connectDB();

const app = express();

// === Basic server testing === //

app.listen(PORT, () => {
console.log("App works on port:" + " " + PORT);
});


// === Notes Section === //

app.use("/api/notes", notesRoutes);
// because "api/notes" is common in all the below routes, I am saying to use that in notesRoutes
// ("what I want to take and implement", [in this file]) 


// === Contact Section === //


// === About Section === //






