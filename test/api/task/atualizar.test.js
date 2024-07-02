const app = require("../../../src/index");
const request = require("supertest");

describe("Atualizar task", () => {
  beforeAll(async () => {
    console.log("Inicializando testes...");
  });
  
  afterAll(async () => {
    console.log("Finalizando testes...");
  });

  it('atualizar task', async () => {
    const task = await request(app)
    .put('/api/v1/task/3')
    .send({
        titulo: 'Atualizando...',
        descricao: 'Task alterada!'
    })
                   
    expect(task.statusCode).toBe(200);
    expect(task.titulo).toEqual(task.titulo)
    expect(task.descricao).toEqual(task.descricao)
    
})
});
