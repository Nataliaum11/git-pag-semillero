const ingresar = (req, res) => {
    res.send('Creando comentario...');

}

const mostrar = (req, res) => {
    res.send('Obteniendo comentario...');
    //aca se desarrolla codigo de base datos
}

const actualizar = (req, res) => {
    res.send('Actualizando comentario...');

}

const eliminar = (req, res) => {
    res.send('Eliminando comentario...');

}

module.exports = {
    mostrar,
    ingresar,
    actualizar,
    eliminar
}