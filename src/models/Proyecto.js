import pkg from 'mongoose';

const {Schema, model} =pkg;


const proyectoSchema = new Schema({

nombre:{
    type:String,
    required:true
},

iPrincipal:{
    type:String,
    required:false
},

investigadores:{
    type: [String],
    required:false
},

objPrincipal:{
    type:String,
    required:false
},

objSecundario:{
    type:[String],
    required:false
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
    required:false
},

presupuesto:{
    type:Number,
    required:false
},

});



export default model ("Proyecto", proyectoSchema,"proyecto")