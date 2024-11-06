const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/user');

function home(req, res, next) {  
    res.render('index', { title: 'Express' });
}

function login(req, res, next) {  
    const email = req.body.email; 
    const password = req.body.password;

    User.findOne({ "_email": email }).then(user => {
        if (user) {
            bcrypt.hash(password, user.salt, (err, hash) => {
                if (err) {
                    res.status(403).json({
                        msg: 'Usuario y/o contraseña incorrectos',
                        obj: null
                    });
                } else if (hash == user.password) {  
                    res.status(200).json({
                        msg: 'Sesión iniciada correctamente',
                        obj: null
                    });
                } else {
                    res.status(403).json({
                        msg: 'Usuario y/o contraseña incorrectos',
                        obj: null
                    });
                }
            });
        } else {
            res.status(403).json({
                msg: 'Usuario y/o contraseña incorrectos',
                obj: null
            });
        }
    });
}

module.exports = { home, login };
