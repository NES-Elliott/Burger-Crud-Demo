const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const models = require('../models')
const methodOverride = require('method-override')

router.get('/', function(req, res) {
    res.redirect('/burgers')
})

router.get('/burgers', function(req, res) {
    models.burger.findAll()
    .then(function(data){
        res.render('index', {burgers : data})
    })
})

router.post('/burgers/create', function(req, res) {
    models.burgers.create({
        burger_name: req.body.name,
        devoured: 0})
        .then(function() {
            res.redirect('/burgers')
        })
})

router.put('/burgers/update/:id', function(req, res) {
    const theId = req.params.id
    models.burgers.update(
        {devoured : true}, {where: { id: theId}}
    ).then(function() {
        res.redirect('/burgers')
    })
})

router.delete('/burgers/delete/:id', function(req, res) {
    const theId = req.params.id
    models.burgers.destroy(
        {where: { id: theId}}
    ).then(function() {
        res.redirect('/burgers')
    })
})

module.exports = router
