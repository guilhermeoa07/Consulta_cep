const express = require ("express");
require('./src/database/database')('127.0.0.1:27017/api_ceps');

const app = express();

app.get('/', (req, res)=>{
    res.status(200).send("Hello....");
});

app.listen(3000, () => {
    console.log("api rodando");
});