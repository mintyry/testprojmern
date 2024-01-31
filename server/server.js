const express =require('express');
const { expressMiddleware } = require('@apollo/server/express4');
const { ApolloServer } = require('@apollo/server');
const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth');


const server = new ApolloServer({
    typeDefs, resolvers
})

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const db = require('./config/connection');
// const { User } = require('./models');
// this works; test
// User.create({
// role: 'admin',
// name: 'Jonny Jon',
// username: 'JJ',
// password: '123Password'
// })

const startApolloServer = async () => {
    await server.start();

    app.use('/graphql', expressMiddleware(server, {
        context: authMiddleware
    }));

    db.once('open', () => {
        app.listen(PORT, () => {
            console.log(`server on http://localhost:${PORT}/`);
            console.log(`graphql on http://localhost:${PORT}/graphql`);
        })
    });
}

startApolloServer();


