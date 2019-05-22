const Cep = require('./models/ceps');
const router = require('express').Router();

async function findBY(campo, value){
    const resultJson = '';
    await Cep.find({ campo: value}, (err, result) => {
        if(err) return (err);
        else 
        return result;
    });
}
