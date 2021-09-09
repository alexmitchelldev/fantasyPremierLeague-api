const nodemailer    = require('nodemailer');
const config        = require('../config.json');

// create transporter object with smtp server details
const transporter = nodemailer.createTransport({
    host: config.emailHost,
    port: 587,
    auth: {
        user: config.emailAddress,
        pass: config.emailPassword
    }
});

// send email
async function sendEmail (to, subject, text) {
    await transporter.sendMail({
        from: config.emailAddress,
        to: to,
        subject: subject,
        text: text
    });
}

sendEmail('amitchell@ctatax.uk.com', 'xubuntu test', 'xubuntu text');

module.exports.sendEmail = sendEmail;