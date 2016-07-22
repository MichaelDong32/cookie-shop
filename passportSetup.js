const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const users = require('./models/users')
const db = require('./models/db')

module.exports = function setup () {
  var strategy = new LocalStrategy(function (username, password, done) {
    users.getUser(username, password)
      .then(function(user){
        done(null, user)
      })
      .catch(function(err){
        console.error('Error in get user', err)
        done(err, false)
      })
  })

  passport.use(strategy)

  // how do I go from a given user to unique piece of info I can store in the cookie.
  passport.serializeUser(function (user, done) {
    done(null, user.id)
  })

  // how do I find a user given the piece of information stored in the cookie
  passport.deserializeUser(function (id, done) {
    db.getUserData(id)
      .then(function(user){
        done(null, user)
      })
      .catch(done)
  })
}