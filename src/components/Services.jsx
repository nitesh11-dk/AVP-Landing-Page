import React from 'react';

const ServiceCard = ({ title, instructor, description, image, timing, index }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      className="relative h-[400px] group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full h-full overflow-hidden rounded-2xl bg-gradient-to-br from-purple-900/50 to-black border border-purple-500/20">
        <div className="relative z-10 h-full p-8 flex flex-col backdrop-blur-sm">
          {!isHovered ? (
            // Default View
            <div className="flex flex-col items-center justify-center h-full space-y-4">
              <h3 className="text-3xl font-bold text-white">{title}</h3>
              <div className="w-12 h-1 bg-gradient-to-r from-purple-400 to-pink-600"></div>
            </div>
          ) : (
            // Hovered View
            <div className="flex flex-col items-center justify-center h-full space-y-6">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-purple-400">
                <img
                  src={image}
                  alt={instructor}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-purple-400 mb-2">{instructor}</h3>
                <p className="text-gray-300 mb-4 text-sm">{description}</p>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                  <p className="text-white text-sm">Batch Timing: {timing}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      title: "KIDS BATCH",
      instructor: "Sankalp Lodhi",
      description: "Specialized in teaching fun and energetic dance moves to kids, making learning enjoyable.",
      image: "/instructors/sankalp.png",
      timing: "Mon-Wed-Fri 4:00 PM - 5:00 PM"
    },
    {
      title: "BEGINNERS BATCH",
      instructor: "Siddhant Damedhar",
      description: "Expert in breaking down complex moves for beginners, focusing on building strong foundations.",
      image: "/instructors/siddhant.png",
      timing: "Mon-Wed-Fri 6:00 PM - 7:00 PM"
    },
    {
      title: "ADVANCE BATCH",
      instructor: "Shreyash Jagtap",
      description: "Specializes in advanced choreography and technical skill development for experienced dancers.",
      image: "/instructors/shreyash.png",
      timing: "Tue-Thu-Sat 7:00 PM - 8:30 PM"
    }
  ];

  return (
    <section id="services" className="bg-black py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
            Our Dance Batches
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose your perfect batch and learn from our expert instructors
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 