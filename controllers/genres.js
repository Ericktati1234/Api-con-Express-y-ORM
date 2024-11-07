const express = require('express');
const Genre = require('../models/genre');

function create(req, res, next) {
    const description = req.body.description;

    let genre = new Genre({
        description: description
    });

    genre.save().then(obj => res.status(200).json({
        msg: "Genero creado correctamente",
        obj: obj
    })).catch(ex => res.status(500).json({
        msg: "No se pudo almacenar el genero",
        obj: ex
    }));
}

function list(req, res, next) {
    Genre.find().then(objs => res.status(200).json({
        msg: "Lista de generos",
        obj: objs
    })).catch(ex => res.status(500).json({
        msg: "No se pudo consultar la lista de generos",
        obj: ex
    }));
}

function index(req, res, next) {
    const id = req.params.id;
    Genre.findOne({"_id":id}).then(obj => res.status(200).json({
        msg: `Genero con el id ${id}`,
        obj: obj
    }))
    .catch(ex => res.status(500).json({
        msg: "No se pudo consultar el genero",
        obj: ex
    }));
}

function replace(req, res, next) {
    const id = req.params.id;
    let description = req.body.description ? req.body.description: "";

    let genre = new Object({
        _description: description
    });

    Genre.findOneAndUpdate({"_id":id},genre)
        .then(obj => res.status(200).json({
            msg: "Se reemplazo el genero",
            obj: obj
        })).catch(ex => res.status(500).json({
            msg: "No se pudo reemplazar el genero",
            obj: ex
        }));
}

function update(req, res, next) {
    const id = req.params.id;
    let description = req.body.description;

    let genre = new Object();
    if(description) genre._description = description;

    Genre.findOneAndUpdate({"_id":id},genre)
        .then(obj => res.status(200).json({
            msg: "Se actualizo el genero",
            obj: obj
        })).catch(ex => res.status(500).json({
            msg: "No se pudo actualizar el genero",
            obj: ex
        }));
}

function destroy(req, res, next) {
    const id = req.params.id;
    Genre.findOneAndDelete({"_id":id}).then(obj => res.status(200).json({
        msg: "Genero eliminado correctamente",
        obj: obj
    }))
    .catch(ex => res.status(500).json({
        msg: "No se pudo consultar el genero",
        obj: ex
    }));
}

module.exports = {create, list, index, replace, update, destroy};