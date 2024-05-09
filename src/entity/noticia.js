const EntitySchema = require("typeorm").EntitySchema
const noticia = new EntitySchema({
    name: "noticia",
    tableName: "tblnoticia",
    columns: {
        idNoticia: {
            primary: true,
            type: "int",
            generated: true
            },
        titulo: {
            type: "varchar"
        },
        descripcion: {

            type: "varchar"
        },
        contenido: {
            type: "text"
        },
        fechaPublicacion: {
            type: "date"
        },
        foto: {
            type: "varchar"
        },
        idAdministrador: {
            type: "varchar"
        }


        

} } )

module.exports = noticia;



