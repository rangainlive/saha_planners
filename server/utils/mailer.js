const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
})

exports.sendMail = ({ to, subject, html }) =>
  transporter.sendMail({ from: process.env.MAIL_USER, to, subject, html })
