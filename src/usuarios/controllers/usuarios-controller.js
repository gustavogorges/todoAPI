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
    routes.get('/usuarios', async (req, res) => {
        const usuarios = await Usuario.findAll();
        res.json(usuarios);
    })
}

function findByIdRoute() {
    routes.get('/usuarios/:id', async (req, res) => {
        res.json(await Usuario.findOne({
            where: {
                id : req.params.id
            }
        }));
    })
}

function updateRoute() {
    routes.put('/usuarios/:usuario', async(req, res) => {
        console.log(req.body)
        res.json(await Usuario.update(
                req.body,{
                    where: {
                        id: req.body.id
                    }
                }
            ));
    })
}

function removeRoute() {
    routes.delete('/usuarios/:id', async (req, res) => {
        res.json(await Usuario.destroy({
            where: {
                id: req.params.id
            }
        }));
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