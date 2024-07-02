const service = require('../../../src/controller/project')
const conexao = require('../../../src/config/database')

describe("Atualizar Projeto", () => {

   beforeAll(async () => {
      this.transaction = await conexao.transaction();
   })

   afterAll(() => {
      this.transaction.rollback();
   })

   test("Atualizar projeto", async () => {
      const dataTest = {
         title: "Teste Edição",
         description: "Descriçao Editada",
         status: "ativo",
         idUser: 1
      }

      const { dataValues } = await service.update(1,dataTest.title, dataTest.description, dataTest.status, dataTest.idUser, this.transaction)

      expect(dataValues.title).toBe(dataTest.title)
      expect(dataValues.description).toBe(dataTest.description)
      expect(dataValues.status).toBe(dataTest.status)
      expect(dataValues.idUser).toBe(dataTest.idUser)
      
   })
})