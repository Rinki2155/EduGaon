"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Slider = () => {
  // State for active slide
  const [activeSlide, setActiveSlide] = useState(0);

  // Array of slider data
  const slides = [
    {
      title: "Empower your career",
      heading: "India’s Unique Software Engineering Institute",
      description:
        "We train you with life skill, communication skill and software engineering to empower your life",
      image: "/images/1.png",
    },
    {
      title: "LEarn and  start earning",
      heading: "Become Software Enginner",
      description: "Spend 2 year with us and start earing from 3rd year.",
      image: "/images/1.png",
    },
    {
      title: "Indutry-relevant skills",
      heading: "Learn with Indutry Expert ",
      description:
        "Power ahead with new age Indutry-relevant skills from Industry Expert.",
      image: "/images/1.png",
    },
    {
      title: "Focus on real skills",
      heading: "Focus on real-world skills, not just academic credentials.",
      description:
        "Acquiring practical skills and hands-on experience over merely focusing on academic qualifications or theoretical knowledge",
      image: "/images/1.png",
    },
  ];

  // Function to go to the next slide

  const nextSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setActiveSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Slide Wrapper */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${activeSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full flex flex-col md:flex-row items-center justify-between bg-gray-100"
          >
            {/* Text Content */}
            <div className="flex-1 px-8 md:px-16 text-center md:text-left ml-[30]">
              <h2 className="text-[18px] font-bold uppercase text-red-600 font-semibold">
                {slide.title}
              </h2>
              <h1 className="mt-4 text-3xl font-bold text-black md:text-5xl">
                {slide.heading}
              </h1>
              <p className="mt-6 text-gray-500 text-lg max-w-xl mx-auto md:mx-0">
                {slide.description}
              </p>
            </div>

            {/* Image Content */}
            <div className="flex-1 w-full max-w-lg md:max-w-none md:mt-0">
              <Image
                src={slide.image}
                alt={slide.heading}
                className="object-cover w-full h-auto"
                layout="responsive"
                width={500}
                height={500}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Prev/Next Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-600 text-white p-2 rounded-full"
      >
        <FaChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-600 text-white p-2 rounded-full"
      >
        <FaChevronRight size={24} />
      </button>

      {/* Dots for navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveSlide(index)}
            className={`w-3 h-3 rounded-full ${
              activeSlide === index ? "bg-red-600" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
