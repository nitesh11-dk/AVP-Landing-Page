import React from 'react';
import { HoverEffect } from "./ui/hover-effect"; 
const About = () => {
  const features = [
    {
      title: "Expert Instructors 👨‍🏫",
      description: "Learn from professional dancers with years of experience in Hip-Hop. Our instructors bring their unique style and expertise to every class.",
      link: "#",
    },
    {
      title: "All Skill Levels ⭐",
      description: "Whether you're a beginner taking your first steps or an advanced dancer looking to perfect your moves, we have the perfect class for you.",
      link: "#",
    },
    {
      title: "Vibrant Community 🤝",
      description: "Join a supportive and energetic community of dancers. Share experiences, learn together, and grow in a positive environment.",
      link: "#",
    }
  ];

  const stats = [
    { number: "500+", label: "Students Trained 🎓" },
    { number: "10+", label: "Years Experience 🌟" },
    { number: "15+", label: "Dance Styles 💃" }
  ];

  return (
    <section id="about" className="py-20 bg-black/[0.96] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            About AVP Dance 🎵
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Welcome to AVP dance school, your go-to place for Hip-Hop dance! We specialize 
            in dynamic hip-hop culture, bringing the best of urban dance to our community.
          </p>
        </div>

        <HoverEffect items={features} />

        <div className="grid md:grid-cols-3 gap-8 text-center mt-16">
          {stats.map((stat, index) => (
            <div key={index} className="p-6">
              <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 mb-2">
                {stat.number}
              </div>
              <p className="text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About; 