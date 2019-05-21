const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
const user = require('../src/models/user');

const should = chai.should();

chai.use(chaiHttp);

let idUse = '';
let token = '';

describe('Users', () => {
    before((next) => {
        user.remove({}, (err) => {
            next();
        });
    });

    it('Cadastro de usuario.', (done) => {
        const newUser = {
            "name": "User",
            "email": "user@user.com",
            "password": "user"
        };
        chai.request(server)
            .post('/user')
            .send(newUser)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.have.property('user');
                done();
            });
    });

});
