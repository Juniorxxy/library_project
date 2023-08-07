import express from "express"

const app = express();

app.use(express.json());

app.get('/', function(req, res) {
    res.send('oi');
});

app.post('/', function(req, res) {
    res.send('Criado com sucesso')
});

app.listen(3333, () => {
    console.log('aplicativo rodando na porta 3333')
})