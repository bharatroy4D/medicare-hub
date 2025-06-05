import React from "react";
import doctorImg from '../../../assets/hero_cover.png'

const About = () => {
  return (
    <section className="relative top-10 bg-gray-50 py-7 lg:py-10  mb-10 px-4 md:px-20">
      <div className="container px-5 lg:px-10 mx-auto">
        <h2 className="text-2xl lg:text-4xl font-bold text-center mb-8 text-black">About Our Doctor</h2>

        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="md:w-1/2">
            <img
              src={doctorImg}
              alt="Doctor"
              className="w-full h-40 lg:h-80 rounded-xl shadow"
            />
          </div>

          <div className="md:w-1/2 space-y-3 lg:space-y-5 text-gray-700">
            <h3 className=" text-xl text-center last:text-start lg:text-2xl font-semibold text-blue-800">Dr. Sarah Williams</h3>
            <p className="hidden lg:block ">
              Dr. Sarah Williams is a board-certified physician with over 15 years of experience in internal medicine and patient care. Her passion for healing and dedication to her patients has made her one of the most trusted doctors in the city.
            </p>
            <p className="">
              Our mission is to provide compassionate, personalized, and affordable healthcare. We believe every patient deserves attentive, quality care tailored to their .
            </p>
            <ul className="list-disc hidden lg:block pl-5 text-gray-800">
              <li>Comprehensive Health Checkups</li>
              <li>Chronic Disease Management</li>
              <li>Pediatric & Geriatric Care</li>
              {/* <li>Telehealth & Virtual Consultations</li> */}
            </ul>
          </div>
        </div>

        {/* <div className="mt-12 text-center">
          <h4 className="text-xl font-semibold mb-2 text-blue-700">“Your Health Is Our Priority.”</h4>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our clinic is designed to make you feel safe, heard, and cared for. Whether it’s a routine checkup or a specialized consultation — we’re here for you, every step of the way.
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default About;
