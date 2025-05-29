


import Link from "next/link"

const CTASection = () => {
    return (
      <section className="py-20 bg-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready for a Professional Inspection?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Schedule your vehicle inspection today and get peace of mind with our comprehensive report.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="" >
            <button className="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-4 rounded-lg transition-colors">
              Book Inspection Now
            </button>
            </Link>
            <Link href='/contact-us'>
            <button className="bg-transparent hover:bg-white/10 border-2 border-white text-white font-bold px-8 py-4 rounded-lg transition-colors">
              Contact Our Team
            </button>
            </Link>
          </div>
        </div>
      </section>
    )
  }
  
  export default CTASection