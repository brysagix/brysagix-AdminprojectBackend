import pkg from 'mongoose';

const {Schema, model} =pkg;


const proyectoSchema = new Schema({

nombre:{
    type:String,
    required:true
},

iPrincipal:{
    type:String,
    required:true
},

investigadores:{
    type: [String],
    required:true
},

objPrincipal:{
    type:String,
    required:true
},

objSecundario:{
    type:[String],
    required:true
},


estado:{
    type:String,
    required:true
},

habilitado:{
    type:String,
    required:true
},

avances:{
    type:[String],
    required:true
},

presupuesto:{
    type:Number,
    required:true
},

});



export default model ("Proyecto", proyectoSchema,"proyecto")