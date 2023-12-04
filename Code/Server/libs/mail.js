const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.MAIL_EMAIL,
    pass: process.env.MAIL_PASSWORD,
  },
});

// You had two 'const transporter' declarations, I assume you meant to have only one.

module.exports = async function sendMail(to, subject, html) {
  return await transporter.sendMail({
    from: process.env.MAIL_EMAIL,
    to,
    subject,
    html,
  });
};




// const transporter = nodemailer.createTransport({
//   host: process.env.MAIL_HOST,
//   port: 587,
//   auth: {
//     user: process.env.MAIL_USERNAME,
//     pass: process.env.MAIL_PASSWORD,
//   },
// });