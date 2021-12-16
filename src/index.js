//Actualizado 29/11/2021

import {server} from "./server.js"
import "./database.js"

server.start({port:4000},({port})=>{
console.log("conectado a",port);
})

