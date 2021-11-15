const {sign,verify} = require('jsonwebtoken')

const createToken = (user) =>{
    const accessToken = sign({login:user.login},"jwt-secret")
    return accessToken
}

const destroyToken = (req,res,next) =>{
    destroy(req.cookies['token'])
}

const getData = async (req,res,next)=>{
    
    return next()
}

module.exports = {createToken,getData}