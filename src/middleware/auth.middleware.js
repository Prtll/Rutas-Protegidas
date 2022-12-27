const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const passport = require('passport')
const jwtSecret = require('../../config').api.jwtSecret
const { findUserById } = require('../users/users.controllers')

const authMiddleware = () => {
    const options = {
        jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt'),
        secretORKey: jwtSecret
    }    
    passport.use(
        new JwtStrategy(options, async(tokenDecoded, done) => {
            try {
                const user = await findUserById(tokenDecoded.id)
                if(!user){
                    return done(null, false)
                }
                return done(null, tokenDecoded)
            } catch (error) {
                return done(error, false)
                
            }
            
        })
    )
}



module.exports = passport

