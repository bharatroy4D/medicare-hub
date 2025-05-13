import React from 'react';
import hero_cover from '../../../../assets/cover.png';
import { IoIosCall } from 'react-icons/io';

const Banner = () => {
    return (
        <div className="bg-gradient-to-br from-blue-200 py-12 w-full">
            <div className="container mx-auto px-5 lg:px-10 flex flex-col md:flex-row items-center justify-between min-h-[80vh]">
                {/* Left - Text Content */}
                <div className="md:w-2/3 space-y-6">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800  leading-tight">
                        Your Health, Our Priority Every Single Day
                    </h1>

                    <p className="text-red-500 text-lg">
                        Welcome to a trusted healthcare center where compassion meets excellence. Dr. [Name] and the team are committed to delivering personalized, expert care for your health and well-being.
                    </p>

                    <div className="flex gap-4">
                        <button className="bg-green-600 hover:bg-green-700 transition text-white font-semibold px-6 py-3 rounded-md flex items-center gap-2 shadow">
                            Contact Us <IoIosCall className="text-xl" />
                        </button>
                        <button className="bg-white border border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition font-semibold px-6 py-3 rounded-md shadow">
                            Learn More...
                        </button>
                    </div>
                </div>

                {/* Right - Image with Background Shadow Design */}
                <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center relative">
                    {/* Decorative Background Shape */}
                    <div className="absolute -top-10 -left-10 w-72 h-72 bg-green-100 rounded-full blur-3xl opacity-50 z-0"></div>

                    {/* Doctor Image */}
                    <img
                        src={hero_cover}
                        alt="Healthcare Banner"
                        className="relative z-10 max-w-full h-auto drop-shadow-xl"
                    />
                </div>
            </div>
        </div>
    );
};

export default Banner;
