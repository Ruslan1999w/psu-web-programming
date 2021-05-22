const express = require('express');
const session = require('express-session')
const router = require('./router');
RedisStorage = require('connect-redis')(session);
redis = require('redis');
client = redis.createClient();

require('./models/mongoDB');


const app = express();
const port = 3001;
const host = '127.0.0.1';

app.use(session({
    store: new RedisStorage({
        host: host,
        port: 6379,
        client: client,
    }),
    secret: 'you secret key',
    saveUninitialized: true,
    resave: false,
}));
app.use(express.json()); // for parsing application/json
app.use('/', router);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});