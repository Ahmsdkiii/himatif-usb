import ContactHero from '@/components/contact-hero'
import ContactForm from '@/components/contact-form'
import ContactInfo from '@/components/contact-info'

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <div className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </div>
    </main>
  )
}
