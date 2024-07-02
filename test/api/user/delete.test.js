const app = require('../../../src/index')
const request = require('supertest')

describe('Deletar usuário', () => {

    beforeAll(async () => {
        console.log('Inicializando os testes...')
    })

    afterAll(async () => {
        console.log('Finalizando os testes!')
    })

        it('Deletar usuário', async () => {
            const response = await request(app)
            .delete('/api/v1/user/36');
            console.log(response.body)
            expect(response.statusCode).toBe(204);
        })
})