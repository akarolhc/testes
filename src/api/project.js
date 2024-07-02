const controller = require('../controller/project');
const project = require('../models/project');

class ProjectApi {
    async createProject(req, res) {
        const title = req.body.title;
        const description = req.body.description;
        const status = req.body.status;
        const idUser = req.body.idUser;

        try {
            const result = await controller.createProject(title, description, status, idUser);
            console.log(result)
            return res.status(201).send(result);
        } catch (err) {
            console.log(err)
            return res.status(400).send({ error: "Erro na criação do projeto" })
        }
    }

    async alterarProject(req, res) {
        const {id} = req.params;
        const title = req.body.title;
        const description = req.body.description;
        const status = req.body.status;
        const idUser = req.body.idUser;
    
        try {
            const result = await controller.update(Number(id), title, description, status, idUser);
            return res.status(200).send(result);
            
        } catch (err) {
            return res.status(400).send({ error: err.message })
        }
    }

    async deletarProject(req, res) {
        const { id } = req.params;

        try {
            await controller.deletarProject(Number(id));
            return res.status(204).send();
        } catch (err) {
            return res.status(400).send({ error: err })
        }
    }
    
    async listarProject(req, res) {
        try {
            const result = await controller.listarProject();
            return res.status(200).send(result);
        } catch (err) {
            return res.status(400).send({ error: err })
        }
    }
}

module.exports = new ProjectApi();
