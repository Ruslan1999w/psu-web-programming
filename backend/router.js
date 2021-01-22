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
    console.log('зашел');
    if(req.session.auth) {
        console.log('authorized');
    }
});

router.get('/authInfo', (req, res) => {
    console.log('authIngo');
    if (req.session.auth) {
        res.status(200).json({auth: true});
    } else {
        res.status(400);
    }
})

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
                    req.session.auth = true;
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

router.post('/register', function (req, res) {
    console.log('register data', req.body);
    Users.findOne({
            login: req.body.login
        },
        (err, user) => {
            if (err) {
                console.log('err', err);
                res.sendStatus(500);
            } else if (user) {
                console.log('Пользователь уже существует');
                res.sendStatus(400);
            } else {
                req.session.auth = true;
                const userModel = new Users ({
                    login: req.body.login,
                    password: req.body.password,
                    username: req.body.first_name,
                })
                userModel.save((err, doc) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log('пользователь успешно создан');
                        console.log(doc);
                    }
                });
                res.sendStatus(201);

            }
        })
});
module.exports = router;



