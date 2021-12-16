import Usuario from "../../models/Usuario.js";
import Proyecto from "../../models/Proyecto.js";
import Inscripcion from "../../models/Inscripcion.js";
import Observacion from "../../models/Observacion.js";

const Query = {
//Cada una es una consulta hola y productos
  saludame() {
    return "Hola bitch";
  },
  despedite() {
    return "Chao bitch";
  },
  usuarios: async () => {
    return await Usuario.find();
  },

  
  usuariosEstudiante: async () => {
    return await Usuario.find({rol:{$eq:"Estudiante"}}
      );
  },

  validarUsuario: async (_,{correo}) => {
    return await Usuario.findOne({correo:{$eq:correo}}
      );
  },

  proyectos: async () => {
    return await Proyecto.find();
  },

  proyectosLider: async (_,{iPrincipal}) => {
    return await Proyecto.find({iPrincipal:{$eq:iPrincipal}}
      );
  },

  proyectosEstudiante: async (_,{investigadores}) => {
    return await Proyecto.find({investigadores:investigadores}
      );
  },

  inscripciones: async () => {
    return await Inscripcion.find();
  },

  avancesNombreProyecto: async (_,{nombre}) => {
    return await Proyecto.find({nombre:{$eq:nombre}}
      );
  },


  observaciones: async () => {
    return await Observacion.find();
  },

  
  observacionesByAvance: async (_,{avance}) => {
    return await Observacion.find({avance:{$eq:avance}}
      );
  },


};

export default Query;
