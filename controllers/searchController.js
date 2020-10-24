var express = require("express");

var router = express.Router();

var search = require("../models/search.js");

router.get("/", function(req, res) {
    search.all(function(data) {
        var hbsObject = {
            searches:data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});