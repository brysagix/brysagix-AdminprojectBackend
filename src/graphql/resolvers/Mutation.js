import Usuario from "../../models/Usuario.js";
import Proyecto from "../../models/Proyecto.js";
import Inscripcion from "../../models/Inscripcion.js";
import Observacion from "../../models/Observacion.js";


const Mutation = {


  createUser: async (_, { nombre, apellido,personalID, correo, rol, estado }) => {
    const newUser = new Usuario({ nombre, apellido,personalID, correo, rol, estado  });
    return await newUser.save();
  },

  deleteUser: async (_,{personalID}) => {
    return await Usuario.findOneAndRemove({personalID:{$eq:personalID}});
  },


  actualizarUser: async (_,{nombre,apellido,personalID,correo,rol,estado}) => {
    return await Usuario.findOneAndUpdate(
      {personalID}, 
      {nombre: nombre,
       apellido: apellido,
      correo:correo,
      personalID:personalID,
      rol:rol,
      estado:estado
    }
      );
  },

  createProject: async (_, {nombre,iPrincipal,investigadores,objPrincipal, objSecundario,estado,habilitado,avances,presupuesto }) => {
    const newUser = new Proyecto({ nombre,iPrincipal,investigadores,objPrincipal, objSecundario,estado,habilitado,avances,presupuesto});
    return await newUser.save();
  },

  deleteProject: async (_,{nombre}) => {
    return await Proyecto.findOneAndRemove({nombre:{$eq:nombre}});
  },

  actualizarProject: async (_,{nombre,iPrincipal,investigadores,objPrincipal, objSecundario,estado,habilitado,avances,presupuesto }) => {
    return await Proyecto.findOneAndUpdate(
      {nombre}, 
      { nombre:nombre,
        iPrincipal:iPrincipal,
        investigadores:investigadores,
        objPrincipal:objPrincipal, 
        objSecundario:objSecundario,
        estado:estado,
        habilitado:habilitado,
        avances:avances,
        presupuesto:presupuesto  }
      );
  },

  createInscription: async (_, {nombre,apellido,idEstudiante,proyecto, estadoSolicitud}) => {
    const newUser = new Inscripcion({ nombre,apellido,idEstudiante,proyecto, estadoSolicitud});
    return await newUser.save();
  },

  deleteInscription: async (_,{nombre,proyecto}) => {
    return await Inscripcion.findOneAndRemove( {  nombre:  {$eq:nombre} , proyecto: {$eq:proyecto}  }    );
  },



  actualizarInscripcion: async (_,{nombre,proyecto,estadoSolicitud}) => {
    return await Inscripcion.findOneAndUpdate(
      {nombre,proyecto},
      {
        estadoSolicitud: estadoSolicitud,
      }
      );
  },


  agregarInvestigador: async (_,{nombre,estudianteAgregado}) => {
    return await Proyecto.findOneAndUpdate(
      {nombre},
      {
        $addToSet: { investigadores: estudianteAgregado },
      }
      );
  },

  agregarAvance: async (_,{nombre,avances}) => {
    return await Proyecto.findOneAndUpdate(
      {nombre},
      {
        $addToSet: { avances: avances },
      }
      );
  },

  deleteAvance: async (_,{nombre,avances}) => {
    return await Proyecto.findOneAndUpdate(
      {nombre},
      {
        $pull: { avances: avances },
      }
      );
  },

  createObservacion: async (_, { datoRegistrado, autor,avance,proyectoNombre}) => {
    const newUser = new Observacion({datoRegistrado, autor,avance,proyectoNombre  });
    return await newUser.save();
  },

  deleteObservacion: async (_,{datoRegistrado,autor}) => {
    return await Observacion.findOneAndRemove({datoRegistrado:{$eq:datoRegistrado},autor:{$eq:autor}});
  },

};

export default Mutation;

