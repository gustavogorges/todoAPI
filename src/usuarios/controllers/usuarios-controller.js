const express = require('express');
const routes = express.Router();
const Usuario = require('../models/usuario');

function createRoute() {
    routes.post('/usuarios', async (req, res) => {
        console.log('Create', req.body)
        await Usuario.create(req.body)
        res.json();
    })
}

function findAllRoute() {
    routes.get('/usuarios', (req, res) => {
        console.log('Get',req.params )
        res.json([]);
    })
}

function findByIdRoute() {
    routes.get('/usuarios/:id', (req, res) => {
        console.log('Get', req.params)
        res.json();
    })
}

function updateRoute() {
    routes.put('/usuarios', (req, res) => {
        console.log('Update', req.body)
        res.json([]);
    })
}

function removeRoute() {
    routes.delete('/usuarios/:id', (req, res) => {
        console.log('Remove', req.params)
        res.json();
    })
}


function registraUsuarioRotas () {
    findAllRoute();
    createRoute();
    findByIdRoute();
    updateRoute();
    removeRoute();
    return routes;
}



module.exports =  registraUsuarioRotas;