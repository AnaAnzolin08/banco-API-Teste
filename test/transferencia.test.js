const request = require('supertest');
const { expect } = require('chai');
require('dotenv').config();
const { obterToken } = require('../helpers/autenticacao')
const postTransferencias = require('../fixtures/postTransferencias.json')

  describe('Transferências', () => {
      let token

  beforeEach(async () => {
    token = await obterToken('Julio.lima', '123456')
  })

  describe('POST /transferencias', () => {
      it('Deve retornar sucesso com 201 quando o valor da transferência for igual ou acima de 10,00', async () => {
      const bodyTraferencias = { ...postTransferencias }

      const resposta = await request(process.env.BASE_URL)
        .post('/transferencias')
        .set('Content-Type', 'application/json') 
        .set('Authorization', `Bearer ${token}`)
        .send(bodyTraferencias)
        
        expect(resposta.status).to.equal(201);
    
      })
    
    
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
     
       
    describe('GET /transferencias/{id}', () => {
      
        it('Deve retornar sucesso com 200 e dados iguais ao registro de transferência contido no banco de dados quando o ID for válido', async () => {
          const resposta = await request(process.env.BASE_URL)
          .get('/transferencias/21')
          .set('Authorization', `Bearer ${token}`)

         
      
          expect(resposta.status).to.equal(200)
          expect(resposta.body.id).to.equal(21)
          expect(resposta.body.id).to.be.a('number')
          expect(resposta.body.conta_origem_id).to.equal(1)
          expect(resposta.body.conta_origem_id).to.equal(2)
          expect(resposta.body.conta_origem_id).to.equal(11.00)
      })

    })


      describe('GET /transferencias', () => {
      it('Deve retornar 10 elementos na paginação quando o limite for de 10 registros', async () => {
      const resposta = await request(process.env.BASE_URL)


      .get('/transferencias?page=1&limit=10')
      .set('Authorization', `Bearer ${token}`)

        console.log(resposta.body)
        expect(resposta.status).to.equal(200)
        expect(resposta.body.limit).to.equal(10)
        expect(resposta.body.transferencias).to.have.lengthOf(10)
    })
  })

})