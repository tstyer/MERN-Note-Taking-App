// need to change "type" in package.json to "module" so it works with express

import express from "express";
// Uusually the above is: const express = require('express')

const app = express();

app.get("/api/notes", (req, res) => {
    res.send("This path works");
});
// above, req is the request, res is the response. We send a response back to the client with res.send()
// req is what we (or the server) receives from the client, res is what we send back to the client
// the client/browser/react app sends request data to the server endpoint (api/notes) and the server responds with a message ("This path works")
// the api in this case is the code that we write on the server to handle requests from the client.


app.listen(5001, () => {
    console.log("App works on 5001")
});