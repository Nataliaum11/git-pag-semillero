const { EntitySchema } = require("typeorm");

const Administrador = new EntitySchema({
    name: "administrador",
    tableName: "tblAdministrador",
    columns: {
        idAdministrador: {
            primary: true,
            type: "varchar",

        },
        idUsuarios: {
            type: "varchar",

        },
        cargo: {
            type: "varchar",

        }
    },

});

module.exports = Administrador;
