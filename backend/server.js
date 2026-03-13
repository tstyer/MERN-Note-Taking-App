// need to change "type" in package.json to "module" so it works with express

import express from "express";

const app = express()

app.listen(5001, () => {
    console.log("App works on 5001")
});