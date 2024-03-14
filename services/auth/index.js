const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const authenticate_token = (req, res, next) => {
    const authHeader = req.headers['authorization'] 
    
    const token = authHeader && authHeader.split(' ')[1] 
    
    if(!token) 
        throw new Error('token not found')

    return jwt.verify(token, process.env.TOKEN_SECRET, (err, user)=>{ 
        if(err) 
            throw new Error('could not verify jwt')
        req.user = user 
    })     

}

const access_token = async (user) => {
    return jwt.sign({ username: user.username }, process.env.TOKEN_SECRET, { expiresIn: '20s' });
}

const encrypt = async (password) => {
    return await bcrypt.hash(password, 10)
}

const compare = async (p1, p2) => {
    return await bcrypt.compare(p1, p2)
}

module.exports = {
    authenticate_token,
    encrypt,
    compare,
    access_token
};
