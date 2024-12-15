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

export default function Contact() {
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
            <form className="space-y-4">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-slate-200"
                >
                  Name
                </label>
                <Input
                  id="name"
                  placeholder="Your Name"
                  className="bg-slate-700 border-slate-600 text-slate-100"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-slate-200"
                >
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  className="bg-slate-700 border-slate-600 text-slate-100"
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
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 dark:bg-purple-600 dark:hover:bg-purple-700 text-white dark:text-white"
              >
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
