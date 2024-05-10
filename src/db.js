var typeorm = require("typeorm")
const noticia = require("./entity/noticia")
const administrador = require("./entity/administrador")
const usuario = require('./entity/usuario')

var dataSource = new typeorm.DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "qwerty",
    database: "dbDevUnaula",
    synchronize: false,
    entities: [noticia, administrador, usuario],
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
