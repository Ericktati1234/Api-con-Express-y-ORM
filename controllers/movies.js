const express = require('express');
const Movie = require('../models/movie');
const Director = require('../models/director');
const Genre = require('../models/genre');

async function create(req, res, next){
    const title = req.body.title;
    const directorId = req.body.directorId;
    const genreId = req.body.genreId;
    
    let director = await Director.findOne({"_id": directorId});
    let genre = await Genre.findOne({"_id": genreId});

    let movie = new Movie({
        title: title,
        director: director,
        genre: genre
    });

    movie.save().then(obj => res.status(200).json({
        msg: "Pelicula almacenada correctamente",
        obj: obj
    })).catch(ex => res.status(500).json({
        msg: "No se pudo crear la pelicula",
        obj: ex
    }));
}

function list(req, res, next){
    Movie.find().populate("_director").populate("_genre").then(objs => res.status(200).json({
        msg: "Lista de peliculas",
        obj: objs
    })).catch(ex => res.status(500).json({
        msg: "No se pudo obtener la lista de peliculas",
        obj: ex
    }));
}

function index(req, res, next){

}

function replace(req, res, next){

}

function update(req, res, next){

}

function destroy(req, res, next){

}

module.exports = {
    create, list, index, replace, update, destroy
}