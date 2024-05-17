const { connection, dataSource } = require('../db');
const Comentario = require("../entity/comentario")

function getCurrentDateTimeCustom() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

const ingresar = async (req, res) => {
    try {
        const { idNoticia } = req.params;
        if (!idNoticia) {
            return res.status(400).json({ error: 'ID de noticia no proporcionado' });
        }
        const fechaHoraPublicacion = getCurrentDateTimeCustom();
        const { contenido, estado, idUsuario } = req.body;
        if (!contenido || !estado || !idUsuario) {
            return res.status(400).json({ error: 'contenido de comentario no proporcionado correctamente' });
        }
        const comentario = { contenido, fechaHoraPublicacion, estado, idUsuario, idNoticia };
        const repositorio = dataSource.getRepository("comentario");
        await repositorio.insert(comentario)
        res.json({ msg: "Comentario Agregado" });
    } catch (error) {
        console.error('Error al agregar el comentario:', error);
        res.status(400).json({ error: 'Error al ingresar el comentario' });

    }

}

const mostrar = async (req, res) => {
    try {
        const { idNoticia } = req.params;
        const repositorio = dataSource.getRepository("comentario");

        const comentario = await repositorio.find({ where: { idNoticia: idNoticia } });
        if (!comentario) {
            return res.status(404).json({ error: 'Noticia sin Comentarios' });
        }
        res.json(comentario);
    } catch (error) {
        console.error('Error al obtener los comentarios de la noticia:', error);
        res.status(500).json({ error: 'Error al comentarios de la noticia' });
    }
}

const actualizar = async (req, res) => {

    try {
        const { idNoticia, idComentario } = req.params;
        const fechaHoraPublicacion = getCurrentDateTimeCustom();
        const { contenido, estado, idUsuario } = req.body;

        if (!idNoticia) {
            return res.status(400).json({ error: 'ID de noticia no proporcionado' });
        }

        if (!idComentario) {
            return res.status(400).json({ error: 'ID de comentario no proporcionado' });
        }

        const repositorio = dataSource.getRepository("comentario");

        const validacion = await repositorio.findOne({ where: { idNoticia: idNoticia } });
        if (!validacion) {
            return res.status(404).json({ error: 'Noticia de comentario no encontrada' });
        }
        const validacion2 = await repositorio.findOne({ where: { idComentario: idComentario } });
        if (!validacion2) {
            return res.status(404).json({ error: 'Comentario no encontrado' });
        }

        await repositorio.update({ idComentario: idComentario }, {
            contenido, fechaHoraPublicacion, estado, idUsuario, idNoticia
        });

        res.json({ msg: "Comentario actualizado correctamente" });
    } catch (error) {
        console.error('Error al actualizar el comentario:', error);
        res.status(400).json({ error: 'Error al actualizar el comentario revisa los datos' });
    }
}


const eliminar = async (req, res) => {
    try {

        const { idNoticia, idComentario } = req.params;

        if (!idNoticia) {
            return res.status(400).json({ error: 'ID de noticia no proporcionado' });
        }

        if (!idComentario) {
            return res.status(400).json({ error: 'ID de comentario no proporcionado' });
        }

        const repositorio = dataSource.getRepository("comentario");

        const validacion = await repositorio.findOne({ where: { idNoticia: idNoticia } });
        if (!validacion) {
            return res.status(404).json({ error: 'Noticia de comentario no encontrada' });
        }
        const validacion2 = await repositorio.findOne({ where: { idComentario: idComentario } });
        if (!validacion2) {
            return res.status(404).json({ error: 'Comentario no encontrado' });
        }

        await repositorio.delete({ idComentario: idComentario });

        res.json({ msg: "Comentario eliminado correctamente" });

    } catch (error) {
        console.error('Error al eliminar el comentario:', error);
        res.status(500).json({ error: 'Error al eliminar el comentario' });
    }
}


module.exports = {
    mostrar,
    ingresar,
    actualizar,
    eliminar
}