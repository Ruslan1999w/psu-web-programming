const express = require('express');
const router = express.Router();
const Users = require('./models/User');
const Books = require('./models/Books')
const passport = require('passport');

const initializePassport = require('./passport-config');
initializePassport(passport);

async function getAllUsers() {
    const userList = await Users.find({},  function (err, docs) {
        if (err) {
            console.log(err);
        } else {
            return docs;
        }
    })
    return userList;
}
async function getAllBooks() {
    const bookList = await Books.find({},  function (err, docs) {
        if (err) {
            console.log(err);
        } else {
            return docs;
        }
    })
    return bookList;
}


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
    console.log('authInfo');
    if (req.session.auth) {
        res.json(req.session.user);
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
                    req.session.user = user;
                    res.json(user);
                } else {
                    res.sendStatus(404)
                }
            } else {
                console.log('Пользователя не существует');
                res.sendStatus(400);
            }
        })
});

router.post('/logout', function (req, res) {
    console.log('logout');
    req.session.auth = false;
    res.sendStatus(200);
})

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
                req.session.user = userModel;
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

router.get('/catalog/book/', function (req, res) {
    getAllBooks().then((list) => {
        res.json(list);
    })
})

router.get('/catalog/book/:id', function (req, res) {
    console.log('/catalog/book/:id\n', req.params.id);

})

router.post('/catalog/book/', function (req, res) {
    console.log('POST /catalog/book');
    res.sendStatus(201);
})

router.get('/user-list', function (req, res) {

    getAllUsers().then((list) => {
        console.log('promisse returned\n', list);
        res.json(list);
    })
})

module.exports = router;



