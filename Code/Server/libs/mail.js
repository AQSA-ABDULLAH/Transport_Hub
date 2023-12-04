const nodemailer = require ("nodemailer")
// import dotenv from "dotenv";
// dotenv.config()

// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: process.env.MAIL_EMAIL,
//     pass: process.env.MAIL_PASSWORD,
//   },
// });

const sendMail = async (req, res) => {

    let testAccount = await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'evans.lemke37@ethereal.email',
            pass: '2CwyXPdbvzM4ZMNQMY'
        }
    });
}


// export default async function sendMail(to, subject, html){
//     return await transporter.sendMail({
//       from: process.env.MAIL_EMAIL,
//       to,
//       subject,
//       html,
//     });
// }