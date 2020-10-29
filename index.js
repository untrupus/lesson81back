const express = require("express");
const app = express();
const mongoose = require("mongoose");
const links = require("./app/links");
const port = 8000;
const cors = require("cors");

app.use(cors());
app.use(express.json());

const run = async () => {
    await mongoose.connect("mongodb://localhost/newDB", {useNewUrlParser: true, useUnifiedTopology: true});
    app.use("/links", links);
    console.log("Connected");
    app.listen(port, () => {
        console.log(`Server started on ${port} port!`);
    });
};

run().catch(console.error);