import pkg from 'mongoose';

const {Schema, model} =pkg;


const observacionSchema = new Schema({

datoRegistrado:{
    type:String,
    required:true
},

autor:{
    type: String,
    required:true
},

avance:{
    type: String,
    required:true
},

proyectoNombre:{
    type:String,
    required:true
},


});



export default model ("Observacion", observacionSchema,"observaciones")