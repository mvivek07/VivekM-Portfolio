import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profileImage from '../../assets/profile2.png';

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Vivek M
          </h2>
          {/* Skills Heading with Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-green-400 leading-tight">
            <span className="text-white">I am a </span>
            <ReactTypingEffect
              text={[
                'Fullstack Developer',
                'App Developer',
                'UI/UX Designer',
                'Coder',
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-green-400">{cursor}</span>
              )}
            />
          </h3>
          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            A passionate Full-Stack Developer and AI enthusiast, blending code with creativity to build impactful digital solutions. With a love for innovation and a drive to learn, I craft responsive web apps, explore intelligent systems, and aim to create tech that makes life better.
          </p>
          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/135pvBsUzEqb0UU71QWBLCGU8fLubeJnE/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #32CD32, #66ff66)',
              boxShadow: '0 0 2px #32CD32, 0 0 2px #32CD32, 0 0 40px #32CD32',
            }}
          >
            DOWNLOAD Resume
          </a>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img
            src={profileImage}
            alt="Vivek M"
            className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(50,205,50,0.5)]"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
