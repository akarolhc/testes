const app = require('../../../src/index')
const request = require('supertest')

describe('Listar task', () => {
    
        beforeAll(async () => {
            console.log('Iniciando teste automatizado...')
        })
    
        afterAll(async () => {
            console.log('Finalizando teste...')
        })
    
        it('Listar tasks', async () => {
            const response = await request(app)
                .get('/api/v1/task')
    
            expect(response.statusCode).toBe(200);
        })
})