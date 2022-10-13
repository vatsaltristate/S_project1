// const {
//   signup,
//   getUserByUserId,
//   getAllEmails,
//   getUserByUserEmail,
//   getUsers,
//   updateUser,
//   deleteUser,
// } = require("../controller/user.service");

// const { hashSync, genSaltSync, compareSync } = require("bcrypt");
// const { sign } = require("jsonwebtoken");
// // const { sendWelcomeEmail } = require('../utilities/mail');

// module.exports = {

//   signupUser: (req, res) => {
//     const body = req.body;
//     const email = req.body.email;
//     const salt = genSaltSync(10);
//     body.password = hashSync(body.password, salt);

//     getAllEmails(email, (err, emails) => {
//       if (err) {
//         console.log(err);
//         return res.status(500).json({
//           success: 0,
//           message: "Database connection error",
//         });
//       }

//       // console.log('email = ', emails)
//       const existingEmails = [];

//       emails.map((emailObj) => {
//         existingEmails.push(emailObj.email);
//       });
//       // console.log(existingEmails);

//       const emailFound = existingEmails.find((email) => {
//         return body.email === email;
//       });

//       // console.log(emailFound);

//       if (emailFound)
//         return res.status(409).json({
//           failure: 1,
//           success: 0,
//           message: "This email already exists",
//         });

//       signup(body, (err, results) => {
//         if (err) {
//           console.log(err);
//           return res.status(500).json({
//             success: 0,
//             message: "Database connection error",
//           });
//         }

//         // send email
//         // console.log('results = ', req.body)
//         // console.log(email)

//         // sendWelcomeEmail(req.body.email, req.body.firstName)

//         return res.status(200).json({
//           success: 1,
//           data: results,
//         });
//       });
//     });
//   },


//   getUsers: (req, res) => {
//     getUsers((err, results) => {
//       if (err) {
//         console.log(err);
//         return;
//       }
//       return res.json({  
//         success: 1,
//         data: results,
//       });
//     });
//   },


//   getUserByUserId: (req, res) => {
//     const id = req.params.id;
//     getUserByUserId(id, (err, results) => {
//       if (err) {
//         console.log(err);
//         return;
//       }
//       if (!results) {
//         return res.json({
//           success: 0,
//           message: "Record not Found",
//         });
//       }
//       results.password = undefined;
//       return res.json({
//         success: 1,
//         data: results,
//       });
//     });
//     // console.log(req.params.id)
//   },


//   updateUsers: (req, res) => {
//     const body = req.body;
//     const salt = genSaltSync(10);
//     body.password = hashSync(body.password, salt);
//     // console.log(salt)
//     // console.log(body)
//     // console.log(updateUser)
//     updateUser(body, (err, results) => {
//       if (err) {
//         console.log(err);
//         return;
//       }
//       return res.json({
//         success: 1,
//         message: "updated successfully",
//       });
//     });
//   },


//   deleteUser: (req, res) => {
//     const id = req.params.id;
//     deleteUser(id, (err, results) => {
//       if (err) {
//         console.log(err);
//         return;
//       }
//       if (results) {
//         return res.json({
//           success: 0,
//           message: "Record Not Found",
//         });
//       }
//       return res.json({
//         success: 1,
//         message: "user deleted successfully",
//       });
//     });
//   },


//   loginUser: (req, res) => {
//     const body = req.body;
//     getUserByUserEmail(body.email, (err, results) => {
//       if (err) {
//         return console.log(err);
//       }
//       if (!results) {
//         return res.json({
//           success: 0,
//           message: "User not found in database please signup",
//         });
//       }
//       // console.log('password ====>',body.password, 'results password ====>',results.password )
//       // return;
//       const result = compareSync(body.password, results.password);

//       if (result) {
//         results.password = undefined;
//         const jsonT = sign({ result: results }, "vatsal123", {
//           expiresIn: "24h",
//         });
//         return res.json({
//           success: 1,
//           message: "data fetch successfully",
//           token: jsonT,
//         });
//       } else {
//         return res.json({
//           success: 0,
//           message: "data not fetch successfully password wrong",
//         });
//       }
//     });
//   }
  
// };
