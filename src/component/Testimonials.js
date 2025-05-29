import Image from 'next/image';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: "Bat man",
    role: "Car Buyer",
    content: "The inspection saved me from buying a car with hidden flood damage. The report was so detailed and helped me negotiate a better deal on another vehicle.",
    rating: 5,
    image: "/batman.jpg"
  },
  {
    id: 2,
    name: "Jan",
    role: "Used Car Dealer",
    content: "We use their services for all our inventory. The reports build trust with our customers and have increased our sales significantly.",
    rating: 5,
    image: "/jan.jpg"
  },
  {
    id: 3,
    name: "Spider man",
    role: "Fleet Manager",
    content: "Their commercial vehicle inspections are thorough and reliable. We've been able to maintain our fleet better thanks to their detailed reports.",
    rating: 4,
    image: "/spiderman.jpg"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-dark text-white">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-white">
          What Our <span className="text-accent">Clients</span> Say
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white/10 backdrop-blur-md p-8 rounded-xl">
              <FaQuoteLeft className="text-accent text-3xl mb-4" />
              <p className="text-lg mb-6">{testimonial.content}</p>
              
              <div className="flex items-center space-x-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar 
                    key={i} 
                    className={i < testimonial.rating ? "text-yellow-400" : "text-gray-400"} 
                  />
                ))}
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden">
                  <Image 
                  sizes='25px'
                    src={testimonial.image} 
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-xl">{testimonial.name}</h4>
                  <p className="text-light">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;