const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const acl = require('acl');

function home(req, res, next){
    res.render('index', { title: 'Express' });
}

function login(req, res, next){
    const email = req.body.email;
    const password = req.body.password;
    const jwtKey = "aedase423laoie323deijde402"; 

    User.findOne({"_email":email}).then(user => {
        if(user){
            bcrypt.hash(password, user.salt, (err, hash)=>{
                if(err){
                    res.status(403).json({
                        msg: "Usuario y/o contrasena incorrectos",
                        obj: null
                    });
                }
                if(hash === user.password){
                    res.status(200).json({
                        msg: "Sesion iniciada correctamente",
                        obj: jwt.sign({
                            data: user.id, 
                            exp: Math.floor(Date.now() / 1000) + 180
                        }, jwtKey) 
                    });
                }else{
                    res.status(403).json({
                        msg: "Usuario y/o contrasena incorrectos",
                        obj: null
                    });
                }
                
            });
        }else{
            res.status(403).json({
                msg: "Usuario y/o contrasena incorrectos",
                obj: null
            });
        }
    }).catch(/*err => {
        res.status(500).json({
            msg: "Error en el servidor",
            obj: err
    });
}*/);
}

module.exports = {home, login};

