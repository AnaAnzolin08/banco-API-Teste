const request = require('supertest');
const { expect } = require('chai');
require('dotenv').config();
const { obterToken } = require('../helpers/autenticacao')
const postTransferencias = require('../fixtures/postTransferencias.json')

describe('Transferências', () => {
  describe('POST /transferencias', () => {
    let token 

    beforeEach(async () => {
         token = await obterToken('Julio.lima', '123456');

    })
    
    it('Deve retornar sucesso com 201 quando o valor da transferência for igual ou acima de 10,00', async () => {
    const bodyTraferencias = { ...postTransferencias }

      const resposta = await request(process.env.BASE_URL)
        .post('/transferencias')
        .set('Content-Type', 'application/json') 
        .set('Authorization', `Bearer ${token}`)
        .send(bodyTraferencias)

      expect(resposta.status).to.equal(201);
    });

    it('Deve retornar falha 422 quando o valor da transferência for abaixo de 10,00', async () => {
        const bodyTraferencias = {...postTransferencias}
        bodyTraferencias.valor = 8
    
        const resposta = await request(process.env.BASE_URL)
        .post('/transferencias')
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${token}`)
        .send(bodyTraferencias)

        expect(resposta.status).to.equal(422)
        })
    })

})