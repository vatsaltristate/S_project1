// const {verify} = require('jsonwebtoken');

// module.exports = {
//     checkToken : (req, res, next) => {

//         let token = req.get("Authorization")

//         if(token) {
//             token = token.slice(7);
//             verify(token, "vatsal123" , (err,decoded) => {
//                 if(err){
//                     res.json({
//                         success : 0,
//                         message : "Invalid Token"
//                     })
//                 }else{
//                     req.decoded = decoded;
//                     next();
//                 }
//             })
            
//         }
//         else {
//             res.json({
//                 success : 0,
//                 message : "Invalid authorization User"
//             })
//         }
//     }
// }