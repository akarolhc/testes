const app = require('../../../src/index')
const request = require('supertest')

describe('Listar usuários', () => {
    
        beforeAll(async () => {
            console.log('Iniciando teste automatizado...')
        })
    
        afterAll(async () => {
            console.log('Finalizando teste')
        })
    
        it('Listar usuários', async () => {
            const response = await request(app)
                .get('/api/v1/user')
    
            expect(response.statusCode).toBe(200);
        })
})