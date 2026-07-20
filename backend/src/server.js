// === Personal Learning Notes === //

// Common endpoint urls will first be placed here in 'app.use()'
// Then that endpoint is used in a dedicated file for specific routes (notes, contact, about, etc.) 
// Once the endpoint is placed in 'app.use()', we can simply use "/" in the dedicated file and it will replace it with the endpoint we placed in 'app.use()' (e.g. "/api/notes")
// Following this, the functions you write for the notesRoutes file will be placed in the controllers file (notesControllers) and then imported into the notesRoutes file.
// this splits the endpoint url code, the compilation of routes, and then the functions for the routes so it is easier to read.


// === Imports === //

import dotenv from "dotenv";
dotenv.config(); // dotenv.config() is a method from dotenv that basically defines the value.
// this value would be the MONGO_URI value in the .env file. if you don't add dotenv.config(), then it will run, but you wont see the value of it in the console. 
// I needed to import dotenv into this file and use dotenv.config() because I have a function here - connectDB() which uses a value in the .env file. 

import express from "express";
// Uusually the above is: const express = require('express')


// this is saying to use the PORT value in the .env file, but if it doesn't exist, then use 5001. This is important because when you deploy your app, the hosting service will usually provide a PORT value for you to use.

import notesRoutes from "./routes/notesRoutes.js";
// this type of import asks to import the "export default" from notesRoutes.js

import { connectDB } from "../config/db.js";

// call the below method. this method created in config simply gives me a console message if db connected successfuly or not. 
connectDB();

const app = express();

const port = process.env.PORT || 5001;

// middleware
app.use(express.json()); // this is saying to use the express.json() middleware, which allows us to parse JSON data in the request body. This is important because when we send a POST request to create a note, we will be sending JSON data in the request body.

// === Basic server testing === //

app.listen(port, () => {
console.log("App works on port:" + " " + port);
});


// === Notes Section === //

app.use("/api/notes", notesRoutes);
// because "api/notes" is common in all the below routes, I am saying to use that in notesRoutes
// ("what I want to take and implement", [in this file]) 


// === Contact Section === //


// === About Section === //






