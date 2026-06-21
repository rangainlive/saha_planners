exports.submitEnquiry = async (req, res, next) => {
  try {
    const { name, phone, service } = req.body
    if (!name || !phone) return res.status(400).json({ error: 'Name and phone are required.' })
    // TODO: save to DB and send notification
    res.json({ success: true, message: 'Enquiry received!' })
  } catch (err) {
    next(err)
  }
}
