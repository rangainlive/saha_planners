const BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

async function post(endpoint, body) {
  const res = await fetch(`${BASE}${endpoint}`, {
    method:  'POST',
    headers: { 'Content-Type': 'application/json' },
    body:    JSON.stringify(body),
  })
  const data = await res.json()
  if (!res.ok) throw new Error(data.error || 'Request failed')
  return data
}

export const submitContactForm = (data) => post('/contact', data)
export const submitEnquiry     = (data) => post('/enquiry', data)
