const jwt = require("jsonwebtoken");

function validateToken (req, res, next) {
        // const authHeader = req.headers.authorization
        // const token = authHeader && authHeader.split(' ')[1]
    
        // if(!token) {
        //     return res.status(401).json({message: 'Acesso negado: Token não identificado.'})
        // }
    
        // try {
        //     const secret = process.env.SECRET
        //     jwt.verify(token, secret)
        //     next()
        // } catch(error) {
        //     res.status(500).json({message: 'Token inválido'})
        // } 
}

module.exports = validateToken;



// function validateToken(req, res, next) {
//     const authHeader = req.headers.authorization || req.headers.Authorization || "";
//     const [bearer, token] = authHeader.split(' ');

//     if (token && bearer === "Bearer") {
//         jwt.verify(token, process.env.SECRET, (err, decoded) => {
//             if (err) {
//                 return res.status(401).json({message: 'Acesso negado.'})
//             }
//             req.user = decoded.user;
//             next();
//         });
//     } else {
//         res.status(500).json({message: 'Token inválido'})
//     }
// }