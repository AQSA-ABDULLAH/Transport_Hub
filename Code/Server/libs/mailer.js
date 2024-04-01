const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    post: process.env.SMTP_PORT,
    secure: false,
    requireTLS: true,
    auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD
    },
});

const sendMail = async (to, subject, content) => {
    try {
        var mailOptions = {
            from: process.env.SMTP_MAIL,
            to: to,
            subject: subject,
            html: content,
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if(error){
                console.log(error)
            }

            console.log("Mail Sent", info.messageId)
        })

    } catch (error) {
        console.log(error.message)
    }
};

module.exports = {
    sendMail
}