


export const ConsultationHero = ({ title, description }) => (
  <section className="bg-dark-600 py-20">
    <div className="container mx-auto px-4">
      <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">{title}</h1>
      <div className="w-24 h-0.5 bg-white mb-8"></div>
      <p className="text-2xl text-gray-300 max-w-3xl">{description}</p>
    </div>
  </section>
)


