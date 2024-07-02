const request = require('supertest')
const app = require('../../../src/index')


describe('TaskApi', () => {

    afterAll(async () => {
        

    })
        test('Criar task', async () => {
            const task = await request(app)
            .post('/api/v1/task')
            .send({
                titulo: 'titulo 1',
                descricao: 'descricao 1'
            })
                           
            expect(task.statusCode).toBe(201);
            expect(task.nome).toEqual(task.nome)
            expect(task.email).toEqual(task.email)
        })
})