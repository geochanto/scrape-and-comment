const express = require('express');
const router  = express.Router();

const fetch_controller = require('../controllers/fetch');
const headline_controllers = require('../controllers/headline');
const note_controller = require('../controllers/note');

router.get("/fetch", fetch_controller.fetchHeadlines);

router.get("/headlines", headline_controllers.displayAllHeadlines);

router.get("/headlines/:id", headline_controllers.displayOneHeadline);

router.post("/headlines/:id", note_controller.addNote);

module.exports = router;