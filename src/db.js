var typeorm = require("typeorm")

var dataSource = new typeorm.DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "Laurausuga260303**",
    database: "dbDevUnaula",
    synchronize: true,
    entities: [],
})

 async function conection(){
    try {
        await dataSource.initialize()
        console.log('Se ha conectado la base de datos')
        
    } catch (error) {
        console.log('Ha ocurrido un error')
    }
 
}

module.exports = {conection}
