const ProjectController = require('../../../src/controller/project'); 

describe("Listar projetos", () => {

    it("Listar projetos", async () => {

        const request = await ProjectController.listarProject();

        expect(request.length).toBeGreaterThan(0)
    });
});