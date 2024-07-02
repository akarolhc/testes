const request = require('supertest')
const app = require('../../../src/index')


describe('UserApi', () => {

    afterAll(async () => {
        

    })
        test('Criar usuário', async () => {
            const user = await request(app)
            .post('/api/v1/user')
            .send({
                nome: 'Ana',
                email: 'aninhadaquebrada@gmail.com',
                senha: 'senha1234'
            })
                           
            expect(user.statusCode).toBe(201);
            expect(user.nome).toEqual(user.nome)
            expect(user.email).toEqual(user.email)
        })
})