const jwt = require('jsonwebtoken');
const JWT_SECRET_KEY = 'batata';

class AuthMiddleware {
    async validartoken(req, res, next) {
        const token = req.headers.authorization;

        try {
            if(!token) {
                throw new Error('Token não informado');
            }

            const payload = jwt.verify(token, JWT_SECRET_KEY);

            if(!payload) {
                throw new Error('Token inválido');
            }

            req.idUser = payload.idUser;

            next();
        } catch (error) {
            return res.status(400).send({ error: error.message })
        }
    }
}

module.exports = new AuthMiddleware()