const express = require('express');
const router = express.Router();
const {nanoid} = require('nanoid');
const Link = require('../models/Links');

const createRouter = () => {
    router.get("/", async (req, res) => {
       try {
            const links = await Link.find();
            res.send(links);
       } catch (e) {
            res.status(500).send(e);
       }
    });

    router.get("/:id", async (req, res) => {
        const result = await Link.findOne({shortUrl: req.params.id});
        if (result) {
            // res.send(result);
            res.status(301).redirect(result.originalUrl);
        } else {
            res.sendStatus(404);
        }
    });

    router.post("/", async (req, res) => {
       const linkData = req.body;
       linkData.shortUrl = nanoid(6);
        const link = new Link(linkData);
        try {
            await link.save();
            res.send(link);
        } catch (e) {
            res.status(400).send(e);
        }
    });

    return router;
};

module.exports = createRouter();