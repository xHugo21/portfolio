import { useEffect, useState, type ChangeEvent, type FormEvent } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const [formData, setFormData] = useState({
    from_name: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [responseMessage, setResponseMessage] = useState('')

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target as HTMLInputElement | HTMLTextAreaElement
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }))
  }

  useEffect(() => {
    const publicKey = import.meta.env.PUBLIC_EMAILJS_PUBLIC_KEY
    if (publicKey) {
      emailjs.init(publicKey)
    }
  }, [])

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setResponseMessage('')

    const serviceID = import.meta.env.PUBLIC_EMAILJS_SERVICE_ID
    const templateID = import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ID

    emailjs
      .send(serviceID, templateID, formData)
      .then(
        (result) => {
          console.log('Success:', result)
          setResponseMessage('Your message has been sent successfully!')
          setFormData({ from_name: '', message: '' })
        },
        (error) => {
          console.error('Error:', error)
          setResponseMessage('Oops! Something went wrong. Please try again.')
        }
      )
      .finally(() => {
        setIsSubmitting(false)
      })
  }

  return (
    <section className="relative scroll-mt-24" id="contact">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[10%] top-[-5%] h-48 w-48 rounded-full bg-[#fb9d72]/40 blur-[100px] dark:bg-[#fb9d72]/25" />
        <div className="absolute right-[8%] bottom-[-5%] h-52 w-52 rounded-full bg-[#8dd9c9]/35 blur-[100px] dark:bg-[#6f7bff]/25" />
      </div>
      <div className="relative mx-auto w-full rounded-3xl border border-[#0d1017]/10 bg-white/80 p-8 md:p-10 shadow-[0_25px_60px_rgba(0,0,0,0.07)] backdrop-blur dark:bg-white/5 dark:border-white/10">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.28em] text-[#6c707c] dark:text-slate-400">
            Contact
          </p>
          <h2 className="text-3xl font-semibold leading-tight">Get in touch</h2>
          <p className="text-base text-[#3a3f48] dark:text-slate-300">
            Don't hesitate on reaching out
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label
              htmlFor="from_name"
              className="text-sm font-semibold text-[#0d1017] dark:text-[#f6f1e7]"
            >
              Email
            </label>
            <Input
              id="from_name"
              type="email"
              placeholder="your.email@example.com"
              className="border-[#0d1017]/15 bg-white/80 text-[#0d1017] shadow-[0_6px_25px_rgba(0,0,0,0.03)] placeholder:text-[#6c707c] dark:border-white/15 dark:bg-white/10 dark:text-[#f6f1e7] dark:placeholder:text-slate-400"
              value={formData.from_name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="message"
              className="text-sm font-semibold text-[#0d1017] dark:text-[#f6f1e7]"
            >
              Message
            </label>
            <Textarea
              id="message"
              placeholder="What would you like to collaborate on?"
              className="min-h-[160px] border-[#0d1017]/15 bg-white/80 text-[#0d1017] shadow-[0_6px_25px_rgba(0,0,0,0.03)] placeholder:text-[#6c707c] dark:border-white/15 dark:bg-white/10 dark:text-[#f6f1e7] dark:placeholder:text-slate-400"
              value={formData.message}
              onChange={handleInputChange}
              required
            />
          </div>
          <Button
            type="submit"
            className="w-full justify-center bg-[#0d1017] text-[#f7f4ef] transition-transform duration-300 hover:-translate-y-0.5 hover:bg-[#0d1017] dark:bg-[#f7f4ef] dark:text-[#0d1017] dark:hover:bg-[#f7f4ef]"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </form>
        {responseMessage && (
          <p className="mt-4 text-center text-[#0d1017] dark:text-[#f6f1e7]">
            {responseMessage}
          </p>
        )}
      </div>
    </section>
  )
}
