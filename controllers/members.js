const express = require('express');

const Member = require('../models/member');


function create(req,res,next){
    let name = req.body.name;
    let lastName = req.body.lastName;
    let phone = req.body.phone;

    let address = new Object();
    address.street = req.body.street;
    address.number = req.body.number;
    address.zip = req.body.zip;
    address.city = req.body.city;
    address.state = req.body.state;
    address.country= req.body.country;


    //EN caso de enviarlo como un objeto desde el body es tan facil como 
    // let address = req.body.address;
    console.log(req.body);

     let member = new Member({
        name:name,
        lastName:lastName,
        phone:phone,
        address:address
     })

   

    member.save().then(obj => res.status(200).json({
        msg:"Miembro almacenado correctamente",
        obj: obj
    })).catch(ex => res.status(500).json({
        msg:"No se ha podido almacenar el miembro",
        obj: ex
    }));

}


function list(req,res,next){
    Member.find().populate("_director").then(objs => res.status(200).json({ //La funcion populate nos permite expandir las referencias de nuestro objeto
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
    Member.findOneAndDelete({"_id":id}).then( obj => res.status(200).json({
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