import express from "express";
import { createNote, getAllNotes, updateNote, deleteNote } from "../controllers/notesControllers.js";

const router = express.Router();

// The reason only "/" is used in the below routes is becauser in
// server.js, I created app.use("/api/notes", notesRouter), so now I simply need to type "/" and it replaces it with "/api/notesrouter"

router.get("/", getAllNotes);
// above, req is the request, res is the response. We send a response back to the client with res.send()
// req is what we (or the server) receives from the client, res is what we send back to the client
// the client/browser/react app sends request data to the server endpoint (api/notes) and the server responds with a message ("This path works")
// the api in this case is the code that we write on the server to handle requests from the client.

router.post("/", createNote);
// status code 201 means something created. 

router.put("/:id", updateNote);
// put is used to update something that already exists

router.delete("/:id", deleteNote);
// delete is used to delete something that already exists