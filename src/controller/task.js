const Task = require('../models/task');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const saltRounds = 10;
const JWT_SECRET_KEY = 'moranguete';

class TaskController {
    async criarTask(titulo, descricao) {
        if (!titulo || !descricao) {
            throw new Error('Título e descrição são obrigatórios');
        }
        const novaTask = await Task.create({titulo, descricao});
        return novaTask;
    }

    async buscarPorId(id) {
        if (!id) {
            throw new Error('Id é obrigatório');
        }

        const task = await Task.findByPk(id);

        if (!task) {
            throw new Error('Task não encontrada');
        }

        return task;
    }

    async alterarTask(id, titulo, descricao) {
        if (!id) {
            throw new Error('ID é obrigatório');
        }
        if (!titulo || !descricao) {
            throw new Error('Título e descrição são obrigatórios');
        }
        const task = await this.buscarPorId(id);
        task.titulo = titulo;
        task.descricao = descricao;
        return task.save();
    }

    async deletarTask(id) {
        if (!id) {
            throw new Error('ID é obrigatório');
        }
        const task = await this.buscarPorId(id);
    
        await task.destroy();
    }    

    async listarTask() {
        return Task.findAll();
    }
}

module.exports = new TaskController();
