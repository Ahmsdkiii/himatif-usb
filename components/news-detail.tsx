'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react'

interface Props {
  articleId: number
  onBack: () => void
}

interface ArticleContent {
  title: string
  author: string
  date: string
  readTime: string
  category: string
  content: string
}

export default function NewsDetail({ articleId, onBack }: Props) {
  const articles: Record<number, ArticleContent> = {
    1: {
      title: 'HIMATIF USB Wins Campus Excellence Award',
      author: 'Ahmad Fauzi',
      date: 'March 18, 2025',
      readTime: '4 min',
      category: 'Achievement',
      content: `We are thrilled to announce that HIMATIF USB has been recognized with the prestigious Campus Excellence Award for outstanding leadership and community impact.

This award acknowledges the dedication and hard work of our entire team, from our executive cabinet to our volunteer members. Over the past year, we've organized more than 50 events, engaged over 500 community service hours, and impacted the lives of thousands of students.

The award recognizes our commitment to:
- Creating inclusive and welcoming spaces for all tech students
- Fostering leadership development and personal growth
- Building meaningful connections within our developer community
- Advocating for student voices and interests
- Making a positive impact on both campus and the broader tech community

We couldn't have achieved this without the support and participation of our members, faculty advisors, and partners. This award is a testament to what we can accomplish when we work together toward a common goal.

As we move forward, we remain committed to upholding these values and continuing to serve our tech community with excellence and integrity.`,
    },
    2: {
      title: 'Tech Festival Breaks Attendance Records',
      author: 'Siti Nurhaliza',
      date: 'March 12, 2025',
      readTime: '3 min',
      category: 'Event',
      content: `This year's Tech Festival exceeded all expectations, attracting over 2,000 students and breaking all previous attendance records.

The event featured live coding competitions from five local tech communities, over 30 workshops, and interactive activities from tech organizations across campus. Despite challenging schedules, students showed up in force to celebrate innovation and technology.

Highlights from this year's festival included:
- Three stages with continuous tech talks and demonstrations
- Workshop sessions covering latest technologies
- 40+ student organization booths
- Hackathon competitions and prizes
- Networking sessions with industry professionals

The success of the Tech Festival is a direct result of the hard work and dedication of our entire team. Their meticulous planning, speaker coordination, and day-of execution made this a memorable experience for all attendees.

Thank you to everyone who attended, volunteered, and contributed to making this event possible. We're already looking forward to next year!`,
    },
  }

  const article = articles[articleId] || articles[1]

  const getCategoryColor = (category: string) => {
    const colors: Record<string, { bg: string; text: string; border: string }> = {
      Achievement: { bg: 'bg-blue-500/10', text: 'text-blue-400', border: 'border-blue-500/20' },
      Event: { bg: 'bg-primary/10', text: 'text-primary', border: 'border-primary/20' },
      Initiative: { bg: 'bg-purple-500/10', text: 'text-purple-400', border: 'border-purple-500/20' },
      Learning: { bg: 'bg-yellow-500/10', text: 'text-yellow-400', border: 'border-yellow-500/20' },
      Scholarship: { bg: 'bg-pink-500/10', text: 'text-pink-400', border: 'border-pink-500/20' },
    }
    return colors[category] || { bg: 'bg-primary/10', text: 'text-primary', border: 'border-primary/20' }
  }

  const colors = getCategoryColor(article.category)

  return (
    <section className="relative py-24 bg-background overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={onBack}
          className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-12 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform duration-300" />
          <span className="font-medium">Back to News</span>
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <div className="mb-4">
            <span className={`inline-block text-xs font-semibold px-3 py-1.5 rounded-lg ${colors.bg} ${colors.text} border ${colors.border}`}>
              {article.category}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">{article.title}</h1>

          <div className="flex flex-wrap gap-6 text-muted-foreground text-sm border-b border-primary/20 pb-6">
            <div className="flex items-center gap-2">
              <Calendar size={18} className="text-primary" />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <User size={18} className="text-primary" />
              <span>By {article.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={18} className="text-primary" />
              <span>{article.readTime} read</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <div className="text-muted-foreground leading-relaxed space-y-6 text-lg">
            {article.content.split('\n\n').map((paragraph: string, index: number) => {
              if (paragraph.includes('- ')) {
                return (
                  <ul key={index} className="space-y-3 ml-2">
                    {paragraph.split('\n').map((item: string, i: number) => (
                      item.trim() && (
                        <li key={i} className="flex gap-4 items-start">
                          <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 border border-primary/20 shrink-0 mt-1">
                            <span className="text-primary text-xs font-bold">•</span>
                          </div>
                          <span className="text-foreground pt-0.5">{item.replace(/^- /, '')}</span>
                        </li>
                      )
                    ))}
                  </ul>
                )
              }
              return (
                <p key={index} className="text-foreground leading-relaxed">
                  {paragraph}
                </p>
              )
            })}
          </div>
        </motion.div>

        <div className="border-t border-primary/20 my-16"></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-card/40 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 md:p-12 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Stay Updated</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg">Subscribe to our newsletter untuk latest news dan updates dari HIMATIF USB.</p>
          <button className="px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-primary/30 hover:shadow-primary/40 hover:scale-105 active:scale-95">
            Subscribe to Newsletter
          </button>
        </motion.div>
      </div>
    </section>
  )
}