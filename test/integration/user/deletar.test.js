const UserController = require('../../../src/controller/user'); 
const conexao = require('../../../src/config/database')

describe("Deletar usuario", () => {

    beforeAll(async () => {
        this.transaction = await conexao.transaction();
     })
  
     afterAll(() => {
        this.transaction.rollback();
     })


    it("Deletar usuario", async () => {

        const request = await UserController.deletarUsuario(1, this.transaction);

        expect(request).toBe("Usuario deletado");
    });
});