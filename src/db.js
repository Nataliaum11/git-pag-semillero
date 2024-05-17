var typeorm = require("typeorm")
const noticia = require("./entity/noticia")
const administrador = require("./entity/administrador")
const usuario = require('./entity/usuario')
const comentario = require("./entity/comentario")
const dotenv = require('dotenv');
dotenv.config();

var dataSource = new typeorm.DataSource({
    type: "mysql",
    host: process.env.host,
    port: process.env.portdb,
    username: process.env.usernamedb,
    password: process.env.password,
    database: process.env.database,
    synchronize: false,
    entities: [noticia, administrador, usuario,comentario],
})

async function connection() {
    try {
        await dataSource.initialize()
        console.log('Se ha conectado la base de datos')

    } catch (error) {
        console.log('Ha ocurrido un error ' + error)
    }

}

module.exports = { connection, dataSource }
