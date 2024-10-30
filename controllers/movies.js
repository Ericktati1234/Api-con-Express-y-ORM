const express = require('express');

const Movie = require('../models/movie');
const Director = require('../models/director');


async function create(req,res,next){
    const title = req.body.title ;
    const directorId = req.body.directorId;

    let director = await Director.findOne({"_id" : directorId});
    // el await dice que "espera a que eso (lo que esta a la derecha) se resuelva y despues asignalo a la variable director"

    let movie = new Movie({
        title: title,
        director:director
    });

    movie.save().then(obj => res.status(200).json({
        msg:"Pelicula almacenada correctamente",
        obj: obj
    })).catch(ex => res.status(500).json({
        msg:"No se ha podido crear la pelicula",
        obj: ex
    }));
}


function list(req,res,next){
    Movie.find().populate("_director").then(objs => res.status(200).json({ //La funcion populate nos permite expandir las referencias de nuestro objeto
        msg: "Lista de directores",
        obj:objs
    })).catch(ex => res.status(500).json({
        msg: "No se pudo consultar la lista de directores",
        obj:ex
    }));

}

function index(req,res,next){


}


function replace(req,res,next){


}

function update(req,res,next){


}


function destroy(req,res,next){

    const id = req.params.id;
    Movie.findOneAndDelete({"_id":id}).then( obj => res.status(200).json({
        msg:"Pelicula eliminada correctamente",
        obj:obj
    })).catch(ex => res.status(500).json({
        msg: "No se pudo eliminar el directoor",
        obj:ex
    }));
}




module.exports = {
    create, list, index, replace, update, destroy
}