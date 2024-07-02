const request = require('supertest')
const app = require('../../../src/index')


describe('ProjectApi', () => {

    afterAll(async () => {
        

    })
        test('Criar projeto', async () => {
            const project = await request(app)
            .post('/api/v1/project')
            .send({
                title: "Teste 1",
                description: "teste",
                status: "Em andamento",
                idUser: "32"
            })
                           
            expect(project.statusCode).toBe(201);
            expect(project.title).toEqual(project.title)
            expect(project.description).toEqual(project.description)
            expect(project.status).toEqual(project.status)
            expect(project.idUser).toEqual(project.idUser)
        })
})