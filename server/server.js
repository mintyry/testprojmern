const express =require('express');

const app = express();

const PORT = process.env.PORT || 3001;

const db = require('./config/connection');
// const { User } = require('./models');
// this works; test
// User.create({
// role: 'admin',
// name: 'Jonny Jon',
// username: 'JJ',
// password: '123Password'
// })

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`server on http://localhost:${PORT}/`);
    })
});


