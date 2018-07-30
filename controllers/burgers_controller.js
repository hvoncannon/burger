var express = require('express');
var burger = require("../models/burger.js");

var router = express.Router();

router.get('/', function(req, res) {
    res.redirect("/burgers");
});

router.get('/burgers', function(req, res) {
    burger.all(function(burgerData) {
        res.render('index', {burger_data: burgerData});
    });
});

router.put('/burgers/:id', function(req, res){
    burger.eat(req.params.id)
    res.sendStatus(200);
});

router.post('/burgers/create', function(req, res) {
    burger.new(req.body.burger_name, function(result) {
        res.redirect('/');
    });
});

module.exports = router;