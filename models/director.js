const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2')
//Esquema define como esta en la base de datos
const schema = mongoose.Schema({
    _name:String,
    _lastName:String

});

//La clase define como lo vamos a modificar por medio de la aplicacion, define los objetos

//Estos se conocen como Pojo, son clases con estructuras sencillas que solo sirven para manipular datos.

class Director {

    constructor(name,lastname){
        this._name = name;
        this._lastName = lastName;
    }

    get name(){
        return this._name
    }

    set name(v){
        this._name = v;
    }

    get lastName(){
        return this._lastName
    }

    set lastName(v){
        this._lastName = v;
    }

}


schema.loadClass(Director);
schema.plugin(mongoosePaginate);

module.exports = mongoose.model('Director',schema);