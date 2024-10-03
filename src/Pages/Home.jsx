import React, { useEffect, useState } from "react";
import CommonBackground from "../Components/CommonBackground";
import HeroImage from "../assets/img/test.jpg";
import SecureIcon from "../assets/img/secure.png"
import encryptedImage from '../assets/img/enc.png';
import syncImg from '../assets/img/sync.png';
import { testimonials } from "../utils/fakeData";
import ProfileImage from "../assets/img/profile.jpg";


const Home = () => {
  const [current, setCurrent] = useState(0);

    // Automatically slide testimonials every 5 seconds
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
      }, 5000); // Change slide every 5 seconds
  
      // Cleanup interval on component unmount
      return () => clearInterval(interval);
    }, []);

  const handleNext = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
  return (
    <CommonBackground>
      <>
        {/* Hero Section */}
        <section className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-24 py-12 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-5xl lg:text-7xl font-bold">
              Stay Connected <br /> Anytime, Anywhere
            </h1>
            <p className="text-lg lg:text-xl">
              Join millions of users who rely on ChatApp for secure and seamless
              communication.
            </p>
            <div className="space-x-4">
              <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg hover:bg-gray-200 transition">
                Get Started
              </button>
              <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-indigo-600 transition">
                Learn More
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 mt-10 lg:mt-0">
            <img
              src={HeroImage}
              alt="Chat App Hero"
              className="w-full h-auto"
            />
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-stone-900">
          <div className="container mx-auto px-6 lg:px-24 text-center">
            <h2 className="text-4xl font-bold text-white mb-8">
              Features You’ll Love
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="p-6 bg-white rounded-lg shadow-lg transform hover:-translate-y-2 transition cursor-pointer">
                <img
                  src={SecureIcon}
                  alt="Feature 1"
                  className="mx-auto mb-6 w-20 h-20"
                />
                <h3 className="text-2xl font-semibold mb-4">
                  Fast & Secure Messaging
                </h3>
                <p className="text-gray-600">
                  Communicate with your friends in real-time with our
                  lightning-fast chat technology.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-lg transform hover:-translate-y-2 transition cursor-pointer">
                <img
                  src={encryptedImage}
                  alt="Feature 2"
                  className="mx-auto mb-6 w-20 h-20"
                />
                <h3 className="text-2xl font-semibold mb-4">
                  Encrypted Conversations
                </h3>
                <p className="text-gray-600">
                  We prioritize your privacy with end-to-end encryption for all
                  chats.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-lg transform hover:-translate-y-2 transition cursor-pointer">
                <img
                  src={syncImg}
                  alt="Feature 3"
                  className="mx-auto mb-6 w-20 h-20"
                />
                <h3 className="text-2xl font-semibold mb-4">
                  Cross-Device Sync
                </h3>
                <p className="text-gray-600">
                  Access your conversations from any device with seamless
                  synchronization.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-24">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">What Our Users Say</h2>
        <div className="relative flex items-center justify-center">
          {/* Slider Controls */}
          <button onClick={handlePrev} className="absolute left-0 transform -translate-x-8 bg-indigo-500 text-white p-3 rounded-full hover:bg-indigo-600 transition">
            &larr;
          </button>
          
          {/* Testimonial Card */}
          <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg mx-auto text-center space-y-6">
            <img
              src={ProfileImage}
              alt={testimonials[current].name}
              className="w-16 h-16 rounded-full mx-auto border-4 border-indigo-500"
            />
            <p className="text-gray-600 italic">"{testimonials[current].feedback}"</p>
            <h4 className="text-xl font-bold text-gray-800">{testimonials[current].name}</h4>
            <span className="text-indigo-600">{testimonials[current].role}</span>
          </div>

          <button onClick={handleNext} className="absolute right-0 transform translate-x-8 bg-indigo-500 text-white p-3 rounded-full hover:bg-indigo-600 transition">
            &rarr;
          </button>
        </div>
        
        {/* Dots for Carousel Navigation */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-4 h-4 rounded-full ${current === idx ? 'bg-indigo-500' : 'bg-gray-300'}`}
            ></button>
          ))}
        </div>
      </div>
    </section>

        {/* Call to Action Section */}
        <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-500 text-white text-center">
          <div className="container mx-auto px-6 lg:px-24">
            <h2 className="text-5xl font-bold mb-6">
              Get Started with ChatApp Today
            </h2>
            <p className="text-lg mb-8">
              Join millions of users and experience the future of communication
              with ChatApp.
            </p>
            <button className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition">
              Sign Up Now
            </button>
          </div>
        </section>
      </>
    </CommonBackground>
  );
};

export default Home;
