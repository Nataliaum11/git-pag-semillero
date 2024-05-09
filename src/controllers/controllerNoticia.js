const { connection, dataSource } = require('../db');
const Noticia = require('../entity/noticia');

const todaslasnoticias = async (req, res) => {
    try {
       
        const repositorio = dataSource.getRepository("noticia");
        const noticias = await repositorio.find();
        res.json(noticias);
        console.log(noticias);
    } catch (error) {
        console.error('Error al obtener las noticias:', error);
        res.status(500).json({ error: 'Error al obtener las noticias' });
    }
};


const mostrarNoticia = async (req, res) => {
    try {
        const { idNoticia } = req.params;
        const repositorio = dataSource.getRepository("noticia");
        console.log(idNoticia);
        const noticia = await repositorio.findOne({ where: { idNoticia: idNoticia } });
        if (!noticia) {
            return res.status(404).json({ error: 'Noticia no encontrada' });
        }
        res.json(noticia);
    } catch (error) {
        console.error('Error al obtener la noticia:', error);
        res.status(500).json({ error: 'Error al obtener la noticia' });
    }
};


const ingresarNoticia = async (req,res)=>{
    try{
        const { titulo, descripcion, contenido, fechaPublicacion, foto, idAdministrador} = req.body;
        const noticia = { titulo, descripcion, contenido, fechaPublicacion, foto, idAdministrador};
        const repositorio = dataSource.getRepository("noticia");
        await repositorio.insert(noticia)
        res.json({msg:"noticia agregada"});
    } catch(error){
        console.error('Error al obtener la noticia:', error);
        res.status(500).json({ error: 'Error al obtener la noticia' });
        
    }
    
}

const actualizarNoticia = async (req, res) => {
    try {
        const { idNoticia } = req.params;
        const { titulo, descripcion, contenido, fechaPublicacion, foto, idAdministrador } = req.body;

        if (!idNoticia) {
            return res.status(400).json({ error: 'ID de noticia no proporcionado' });
        }

        const repositorio = dataSource.getRepository("noticia");

        await repositorio.update({ idNoticia: idNoticia }, {
            titulo,
            descripcion,
            contenido,
            fechaPublicacion,
            foto,
            idAdministrador
        });

        res.json({ msg: "Noticia actualizada correctamente" });
    } catch (error) {
        console.error('Error al actualizar la noticia:', error);
        res.status(500).json({ error: 'Error al actualizar la noticia' });
    }
};


const eliminarNoticia = async (req,res)=>{

    try {
        const { idNoticia } = req.params;
        if (!idNoticia) {
            return res.status(400).json({ error: 'ID de noticia no proporcionado' });
        }

        const repositorio = dataSource.getRepository("noticia");

        await repositorio.delete({idNoticia: idNoticia });

        res.json({ msg: "Noticia eliminada correctamente" });
    } catch (error) {
        console.error('Error al actualizar la noticia:', error);
        res.status(500).json({ error: 'Error al actualizar la noticia' });
    }
}


module.exports={
   todaslasnoticias,
   ingresarNoticia,
   actualizarNoticia,
   eliminarNoticia,
   mostrarNoticia
}