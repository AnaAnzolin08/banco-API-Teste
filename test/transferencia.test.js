const request = require('supertest');
const { expect } = require('chai');
require('dotenv').config();
const { obterToken } = require('../helpers/autenticacao')

describe('Transferências', () => {
  describe('POST /transferencias', () => {
    let token 

    beforeEach(async () => {
         token = await obterToken('Julio.lima', '123456');

    })

    it('Deve retornar sucesso com 201 quando o valor da transferência for igual ou acima de 10,00', async () => {
        
      const resposta = await request(process.env.BASE_URL)
        .post('/transferencias')
        .set('Content-Type', 'application/json') // Removido espaço extra!
        .set('Authorization', `Bearer ${token}`)
        .send({
          contaOrigem: 1,
          contaDestino: 2,
          valor: 11
        });

      expect(resposta.status).to.equal(201);
    });

    it('Deve retornar falha 422 quando o valor da transferência for abaixo de 10,00', async () => {

      const resposta = await request(process.env.BASE_URL)
        .post('/transferencias')
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${token}`)
        .send({
          contaOrigem: 1,
          contaDestino: 2,
          valor: 8
        });

      expect(resposta.status).to.equal(422); // Corrigido: 422 é unprocessable entity
    });
  });
});