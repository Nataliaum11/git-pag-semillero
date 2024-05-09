const { EntitySchema } = require("typeorm");

const Usuario = new EntitySchema({
    name: "Usuario",
    tableName: "tblUsuarios",
    columns: {
        idUsuarios: {
            primary: true,
            type: "varchar",
            length: 25
        },
        nombre: {
            type: "varchar",
            length: 50
        },
        apellido: {
            type: "varchar",
            length: 50
        },
        contraseña: {
            type: "varchar",
            length: 50
        },
        correo: {
            type: "varchar",
            length: 50,
            unique: true
        },
        tipoUsuario: {
            type: "enum",
            enum: ["usuario", "administrador"]
        }
    },
    relations: {
        administradores: {
            target: "Administrador",
            type: "one-to-many",
            inverseSide: "usuario"
        }
    }
});

module.exports = Usuario;
