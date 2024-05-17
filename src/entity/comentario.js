const EntitySchema = require("typeorm").EntitySchema
const comentario = new EntitySchema({
    name: "comentario",
    tableName: "tblComentario",
    columns: {
        idComentario: {
            primary: true,
            type: "int",
            generated: true
        },
        contenido: {
            type: "varchar"
        },
        fechaHoraPublicacion: {
            type: "date"
        },
        estado:{
            type: "varchar"
        },
        idUsuario: {
            type: "varchar"
        },
        idNoticia: {
            type: "int"
        }

    }
})

module.exports = comentario;





