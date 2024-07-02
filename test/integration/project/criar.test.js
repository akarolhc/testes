const service = require('../../../src/controller/project')
const conexao = require('../../../src/config/database')

describe("Criar um projeto", () => {

   beforeAll(async () => {
      this.transaction = await conexao.transaction();
   })

   afterAll(() => {
      this.transaction.rollback();
   })

   test("Criar um projeto", async () => {
      const dataTest = {
         title: "Projeto",
         description: "Descriçao",
         status: "Em andamento",
         idUser: 1
      }
      

      const { dataValues } = await service.createProject(dataTest.title, dataTest.description, dataTest.status, dataTest.idUser, this.transaction)

      expect(dataValues.title).toBe(dataTest.title)
      expect(dataValues.description).toBe(dataTest.description)
      expect(dataValues.status).toBe(dataTest.status)
      expect(dataValues.idUser).toBe(dataTest.idUser)

   })
})