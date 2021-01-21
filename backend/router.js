const express = require('express');
const router = express.Router();
const Users = require('./models/User');
const passport = require('passport');

const initializePassport = require('./passport-config');
initializePassport(passport);

router.use(function timeLog(req, res, next) {
    const date = new Date();
    console.log('Time: ', date);
    next();
});

router.get('/', function(req, res) {
    res.send('Birds home page');
});

router.post('/test', function(req, res) {
   console.log('req.body', req.body);
});
router.post('/login', function (req, res) {
    Users.findOne({
        login: req.body.login
        },
        (err, user) => {
            if (err) {
                console.log('err', err);
                res.sendStatus(400);
            } else if (user) {
                if (user.password === req.body.password) {
                    console.log(req.session);
                    res.sendStatus(200)
                } else {
                    res.sendStatus(404)
                }
            } else {
                console.log('Пользователя не существует');
                res.sendStatus(400);
            }
        })
});

router.get('/register', function (req, res) {
    const {username, password} = req.body;
    console.log(username, password);
});
module.exports = router;

// const userModel = new User ({
//     login: 'test',
//     password: 'test',
//     username: 'admin'
// })
// userModel.save();

