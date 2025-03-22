import React from 'react';
// import { Button } from "./Button";
import { Button } from "./ui/moving-border";

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    window.scrollTo({
      top: element.offsetTop - 50,
      behavior: 'smooth'
    });
  };

  return (
    <section id="home" className="relative min-h-screen text-white flex overflow-hidden">
   
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      >
        <source src="/house.mp4" type="video/mp4" />
      </video>


      <div className=" z-10 container mx-auto px-4 py-32 flex flex-col items-center justify-center text-center space-y-8">
        <div>
          <h1 className="text-5xl md:text-7xl font-bold  mb-6 text-white/60">
            WELCOME TO AVP DANCE SCHOOL
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto">
            Discover the joy of dance and unleash your creative potential
          </p>
          <Button
              onClick={() => scrollToSection('about')}
              borderRadius="1.75rem"
              className="bg-slate-900/60 hover:bg-slate-800/80 text-white border-none transition-all duration-500 backdrop-blur-sm text-xl"
              containerClassName="animate-shimmer"
              borderClassName="bg-[radial-gradient(rgba(255,153,153,0.4)_40%,rgba(153,0,0,0.3)_60%)]"
            >
              Let's Explore
            </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero; 