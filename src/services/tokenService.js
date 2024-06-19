const jwt = require('jsonwebtoken');
const secret = 'token secret';

function createToken(user) {
    const payload = {
        id: user._id,
        email: user.email
    };
    const token = jwt.sign(payload, secret, { expiresIn: '24h' });
    return token;
}
function verifyToken(token) {
    const payload = jwt.verify(token,'token secret');
    return payload;
}

module.exports = {
    createToken,
    verifyToken
}