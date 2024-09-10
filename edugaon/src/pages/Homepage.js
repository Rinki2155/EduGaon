import Slider from "./Slider";
import Image from "next/image";
import SuccessStory from "./SuccessStory";

function Homepage() {
  return (
    <>
      <Slider />

      <div className="min-h-screen bg-white px-4 py-16  mt-[60px]">
        {/* Mission Section */}
        <div className="max-w-5xl mx-auto mb-12">
          <h3 className="text-center text-red-600 font-bold uppercase mb-12 ">
            Our Mission
          </h3>
          <p className="text-left text-2xl md:text-[25px] font-semibold text-gray-700 leading-snug">
            To empower <span className="text-red-600">rural students</span> in
            India by improving their{" "}
            <span className="text-red-600">English communication</span> skills
            and trained them with{" "}
            <span className="text-red-600">Emerging Technology.</span>
          </p>
          <div className="text-red-600 font-bold uppercase mt-8">
            Our Programs
          </div>
          {/* Programs Section */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-4">
            {/* Program 1 */}
            <div className="border-black border-dotted border-2 p-[3px] rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/Images/2.jpg"
                alt="Professional Diploma in Software Engineering"
                width={500}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h4 className="text-2xl font-bold mb-2">
                  Professional Diploma in Software Engineering
                </h4>
                <p className="text-gray-600 mb-4">2 Year for Inter</p>
                <button className="bg-[#ff9900] text-black font-bold py-2 px-4">
                  100% Job Guaranteed
                </button>
              </div>
            </div>

            {/* Program 2 */}
            <div className="border-black border-dotted border-2 p-[3px] rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/Images/2.jpg"
                alt="Professional Diploma in Software Engineering"
                width={500}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h4 className="text-2xl font-bold mb-2">
                  Professional Diploma in Software Engineering
                </h4>
                <p className="text-gray-600 mb-4">1 Year for BA/BSc/BCom</p>
                <button className="bg-[#ff9900] text-black font-bold py-2 px-4">
                  100% Job Guaranteed
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* our Success program */}
      </div>
      <div className="max-w-5xl mx-auto px-4 py-10 mb-12 text-center">
        <div className="text-[20px] text-red-600 font-bold uppercase tracking-wide mb-2">
          Your Success is Our Success
        </div>
        <div className="text-3xl md:text-[42px] font-bold mb-8 mt-[50px]">
          Take control of your future!
            &nbsp;Start your path to becoming a software engineer now.
        </div>

        <div className="flex flex-col md:flex-row text-red-600 font-bold justify-center md:gap-30 gap-10 mt-[60px]">
          <div className="stat-item">
            <span className="block text-7xl">300+</span>
            <span className="block text-sm uppercase mt-2 tracking-widest">
              Students and Alumni
            </span>
          </div>
          <div className="stat-item">
            <span className="block text-7xl">25+</span>
            <span className="block text-sm uppercase mt-2 tracking-widest">
              Starting Salary
            </span>
          </div>
          <div className="stat-item">
            <span className="block text-7xl">20+</span>
            <span className="block text-sm uppercase mt-2 tracking-widest">
              Companies Hired
            </span>
          </div>
        </div>
      </div>
      <SuccessStory/>
    </>
  );
}

export default Homepage;
