/**
 * Saha Planners — Express Backend
 * Install: npm install express cors dotenv nodemailer mongoose
 */
const express = require('express')
const cors    = require('cors')
require('dotenv').config()

const app = express()

app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:3000' }))
app.use(express.json())

// ── Routes ────────────────────────────────────────
app.use('/api/contact',  require('./routes/contactRoutes'))
app.use('/api/enquiry',  require('./routes/enquiryRoutes'))

// ── Health check ──────────────────────────────────
app.get('/api/health', (_req, res) => res.json({ status: 'ok' }))

// ── Error handler ─────────────────────────────────
app.use(require('./middleware/errorHandler'))

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`))
