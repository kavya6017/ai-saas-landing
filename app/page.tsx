import PricingSection from "./PricingSection";
import FeaturesSection from "./FeaturesSection";
export default function Home() {
  return (
    <>
      <header className="flex items-center justify-between px-8 py-5 bg-oceanic-noir text-arctic-powder sticky top-0 z-50">
        <div className="font-mono font-bold text-xl text-forsythia">AutoAI</div>
        <ul className="hidden md:flex gap-8 font-sans">
          <li><a href="#features" className="hover:text-forsythia transition-colors">Features</a></li>
          <li><a href="#pricing" className="hover:text-forsythia transition-colors">Pricing</a></li>
          <li><a href="#social-proof" className="hover:text-forsythia transition-colors">Customers</a></li>
        </ul>
        <a href="#pricing" className="bg-forsythia text-oceanic-noir font-semibold px-5 py-2 rounded-full hover:opacity-90 transition-opacity">
          Get Started
        </a>
      </header>

      <main className="bg-arctic-powder">
        <section id="hero" aria-label="Hero" className="flex flex-col items-center text-center px-6 py-24 bg-nocturnal-expedition text-arctic-powder">
          <h1 className="font-mono text-4xl md:text-6xl font-bold max-w-3xl leading-tight entrance">
            Automate Everything. <span className="text-forsythia">Build Faster</span> with AI.
          </h1>
          <p className="font-sans text-lg mt-6 max-w-xl text-mystic-mint entrance-delay-1">
            Placeholder subtext describing the AI automation platform and its core value proposition.
          </p>
          <a href="#pricing" className="mt-8 bg-deep-saffron text-oceanic-noir font-semibold px-8 py-3 rounded-full hover:opacity-90 transition-opacity entrance-delay-1">
            Start Free Trial
          </a>
        </section>

        <FeaturesSection />

        <PricingSection />

        <section id="social-proof" aria-label="Customer testimonials" className="px-6 py-20 bg-nocturnal-expedition text-arctic-powder text-center">
          <h2 className="font-mono text-3xl font-bold mb-8">Trusted by teams everywhere</h2>
          <blockquote className="max-w-2xl mx-auto">
            <p className="font-sans text-lg italic">&ldquo;Placeholder testimonial quote about how great this product is.&rdquo;</p>
            <cite className="block mt-4 text-forsythia font-mono not-italic">— Customer Name, Company</cite>
          </blockquote>
        </section>

        <section id="final-cta" aria-label="Call to action" className="px-6 py-24 text-center bg-arctic-powder">
          <h2 className="font-mono text-3xl font-bold text-oceanic-noir mb-6">Ready to automate your workflow?</h2>
          <a href="#pricing" className="bg-forsythia text-oceanic-noir font-semibold px-8 py-3 rounded-full hover:opacity-90 transition-opacity">
            Get Started Free
          </a>
        </section>
      </main>

      <footer className="bg-oceanic-noir text-mystic-mint text-center py-6 font-sans text-sm">
        <p>&copy; 2026 AutoAI. All rights reserved.</p>
      </footer>
    </>
  );
}