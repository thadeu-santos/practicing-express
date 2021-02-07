const express = require('express');

const app = express();

app.get('/', (req, res) => res.send("Hello world!"));
app.get('/contato', (req, res) => res.send(['contato1', 'contato2', 'conato3']))

app.listen(8000, ()=> {
    console.log('O nome de Jesus é poderoso')
})
