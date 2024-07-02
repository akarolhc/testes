const UserController = require('../../../src/controller/user'); 
const conexao = require('../../../src/config/database')

describe("Adicionar um usuario", () => {

    beforeAll(async () => {
        this.transaction = await conexao.transaction();
     })
  
     afterAll(() => {
        this.transaction.rollback();
     })


    it("Adicionar um usuario", async () => {

        const User = {
            nome: "Ana Karolina Coelho",
            email: "anakarolina@gmail.com",
            senha: "senhaa12345"
        }
    
        const { dataValues } = await UserController.alterarUsuario(1,User.nome, User.email, User.senha, this.transaction);

        expect(dataValues.nome).toBe(User.nome);
        expect(dataValues.email).toBe(User.email);
        
    });
});