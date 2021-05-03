const routes = require("express").Router();
const multer = require('multer');
const multerConfig = require('./config/multer');

/** Faz uma chamada na rota post  */
routes.post("/posts", multer(multerConfig).single("file") , (req ,res) => {
    console.log(req.file)
    
    return res.json({hello: 'oi=xi'})
   // return res.send("hello")
});



/** Esportando as rotas do servidor */
module.exports = routes


/**
 * Dicas
 * RestFull : comunicação entre back e front atravez de json
 * 
 * Multer:
 * multer().single  para 1 e .array pra multiplos
 * 
 * Ler sobre
 * middleware
 */