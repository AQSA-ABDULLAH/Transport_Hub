const nodemailer = require('nodemailer');
// import dotenv from "dotenv";
// dotenv.config()

// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: process.env.MAIL_EMAIL,
//     pass: process.env.MAIL_PASSWORD,
//   },
// });

// const transporter = nodemailer.createTransport({
//   host: process.env.MAIL_HOST,
//   port: 587,
//   auth: {
//     user: process.env.MAIL_USERNAME,
//     pass: process.env.MAIL_PASSWORD,
//   },
// });

// export default async function sendMail(to, subject, html){
//     return await transporter.sendMail({
//       from: process.env.MAIL_EMAIL,
//       to,
//       subject,
//       html,
//     });
// }