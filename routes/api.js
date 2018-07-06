const express = require('express');
const router  = express.Router();

const fetch_controller = require('../controllers/fetch');
const headline_controllers = require('../controllers/headline');

router.get("/fetch", fetch_controller.fetchHeadlines);

router.get("/headlines", headline_controllers.displayHeadlines);

router.get("/articles/:id", function(req, res) { 
    
});

router.post("/articles/:id", function(req, res) { 
    
});

module.exports = router;