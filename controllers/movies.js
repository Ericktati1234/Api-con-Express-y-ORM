const express = require('express');
const {Movie,Actor} = require('../db'); 

function create(req, res, next) {
    const title = req.body.title;
    const genreId = req.body.genreId;
    const directorId = req.body.directorId;

    Movie.create({
        title: title,
        genreId: genreId,
        directorId: directorId
    }).then(object => res.json(object)).catch(ex => res.send(ex));
}

function addActor(req, res, next) {
    const idMovie = req.body.idMovie;
    const idActor = req.body.idActor;

    Movie.findByPk(idMovie).then(movie =>{
        Actor.findByPk(idActor).then(actor =>{
            movie.addActor(actor);
            res.json(movie);
        }).catch(ex => res.send(ex));
        }).catch(ex => res.send(ex));
}


function list(req, res, next) {
    Movie.findAll({include:['genre','director']}).then(objects => res.json(objects)).catch(ex => res.send(ex));
}

function index(req, res, next) {
    const id = req.params.id;
    Movie.findByPk(id).then(object => res.json(object)).catch(ex => res.send(ex));
}

function replace(req, res, next) {
    const id = req.params.id;
    Genre.findByPk(id)
            .then(object => {
                const description = req.body.description ? req.body.description : ""; 
                const status = req.body.status ? req.body.status : null; 
                object.update({
                    description: description,
                    status: status
                }).then(obj => res.json(obj))
                  .catch(ex => res.send(ex))
            }).catch(ex => res.send(ex));
}

function update(req, res, next) {
    const id = req.params.id;
    Genre.findByPk(id)
            .then(object => {
                const description = req.body.description ? req.body.description : object.description; 
                const status = req.body.status ? req.body.status : object.status;
                object.update({
                    description: description,
                    status: status
                }).then(obj => res.json(obj))
                  .catch(ex => res.send(ex))
            }).catch(ex => res.send(ex));
}

function destroy(req, res, next) {
    const id = req.params.id;
    
    Genre.destroy({ where: { id : id} }).then(object => res.json(object)).catch(ex => res.send(ex));
}



module.exports = {create,list,index,replace,update,destroy,addActor};

