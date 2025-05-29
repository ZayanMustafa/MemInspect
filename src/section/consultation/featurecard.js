export const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="flex items-start">
    <div className="bg-white text-black rounded-full w-12 h-12 flex items-center justify-center mr-6 flex-shrink-0">
      <Icon size={24} />
    </div>
    <div>
      <h3 className="text-2xl text-white mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  </div>
);



