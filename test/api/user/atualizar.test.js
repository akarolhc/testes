const app = require("../../../src/index");
const request = require("supertest");

describe("Atualizar usuário", () => {
  beforeAll(async () => {
    console.log("Inicializando os testes...");
  });
  
  afterAll(async () => {
    console.log("Finalizando teste!");
  });

  it('atualizar usuário', async () => {
    const user = await request(app)
    .put('/api/v1/user/35')
    .send({
        nome: 'Anaaa',
        email: 'aninaahadaquebrada@gmail.com',
        senha: 'senha1234'
    })
                   
    expect(user.statusCode).toBe(200);
    expect(user.nome).toEqual(user.nome)
    expect(user.email).toEqual(user.email)
    
})
});
