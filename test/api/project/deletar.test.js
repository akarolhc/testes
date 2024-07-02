const app = require('../../../src/index')
const request = require('supertest')

describe('Deletar projeto', () => {

    beforeAll(async () => {
        console.log('Inicializando testes...')
    })

    afterAll(async () => {
        console.log('Finalizando teste...')
    })

        it('Deletar projeto', async () => {
            const response = await request(app)
            .delete('/api/v1/project/7');
            console.log(response.body)
            expect(response.statusCode).toBe(204);
        })
})