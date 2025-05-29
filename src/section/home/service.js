// File: src/components/ServicesSection.js
import { FiShield, FiClock, FiDollarSign, FiMapPin } from 'react-icons/fi';

const ServicesSection = () => {
  const services = [
    {
      icon: <FiShield size={48} />,
      title: 'PRE-PURCHASE INSPECTION',
      description: 'Comprehensive inspection before buying a used vehicle to identify potential issues.',
    },
    {
      icon: <FiClock size={48} />,
      title: 'ANNUAL MAINTENANCE CHECK',
      description: 'Regular inspection to keep your vehicle in optimal condition and prevent future problems.',
    },
    {
      icon: <FiDollarSign size={48} />,
      title: 'PRE-SALE INSPECTION',
      description: 'Get your vehicle inspected before selling to maximize its value and build buyer trust.',
    },
    {
      icon: <FiMapPin size={48} />,
      title: 'MOBILE INSPECTION',
      description: 'Our inspectors come to your location for maximum convenience.',
    },
  ];

  return (
    <section className="py-20 bg-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-text-primary mb-4 font-sans">
            OUR INSPECTION SERVICES
          </h2>
          <div className="w-24 h-0.5 bg-accent mx-auto mb-6"></div>
          <p className="text-2xl text-text-secondary max-w-2xl mx-auto font-sans">
            Comprehensive vehicle inspections tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group border border-accent p-8 bg-dark hover:bg-light transition-all duration-300 h-full"
            >
              <div className="w-20 h-20 mb-6 border border-accent rounded-full flex items-center justify-center group-hover:bg-accent group-hover:border-dark transition-all duration-300">
                <span className="text-text-primary group-hover:text-dark transition-all duration-300">
                  {service.icon}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-text-primary group-hover:text-dark transition-all duration-300 font-sans">
                {service.title}
              </h3>
              <p className="text-xl text-text-secondary group-hover:text-dark transition-all duration-300 font-sans">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;