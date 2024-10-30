
const mongoose = require('mongoose');

//Esquema define como esta en la base de datos
const schema = mongoose.Schema({
    _description:String,
    _status:Number
});

//La clase define como lo vamos a modificar por medio de la aplicacion, define los objetos

//Estos se conocen como Pojo, son clases con estructuras sencillas que solo sirven para manipular datos.

class Genre {

    constructor(description,status){
        this._description = description;
        this._status = status;
    }

    get description(){
        return this._description
    }

    set description(v){
        this._description = v;
    }

    get static(){
        return this._status
    }

    set status(v){
        this._status = v;
    }

}


schema.loadClass(Genre);

module.exports = mongoose.model('Genre',schema);