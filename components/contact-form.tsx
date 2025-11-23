'use client'

import { motion } from 'framer-motion'
import { Send } from 'lucide-react'
import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleSubmit = () => {
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="bg-card/40 backdrop-blur-sm border border-primary/20 rounded-2xl p-8"
    >
      <h2 className="text-2xl font-bold text-foreground mb-2">Send us a Message</h2>
      <p className="text-muted-foreground mb-6">Fill out the form dan we'll get back to you soon.</p>

      <div className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-background/60 border border-primary/20 rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/40 focus:ring-2 focus:ring-primary/20 transition-all"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-background/60 border border-primary/20 rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/40 focus:ring-2 focus:ring-primary/20 transition-all"
            placeholder="your.email@example.com"
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-background/60 border border-primary/20 rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/40 focus:ring-2 focus:ring-primary/20 transition-all"
            placeholder="What's this about?"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            className="w-full px-4 py-3 bg-background/60 border border-primary/20 rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/40 focus:ring-2 focus:ring-primary/20 transition-all resize-none"
            placeholder="Tell us more..."
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleSubmit}
          className="w-full px-6 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-primary/30 hover:shadow-primary/40 flex items-center justify-center gap-2"
        >
          <Send size={20} />
          <span>Send Message</span>
        </motion.button>
      </div>
    </motion.div>
  )
}