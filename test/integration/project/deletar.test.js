const ProjectController = require('../../../src/controller/project'); 
const conexao = require('../../../src/config/database')

describe("Deletar projeto", () => {

    beforeAll(async () => {
        this.transaction = await conexao.transaction();
     })
  
     afterAll(() => {
        this.transaction.rollback();
     })


    it("Deletar um projeto", async () => {

        const request = await ProjectController.deletarProject(1, this.transaction);

        expect(request).toBe("Projeto deletado");
    });
});