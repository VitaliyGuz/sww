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

    let mailOptions = {
        from: '"Fred Foo 👻" <40cdb8a4@gmail.com>',
        to: email,
        subject: 'Confirm email ✔',
        html: `<p>Confirm email: </p><a href="${host}/confirm-email/${token}">${host}/confirm-email/${token}</a>` // html body
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error)
        }
        console.log('Message sent: %s', info.messageId)
    })
}

module.exports = sendEmail
