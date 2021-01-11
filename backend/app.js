const express = require('express');
const session = require('express-session')
const router = require('./router');

require('./models/mongoDB');


const app = express();
const port = 3001;

app.use(express.cookieDecoder());
app.use(session);
app.use(express.json()); // for parsing application/json
app.use('/', router);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});