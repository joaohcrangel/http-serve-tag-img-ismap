const express = require('express');
const app = express();
const port = 3000;

app.get('/ismap', (req, res) => {

    const url = req.url.split('?');

    if (url.length <= 1) {

        res.json({error: 'Ismap não foi enviado.'});

    } else {

        const qs = url[1].split(',');

        res.send({
            x: qs[0],
            y: qs[1]
        });

    }

});

app.listen(port, () => console.log(`Servidor rodando na porta ${port}...`));