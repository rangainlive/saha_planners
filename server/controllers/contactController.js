const { sendMail } = require('../utils/mailer')

exports.submitContact = async (req, res, next) => {
  try {
    const { name, email, phone, service, message } = req.body
    if (!name || !email || !phone || !service || !message) {
      return res.status(400).json({ error: 'All fields are required.' })
    }
    // TODO: save to DB (Enquiry.create({ name, email, phone, service, message }))
    await sendMail({
      to:      process.env.COMPANY_EMAIL || 'sahaplanners.ch@gmail.com',
      subject: `New Enquiry from ${name} — ${service}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    })
    res.json({ success: true, message: 'Your message has been received. We will contact you within 24 hours.' })
  } catch (err) {
    next(err)
  }
}
