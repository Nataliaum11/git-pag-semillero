const todaslasnoticias = (req,res)=>{
    res.send('Pagnina de las noticias');
}
const mostrarNoticia = (req,res)=>{
    res.send('Pagnina de una noticia');
}

const ingresarNoticia = (req,res)=>{
    res.send('Ingresando una noticia...');
}

const actualizarNoticia = (req,res)=>{
    res.send('Actualizando una noticia...');

}

const eliminarNoticia = (req,res)=>{
    res.send('Eliminando una noticia...');

}


module.exports={
   todaslasnoticias,
   ingresarNoticia,
   actualizarNoticia,
   eliminarNoticia,
   mostrarNoticia
}