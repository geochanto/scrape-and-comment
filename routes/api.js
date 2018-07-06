const express = require('express');
const router  = express.Router();

const fetch_controller = require('../controllers/fetch');


router.get("/fetch", fetch_controller.fetchHeadlines);

router.get("/articles", function(req, res) { 
    
});

router.get("/articles/:id", function(req, res) { 
    
});

router.post("/articles/:id", function(req, res) { 
    
});

module.exports = router;