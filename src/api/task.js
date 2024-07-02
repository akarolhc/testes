const controller = require('../controller/task');
const task = require('../models/task');

class TaskApi {

    async criarTask(req, res) {
        const titulo = req.body.titulo
        const descricao = req.body.descricao;
        const idProject = req.body.idProject;

        try {
            const task = await controller.criarTask(titulo, descricao, idProject); 
            return res.status(201).send(task);
        } catch (error) {
            return res.status(400).send({ error: error.message })
        }
    }

    async alterarTask(req, res) {
        const { id } = req.params;
        const { titulo, descricao, idProject } = req.body;

        try {
            const task = await controller.alterarTask(Number(id), titulo, descricao, idProject); 
            return res.status(200).send(task);
        } catch (error) {
            return res.status(400).send({ error: error.message })
        }
    }

    async deletarTask(req, res) {
        const { id } = req.params;

        try {
            await controller.deletarTask(Number(id));
            return res.status(204).send();
        } catch (error) {
            return res.status(400).send({ error: error.message })
        }
    }

    async listarTask(req, res) {

        try {
            const task = await controller.listarTask();
            return res.status(200).send(task);
        } catch (error) {
            return res.status(400).send({ error: error.message })
        }
    }
}

module.exports = new TaskApi();