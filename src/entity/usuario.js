const { EntitySchema } = require("typeorm");

const usuario = new EntitySchema({
    name: "usuario",
    tableName: "tblUsuarios",
    columns: {
        idUsuarios: {
            primary: true,
            type: "varchar",
        },
        nombre: {
            type: "varchar",
        },
        apellido: {
            type: "varchar",
        },
        contraseña: {
            type: "varchar",
        },
        correo: {
            type: "varchar",
        },
        tipoUsuario: {
            type: "enum",
            enum: ["usuario", "administrador"],
        },
    },
});

module.exports = usuario;
