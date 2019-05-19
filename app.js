const express = require ('express');
const bodyParser = require ('body-parser');
const normalizePort = require ('normalize-port');
const port = normalizePort(process.env.PORT || '3000');

require('./src/database/database')('127.0.0.1:27017/api_ceps');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { extended: false }));

app.get('/', (req, res)=>{
    res.status(200).sendFile(__dirname + '/src/html/index.html');
});

app.listen(3000, () => {
    console.log("API rodando na porta " + port);
});