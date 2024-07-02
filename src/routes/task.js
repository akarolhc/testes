const express = require('express')

const TaskApi = require('../api/task')
const router = express.Router()

router.put('/:id', TaskApi.alterarTask)
router.get('/', TaskApi.listarTask)
router.delete('/:id', TaskApi.deletarTask)
router.post('/', TaskApi.criarTask)

module.exports = router