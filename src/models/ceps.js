const mongoose = require('mongoose');

const CepSchema = new mongoose.Schema({
    cep: {
        type: String,
        required: true,
    },
    tipoLogradouro: {
        type: String,
        lowercase: true,
        enum: ['rua', 'avenida'],
    },
    logradouro: {
        type: String,
        required: true,
        lowercase: true,
    },
    bairro: {
        type: String,
        required: true,
        lowercase: true,
    },
    cidade: {
        type: String,
        required: true,
        lowercase: true,
    },
    uf: {
        type: String,
        required: true,
        lowercase: true,
    },
    createDate: {
        type: Date,
        default: Date.now,
    },
});

const Cep = mongoose.model('Cep', CepSchema);

module.exports = Cep;