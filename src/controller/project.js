const Project = require("../models/project");

class ProjectController {
  async createProject(title, description, status, idUser, transaction) {
    if (!title || !description || !status || !idUser) {
      throw new Error({ error: "Erro ao criar o projeto" });
    }

    const project =  await Project.create({ title, description, status, idUser }, { transaction });

    return project;
  }

  async listarProject() {
    return Project.findAll();
  }

  async getOne(req, res) {
    const { id } = req.params;
    const project = await Project.findById(id);
    res.json(project);
  }

  async update(id, title, description, status, idUser, transaction) {
    if (!id || !title || !description || !status || !idUser) {
      throw new Error( "Não foi possível atualizar!" );
    }

    const projetoEncontrado = await Project.findByPk(id);

    if (!projetoEncontrado) {
      throw new Error("Projeto não encontrado!");
    }

    projetoEncontrado.title = title;
    projetoEncontrado.description = description;
    projetoEncontrado.status = status;
    projetoEncontrado.idUser = idUser;

    projetoEncontrado.save({ transaction });

    return projetoEncontrado;
  }

  async deletarProject(id, transaction) {
    if (!id) {
      throw new Error({ error: "Não foi possível deletar o projeto!" });
    }
    const project = await Project.findByPk(id);
    if (!project) {
      throw new Error("Projeto não encontrado!");
    }
     project.destroy({ transaction });

     return "Projeto deletado"
  }
}

module.exports = new ProjectController();
