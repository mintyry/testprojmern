const jwt = require('jsonwebtoken');

const secret = process.env.SECRET || 'efegegeofgur9g4'

module.exports = {
    signToken: ({ _id, name, username, role}) => {
        return jwt.sign({ _id, name, username, role }, secret, { expiresIn: '7days'} )
    }
};