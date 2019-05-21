const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
const ceps = require('../src/models/ceps');

const should = chai.should();

chai.use(chaiHttp);

let cep = '';
let id = '';
let logradouro = '';
let token = '';

describe('CEPS', () => {
    before(function (next) {
        ceps.remove({}, function (err) {
            next();
        });
    });

    it('Cadastro de novo cep', (done) => {
        const newCep = {
            "cep": "45200000",
            "tipoLogradouro": "Rua",
            "logradouro": "Ruy Barbosa",
            "bairro": "Centro",
            "cidade": "Jequié",
            "uf": "Bahia"
        }
        chai.request(server)
            .post('/cep')
            .send(newCep)
            .set('Authorization', 'Bearer ' + token)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.have.property('cep');
                cep = res.body.property.cep;
                logradouro = res.body.property.logradouro;
                id = res.body.property._id;
                done();
            });
    });
    it('Busca de endereços pelo cep', (done) => {
        const cep = '45200000';
        chai.request(server)
            .get('/cep')
            .set('Authorization', 'Bearer ' + token)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.have.property('cep');
                done();
            })

    });
    it('Busca de cep pelo logradouro', (done) => {
        done();
    });
    it('Busca de cep pelo ID', (done) => {
        done();
    })
    it('Alterar cep pelo ID', (done) => {
        done();
    });
});