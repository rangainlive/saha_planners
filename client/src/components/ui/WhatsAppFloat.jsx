import { motion } from 'framer-motion'

export default function WhatsAppFloat() {
  return (
    <motion.a
      href="https://wa.me/919498658218?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20your%20services."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-[#25D366] rounded-full
                 flex items-center justify-center shadow-2xl"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 2, type: 'spring', stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.95 }}
    >
      <i className="fab fa-whatsapp text-white text-2xl" />
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-[8px]
                       text-white flex items-center justify-center font-bold animate-pulse">1</span>
    </motion.a>
  )
}
