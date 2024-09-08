import Image from 'next/image';
import { FaLinkedin } from 'react-icons/fa';

function SuccessStory() {
  return (
    <div className="max-w-5xl mx-auto p-4">
      {/* Main Feature Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Image Section */}
        <div className="flex flex-col items-center">
          <div className="relative w-full h-[400px] md:w-[420px] md:h-[500px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/Images/Abhishek.png" // Image source path
              alt="Abhishek Kumar"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
            <div className="absolute bottom-0 left-0 w-full bg-[orange-500] text-white p-2">
              <p className="text-sm font-semibold">Software Engineer</p>
              <p className="text-xs">Abhishek Kumar</p>
              <p className="text-xs">Dreamvessels, Noida</p>
            </div>
          </div>
        </div>

        {/* Right Text Section */}
        <div className="flex flex-col items-start">
          <div className="bg-[#ff9900] w-[350px] px-4 py-4 text-center h-30 font-bold text-sm">
            FEATURE STORY
          </div>
          <h1 className="mt-9 text-3xl">
            I was able to change my life and now working as software engineer
          </h1>
          <p className="mt-12 font-bold text-[20px]">ABHISHEK KUMAR</p>
          <p className="text-[18px] text-gray-600">Dreamvessels, Noida</p>
          <a
            href="https://www.linkedin.com"
            className="mt-12 flex items-center text-blue-600"
          >
            <FaLinkedin size={100} className="mr-2" />
          </a>
        </div>
      </div>

      {/* Thumbnail Grid Section */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-2">
        {Array(5)
          .fill('')
          .map((_, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="relative w-[150px] h-[100px] rounded-lg overflow-hidden">
                <Image
                  src="/Images/Abhishek.png" // Image source path
                  alt="Abhishek Kumar"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <p className="text-sm font-semibold mt-2">Abhishek Kumar</p>
              <p className="text-xs text-gray-500">Dreamvessels, Noida</p>
            </div>
          ))}
      </div>
    </div>
  );
}
export default SuccessStory;