const { DataTypes } = require('sequelize');
const database = require('../config/database');

class Task {
    constructor() {
        this.model = database.define('task', {
            id: {
                type: database.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            titulo: {
                type: database.Sequelize.STRING
            },
            descricao: {
                type: database.Sequelize.STRING
            },
            idProject: {
                type: DataTypes.INTEGER,
                references: {
                    model: 'projects',
                    key: 'id'
                }
            }
        });
    }
}

module.exports = (new Task).model;