import pkg from 'mongoose';

const {Schema, model} =pkg;


const usuarioSchema = new Schema({

nombre:{
    type:String,
    required:true
},

apellido:{
    type:String,
    required:true
},

personalID:{
    type: Number,
    required:true
},

correo:{
    type:String,
    required:true
},

rol:{
    type:String,
    required:true
},


estado:{
    type:String,
    required:true
},

});


export default model ("Usuarios", usuarioSchema,"usuarios")