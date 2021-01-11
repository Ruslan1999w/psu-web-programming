const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt');
const Users = require('./models/User');

function  initialize(passport) {
    const authenticateUser = (login, password, done) => {
        console.log('lsdf')
        Users.findOne({
            login: login
        },
            (err, user) => {
            if (err) {
                console.log('err', err);
            } else {
                if (user == null) {
                    console.log('User is not exist')
                    return done(null, false)
                }
                if (password === user.password) {
                    console.log('success');
                    return done(null, user);
                    } else {
                        console.log('bad password')
                        return done(null, false)
                    }
            }
        })
    };

    passport.use(new LocalStrategy({usernameField: 'login'}, authenticateUser))
    passport.serializeUser((user, done) => { })
    passport.deserializeUser((id, done) => { })
}
module.exports = initialize