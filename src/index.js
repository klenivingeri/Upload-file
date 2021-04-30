const express = require('express');

/** Instância do servidor */
const app = express();

/** Faz uma chamada na rota raiz/  */
app.get('/', (req ,res) => {
    return res.send('Hellow word')
});

/** Servidor ouvindo na portal 3000 */
app.listen(3000);