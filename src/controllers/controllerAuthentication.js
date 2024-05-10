const { connection, dataSource } = require('../db');
const Administrador = require('../entity/administrador');
const Usuario = require('../entity/usuario');

const login = async (req, res) => {
    try {
        const { idAdministrador } = req.params;
        const repositorio = dataSource.getRepository("administrador");
        const administrador = await repositorio.findOne({ where: { idAdministrador: idAdministrador } });
        if (!administrador) {
            return res.status(404).json({ error: 'Administrador no encontrado' });
        }
        res.json(administrador);
    } catch (error) {
        console.error('Error al obtener la noticia:', error);
        res.status(500).json({ error: 'Error al obtener el administrador' });
    }
};


const crearUsuario = async (req, res) => {
    try {
        const { idUsuarios, nombre, apellido, contraseña, correo, tipoUsuario } = req.body;
        // Verificar si idusuarios es válido
        if (!idUsuarios) {
            throw new Error("idusuario es requerido");
        }
        const usuario = { idUsuarios, nombre, apellido, contraseña, correo, tipoUsuario };
        const repositorio = dataSource.getRepository("usuario");

        await repositorio.insert(usuario)
        res.json({ msg: "usuario agregado" });

    } catch (error) {
        console.error('Error al agregar el usuario:', error);
        res.status(400).json({ error: 'Error al agregar el usuario' });
    }
}

const mostrarUsuario = async (req, res) => {
    try {
        const { idUsuarios } = req.body;

        if (!idUsuarios) {
            return res.status(400).json({ error: 'ID del usuario no proporcionado' });
        }

        const repositorio = dataSource.getRepository("usuario");

        const usuario = await repositorio.findOne({ where: { idUsuarios: idUsuarios } });
        if (!usuario) {
            return res.status(404).json({ error: 'usuario no encontrado' });
        }
        res.json(usuario);
    } catch (error) {
        console.error('Error al obtener el usuario:', error);
        res.status(500).json({ error: 'Error al obtener el usuario' });
    }
};


const actualizarUsuario = async (req, res) => {
    try {
        const { idUsuarios, nombre, apellido, contraseña, correo, tipoUsuario } = req.body;

        if (!idUsuarios) {
            return res.status(400).json({ error: 'ID del usuario no proporcionado' });
        }

        const repositorio = dataSource.getRepository("usuario");

        await repositorio.update({ idUsuarios: idUsuarios }, { idUsuarios, nombre, apellido, contraseña, correo, tipoUsuario });

        res.json({ msg: "Usuario actualizado correctamente" });
    } catch (error) {
        console.error('Error al actualizar el usuario:', error);
        res.status(500).json({ error: 'Error al actualizar el usuario' });
    }
};


const eliminarUsuario = async (req, res) => {

    try {
        const { idUsuarios } = req.body;

        if (!idUsuarios) {
            return res.status(400).json({ error: 'ID del usuario no proporcionado' });
        }

        const repositorio = dataSource.getRepository("usuario");

        await repositorio.delete({ idUsuarios: idUsuarios });

        res.json({ msg: "Usuario eliminado correctamente" });
    } catch (error) {
        console.error('Error al eliminar el usuario:', error);
        res.status(500).json({ error: 'Error al eliminar el usuario' });
    }
}


module.exports = {
    login,
    mostrarUsuario,
    crearUsuario,
    actualizarUsuario,
    eliminarUsuario
};



