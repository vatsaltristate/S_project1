const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 587,
  auth: {
    user: "9046bf8df1f437",
    pass: "0a7b7bd27dd355",
  },
});

const sendWelcomeEmail = (email, name) => {
  transport.sendMail(
    {
      from: '"Example Team" <vatsal@example.com>',
      to: `${email}`,
      subject: "Nice Nodemailer test",
      text: `Hey there, its our first message sent with Nodemailer, welcome onboard ${name}!`,
      html: `<b>Welcome Node Team ${name}! </b>`,
    },
    (err, info) => {
      if (err) {
        return console.log(err);
      }
      console.log("Message sent: %s", info.messageId);
    }
  );
};

module.exports = {
  sendWelcomeEmail,
};

// const mailOptions = {
//   from: '"Example Team" <vatsal@example.com>',
//   to: 'user1@example.com, user2@example.com',
//   subject: 'Nice Nodemailer test',
//   text: 'Hey there, its our first message sent with Nodemailer ',
//   html: '<b>Hey there! </b>',
// //   attachments: [
// //     {
// //       filename: 'mailtrap.png',
// //       path: __dirname + '/mailtrap.png',
// //       cid: 'uniq-mailtrap.png'
// //     }
// //   ]
// };

// transport.sendMail(mailOptions, (error, info) => {
//   if (error) {
//     return console.log(error);
//   }
//   console.log('Message sent: %s', info.messageId);
// });
