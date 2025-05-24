import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function NewsletterSignup() {
  return (
    <section className="py-24 bg-accent">
      <div className="container">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-4xl font-medium md:text-5xl font-lora italic text-primary text-left">
            Haberdar Olun
          </h2>
          <p className="mb-10 text-xl text-foreground/80 leading-relaxed text-left">
            Etkinliklerimizden, projelerimizden ve yeni gelişmelerden haberdar olmak için bültenimize abone olun.
          </p>
          <form className="flex max-w-md flex-col gap-4 sm:flex-row">
            <Input type="email" placeholder="E-posta adresiniz" className="flex-1" required />
            <Button type="submit" className="bg-primary text-white">
              Abone Ol
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
