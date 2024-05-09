const { connection, dataSource } = require('../db');
const Administrador = require('../entity/administrador'); 

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




module.exports = {
    login
    
};



