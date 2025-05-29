

export const EmergencyContact = ({ contacts = [] }) => (
  <section className="py-20 bg-dark-600">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-4xl font-bold text-white mb-8">NEED IMMEDIATE HELP?</h2>
      <div className="flex flex-col md:flex-row justify-center gap-8">
        {contacts.map((contact) => (
          <a 
            key={contact.text}
            href={contact.href} 
            className="flex items-center justify-center px-8 py-5 border border-white text-white hover:bg-white hover:text-black transition-colors"
          >
            <contact.icon className="mr-3" /> {contact.text}
          </a>
        ))}
      </div>
    </div>
  </section>
);




