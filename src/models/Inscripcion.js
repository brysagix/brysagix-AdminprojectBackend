import pkg from 'mongoose';

const {Schema, model} =pkg;


const inscripcionSchema = new Schema({

nombre:{
    type:String,
    required:true
},

apellido:{
    type:String,
    required:true
},

idEstudiante:{
    type: Number,
    required:true
},

proyecto:{
    type:String,
    required:true
},

estadoSolicitud:{
    type:String,
    required:true
},


});



export default model ("Inscripcion", inscripcionSchema,"inscripciones")