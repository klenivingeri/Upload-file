const express = require('express');
const morgan = require("morgan");

/** Instância do servidor */
const app = express();

/** Informa que vamos trabalhar com json, para ajudar na performace */
app.use(express.json());

/** Informa que vamos trabalhar com  url_urlencoded, facilita a parte de envido de arquivos  */
app.use(express.urlencoded({ extended: true }));

/** Dev é um formato pequno do morgan*/
app.use(morgan("dev"));

/** chama as nossas rotas */
app.use(require("./routes"));

/** Servidor ouvindo na portal 3000 */
app.listen(3000);



/**
 * 1 - index
 * 2 - router
 * 3 - file
 */