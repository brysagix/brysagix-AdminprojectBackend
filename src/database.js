import mongoose from "mongoose"

//Al conectar a la nube recordar pegar el enlacedesde Atlas
mongoose.connect("mongodb+srv://brysagix:admin@cluster0.3pttl.mongodb.net/gestionProyectos?retryWrites=true&w=majority",{
useNewUrlParser:true,
useUnifiedtopology:true
})
.then(db=>console.log("La base de datos está conectada"))
.catch(err=>console.log(err));