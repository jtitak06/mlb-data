const express = require("express");
const cors = require("cors");
const app = express();
const homeRunData = require("./home-runs.json");
const rbiData = require("./RBIs.json");
const winsData = require("./wins.json");


const port = process.env.PORT || 3000;

app.use(cors());

app.get("/", (req, res) => {
    res.send("MLB Stat Leaders");
});

app.get("/homeruns", (req, res) => {
    res.send(homeRunData);
});

app.get("/RBIs", (req, res) => {
    res.send(rbiData);
});

app.get("/wins", (req, res) => {
    res.send(winsData);
});

app.listen(port, () => {
    console.log(`Port is listening on port 3000`);
});