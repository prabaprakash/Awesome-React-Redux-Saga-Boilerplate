var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: 'd',
    clientSecret: 'd',
    callbackURL: "http://localhost:3200/auth/google/callback"
},
    function (accessToken, refreshToken, profile, cb) {
        console.log(profile);
        return cb(null, profile);
    }
));

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    done(null, user);
});

module.exports = passport;