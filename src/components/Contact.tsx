import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import emailjs from 'emailjs-com'

export default function Contact() {
  const [formData, setFormData] = useState({
    from_name: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [responseMessage, setResponseMessage] = useState('')

  const handleInputChange = (e) => {
    const { id, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setResponseMessage('')

    const serviceID = import.meta.env.PUBLIC_EMAILJS_SERVICE_ID
    const templateID = import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ID
    const userID = import.meta.env.PUBLIC_EMAILJS_USER_ID

    emailjs
      .send(serviceID, templateID, formData, userID)
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
    <section className="mb-12">
      <div className=" mx-auto space-y-8">
        <h2 className="text-4xl font-bold tracking-tighter text-purple-400">
          Get in Touch
        </h2>
        <Card className="bg-slate-800 border-slate-700 dark:bg-slate-900/50 dark:border-slate-800">
          <CardHeader>
            <CardTitle className="text-2xl text-slate-100">
              Contact Me
            </CardTitle>
            <CardDescription className="text-slate-400">
              Feel free to reach out if you have any questions or opportunities!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label
                  htmlFor="from_name"
                  className="text-sm font-medium text-slate-200"
                >
                  Email
                </label>
                <Input
                  id="from_name"
                  type="email"
                  placeholder="your.email@example.com"
                  className="bg-slate-700 border-slate-600 text-slate-100"
                  value={formData.from_name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-slate-200"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message here..."
                  className="bg-slate-700 border-slate-600 text-slate-100"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 dark:bg-purple-600 dark:hover:bg-purple-700 text-white dark:text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
            {responseMessage && (
              <p className="mt-4 text-center text-slate-300">
                {responseMessage}
              </p>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
