"use client";
import { useState } from "react";
import { FaLinkedin ,FaChevronLeft,FaChevronRight} from "react-icons/fa";

const students = [
  {
    id: 1,
    name: "Sudiish Kumar",
    company: "EduGaon, Amnour",
    linkedin: "https://www.linkedin.com/in/sudishkumar/",
    image: "/Images/1.png",
  },
  {
    id: 4,
    name: "Guddu Kumar",
    company: "PlayerzPot Media Pvt Ltd, Mumbai",
    linkedin: "https://www.linkedin.com/in/guddu-kumar-206b48233/",
    image: "/Images/guddu.png",
  },
  {
    id: 5,
    name: "Rinki Kumar",
    company: "EduGaon, Noida",
    linkedin: "https://www.linkedin.com/in/rinki-kumari-2b135b237/",
    image: "/Images/rinki.png",
  },
  {
    id: 6,
    name: "Ansar Ali Sah",
    company: "BrightFuture, Noida",
    linkedin: "https://www.linkedin.com/in/ansar-ali-shah-65686b222/",
    image: "/Images/m.png",
  },
  {
    id: 7,
    name: "Anurag Kumar",
    company: "Proclivity Digitech Private Limited, Kolkata",
    linkedin: "https://www.linkedin.com/in/anuragedugaon/",
    image: "/Images/anurag.png",
  },
  {
    id: 8,
    name: "Suraj Singh",
    company: "BrightFuture, Noida",
    linkedin: "https://www.linkedin.com/in/surajsinghedugaon/",
    image: "/Images/suraj.png",
  },
  {
    id: 9,
    name: "Ankit Kumar",
    company: "Lenditt Innovations & Technologies Pvt Ltd, Gujarat",
    linkedin: "https://www.linkedin.com/in/ankit-patel-779913257/",
    image: "/Images/ankit.png",
  },
  {
    id: 10,
    name: "Sahil Kumar",
    company: "BrightFuture, Noida",
    linkedin: "https://www.linkedin.com/in/sahil-kumar-30bb79244/",
    image: "/Images/sahil.png",
  },
  {
    id: 9,
    name: "Ankit Kumar",
    company: "Lenditt Innovations & Technologies Pvt Ltd, Gujarat",
    linkedin: "https://www.linkedin.com/in/ankit-patel-779913257/",
    image: "/Images/ankit.png",
  },
  {
    id: 10,
    name: "Sahil Kumar",
    company: "BrightFuture, Noida",
    linkedin: "https://www.linkedin.com/in/sahil-kumar-30bb79244/",
    image: "/Images/sahil.png",
  },
];

