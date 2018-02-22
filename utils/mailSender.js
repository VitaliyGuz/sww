const nodemailer = require('nodemailer')

function sendEmail({ email, token, host }) {
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.email,
            pass: process.env.password
        },
    })
    const url = process.env.BASE_URL || 'http://localhost:3000'
    let mailOptions = {
        from: '"Fred Foo 👻" <40cdb8a4@gmail.com>',
        to: email,
        subject: 'Confirm email ✔',
        html: `<p>Confirm email: </p><a href="${url}/confirm-email/${token}">${url}/confirm-email/${token}</a>` // html body
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error)
        }
        console.log('Message sent: %s', info.messageId)
    })
}

module.exports = sendEmail
