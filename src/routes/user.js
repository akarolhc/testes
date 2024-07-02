const express = require('express')

const UserApi = require('../api/user')
const router = express.Router()

router.put('/:id', UserApi.alterarUsuario)
router.get('/', UserApi.listarUsuario)
router.delete('/:id', UserApi.deletarUsuario)

module.exports = router