const UserController = require('../../../src/controller/user');

describe("Listar usuarios", () => {

    it("Listar usuarios", async () => {

        const request = await UserController.listarUsuarios();

        expect(request.length).toBeGreaterThan(0)
    });
});