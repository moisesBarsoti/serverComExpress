const express = require('express');

const app = express();

app.get('/home', (req, res) => {
    res.status(200).send('<h1>Moisés é o melhor desenvolvedor!</h1>');
});

app.get('/people', (req, res) => {
    const pessoas = [
        {
            name: 'Laryssa',
            age: 13,
        },
        {
            name: 'Moisés',
            age: 19,
        }
    ];
    res.status(200).json(pessoas);
});

const port = 2000;

app.listen(port, () => console.log(`Rodando na porta: ${port}`));