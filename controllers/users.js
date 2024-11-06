const express = require('express');
const bcrypt = require('bcrypt')
const User = require('../models/user')

async function create(req, res, next) {
    let name = req.body.name;
    let lastName = req.body.lastName;
    let email = req.body.email;
    let password = req.body.password;

    let salt = await bcrypt.genSalt(10);

    const passwordHash = await bcrypt.hash(password, salt);

    let user = new User({
        name: name,
        lastName: lastName,
        email: email,
        password: passwordHash,
        salt: salt
    })

    user.save().then(obj => res.status(200).json({
        msg: 'Usuario almacenado corectamente',
        obj: obj
    })).catch(ex => res.status(500).json({
        msg: 'No se pudo alamacenar el usuario',
        obj: ex
    }))
}

function list(req, res, next) {
    res.send(`GET => /users/`);
}

function index(req, res, next) {
    res.send(`GET => /users/${req.params.id}`);
}

function replace(req, res, next) {
    res.send(`PUT => /users/:id`);
}

function update(req, res, next) {
    res.send(`PATCH => /users/:id`);
}

function destroy(req, res, next) {
    res.send(`DELETE => /users/:id`);
}

module.exports = {create,list,index,replace,update,destroy};

