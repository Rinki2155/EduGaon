"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../styles/homepage.module.css";

type slide = {
  subheading: string;
  heading: string;
  description: string;
}

const slideText: slide[] = [
  {
    subheading: 'EMPOWER YOUR CAREER',
    heading: 'India’s unique Software Engineering Institute',
    description:
      'We train you with life skills, communication skills, and software engineering to empower your life.',
  },
  {
    subheading: 'Learn and  start earning',
    heading: 'Become Software Enginner',
    description: 'Spend 2 year with us and start earing from 3rd year',
  },
  {
    subheading: 'Indutry-relevant skills',
    heading: 'Learn with Indutry Expert ',
    description:
      'Power ahead with new age Indutry-relevant skills from Industry Expert',
  },
  {
    subheading: 'Focus on real skills',
    heading: 'Focus on real-world skills, not just academic credentials. ',
    description:
      'Acquiring practical skills and hands-on experience over merely focusing on academic qualifications or theoretical knowledge',
  },
];

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slideText.length);
    }, 5000);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <>
      <section className={styles.mainContent}>
        <div className={`ml-[80px] ${styles.textContent}`}>
          <h3 className={styles.subheading}>
            {slideText[currentSlide].subheading}
          </h3>
          <h1 className={styles.heading}>{slideText[currentSlide].heading} </h1>
          <p className={styles.description}>
            {slideText[currentSlide].description}
          </p>
        </div>
        <div className={styles.imageContent}>
          <Image
            src="/image/1.png"
            alt="Student Image"
            width={780}
            height={700}
            className={styles.image}
          />
        </div>
      </section>
    </>
  );
};

export default HomePage;