//Actualizado 29/11/2021


import {server} from "./server.js"
import "./database.js"

const puertoLocal = 4000;

//process.env.PORT es el puerto asignado automaticamente en heroku
server.start({port:process.env.PORT},({port})=>{
console.log("conectado a",port);
})


