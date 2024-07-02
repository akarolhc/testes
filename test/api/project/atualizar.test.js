const app = require("../../../src/index");
const request = require("supertest");

describe("Atualizar Projeto", () => {
  beforeAll(async () => {
    console.log("Iniciando os testes de API...");
  });
  
  afterAll(async () => {
    console.log("Finalizando os testes!");
  });

  it('atualizar Projeto', async () => {
    const project = await request(app)
    .put('/api/v1/project/2')
    .send({
        title: "Teste 1",
        description: "teste alteração",
        status: "Finalizado",
        idUser: "37"
    })
                   
    expect(project.statusCode).toBe(200);
    expect(project.nome).toEqual(project.nome)
    expect(project.email).toEqual(project.email)
    
})
});
