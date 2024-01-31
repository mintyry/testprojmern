const jwt = require('jsonwebtoken');

const secret = process.env.SECRET || 'efegegeofgur9g4'

module.exports = {
    authMiddleWare: ({req}) => {
        const token = req.headers.authorization.split(' ').pop().trim();
        //Bearer tokenstring

        if (!token){
            return req;
        }

        try {
            const { _id, name, username } = jwt.verify(token, tokenSecret, {maxAge: '7days'});
            req.user = { _id, name, username }
        } catch (error) {
            console.lerror('invalid token');
        }

        return req;
    },
    signToken: ({ _id, name, username, role}) => {
        return jwt.sign({ _id, name, username, role }, secret, { expiresIn: '7days'} )
    }
};