function SuccessStory() {
  const [selectedStudent, setSelectedStudent] = useState(students[0]);
  const [startIndex, setStartIndex] = useState(0);

  const showNext = () => {
    if (startIndex + 7 < students.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const showPrevious = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <div className="text-xl font-bold text-red-500 mb-4 py-4">SUCCESS STORIES</div>

      {/* Main Featured Story */}
      <div className="max-w-4xl flex flex-col items-center justify-center md:flex-row items-start space-x-0 md:space-x-12 mb-9 w-full mx-auto">
        <img
          src={selectedStudent.image}
          alt={selectedStudent.name}
          className="w-[350px] h-[350px] md:w-[350px] md:h-[350px] rounded-[12px] p-[2px] bg-gradient-to-r from-[#FF3131] to-[#FF914D] mb-4 md:mb-0"
        />

        <div className="flex flex-col text-center md:text-left items-center md:items-start">
          <div className="bg-[#ff9900] w-[200px] md:w-[430px] px-4 text-center font-bold text-sm h-[50px] flex items-center justify-center">
            FEATURE STORY
          </div>

          <div className="text-2xl md:text-3xl py-2">{selectedStudent.name}</div>
          <p className="text-gray-700 text-[16px] md:text-[20px]">{selectedStudent.company}</p>

          <a
            href={selectedStudent.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="py-6 mt-4"
          >
            <FaLinkedin size={50} md={70} color="#2097BD" />
          </a>
        </div>
      </div>

      {/* Thumbnail Carousel */}
      <div className="w-full flex justify-center items-center mt-4">
  <button
    onClick={showPrevious}
    className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-2 rounded-l disabled:opacity-50"
    disabled={startIndex === 0}
  >
    <FaChevronLeft size={24} />
  </button>

  {/* Carousel */}
  <div className="flex overflow-x-scroll lg:overflow-x-hidden items-center justify-center space-x-2 mx-2 w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-4xl">
    {students.slice(startIndex, startIndex + 7).map((student) => (
      <div
        key={student.id}
        onClick={() => setSelectedStudent(student)}
        className="cursor-pointer p-2 rounded-lg transition-shadow flex-shrink-0"
      >
        <img
          src={student.image}
          alt={student.name}
          className="w-24 h-24 sm:w-32 sm:h-32 md:w-20 md:h-20 rounded-[12px] p-[2px] bg-gradient-to-r from-[#FF3131] to-[#FF914D]"
        />
      </div>
    ))}
  </div>

  <button
    onClick={showNext}
    className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-2 rounded-r disabled:opacity-50"
    disabled={startIndex + 7 >= students.length}
  >
    <FaChevronRight size={24} />
  </button>
</div>

    </div>
  );
}

export default SuccessStory;


// import Image from 'next/image';
// import { FaLinkedin } from 'react-icons/fa';

// function SuccessStory() {
//   return (
//     <div className="max-w-5xl mx-auto p-4">
//       {/* Main Feature Section */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//         {/* Left Image Section */}
//         <div className="flex flex-col items-center">
//           <div className="relative w-full h-[400px] md:w-[420px] md:h-[500px] rounded-lg overflow-hidden shadow-lg">
//             <Image
//               src="/Images/Abhishek.png" // Image source path
//               alt="Abhishek Kumar"
//               layout="fill"
//               objectFit="cover"
//               className="rounded-lg"
//             />
//             <div className="absolute bottom-0 left-0 w-full bg-[orange-500] text-white p-2">
//               <p className="text-sm font-semibold">Software Engineer</p>
//               <p className="text-xs">Abhishek Kumar</p>
//               <p className="text-xs">Dreamvessels, Noida</p>
//             </div>
//           </div>
//         </div>

//         {/* Right Text Section */}
//         <div className="flex flex-col items-start">
//           <div className="bg-[#ff9900] w-[350px] px-4 py-4 text-center h-30 font-bold text-sm">
//             FEATURE STORY
//           </div>
//           <h1 className="mt-9 text-3xl">
//             I was able to change my life and now working as software engineer
//           </h1>
//           <p className="mt-12 font-bold text-[20px]">ABHISHEK KUMAR</p>
//           <p className="text-[18px] text-gray-600">Dreamvessels, Noida</p>
//           <a
//             href="https://www.linkedin.com"
//             className="mt-12 flex items-center text-blue-600"
//           >
//             <FaLinkedin size={100} className="mr-2" />
//           </a>
//         </div>
//       </div>

//       {/* Thumbnail Grid Section */}
//       <div className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-2">
//         {Array(5)
//           .fill('')
//           .map((_, index) => (
//             <div key={index} className="flex flex-col items-center">
//               <div className="relative w-[150px] h-[100px] rounded-lg overflow-hidden">
//                 <Image
//                   src="/Images/Abhishek.png" // Image source path
//                   alt="Abhishek Kumar"
//                   layout="fill"
//                   objectFit="cover"
//                   className="rounded-lg"
//                 />
//               </div>
//               <p className="text-sm font-semibold mt-2">Abhishek Kumar</p>
//               <p className="text-xs text-gray-500">Dreamvessels, Noida</p>
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// }
// export default SuccessStory;
