const express = require('express')

const ProjectApi = require('../api/project')
const router = express.Router()

router.put('/:id', ProjectApi.alterarProject)
router.get('/', ProjectApi.listarProject)
router.delete('/:id', ProjectApi.deletarProject)
router.post('/', ProjectApi.createProject)

module.exports = router