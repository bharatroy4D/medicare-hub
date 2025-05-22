import React from 'react';
import hero_cover from '../../../../assets/cover.png';
import { IoIosCall } from 'react-icons/io';
import { FaStethoscope, FaHeartbeat, FaPlusCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

const floatingIconVariants = {
    float: {
        y: [0, -15, 0],
        transition: {
            duration: 3,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut'
        }
    }
};

const Banner = () => {
    return (
        <div className="bg-gradient-to-br from-[#e0f7fa] via-white to-[#f1f8e9] py-14 w-full overflow-hidden">
            <div className="container mx-auto px-5 lg:px-10 flex flex-col-reverse md:flex-row items-center justify-between min-h-[80vh] gap-10">

                {/* Left - Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="w-full md:w-2/3 space-y-6 text-center md:text-left"
                >
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 leading-snug">
                        <div>
                            Your Health, <span className="text-green-600">Our Mission</span>
                        </div>
                        <div className="text-xl sm:text-2xl md:text-3xl text-gray-700 font-semibold mt-2">
                            Caring with Compassion
                        </div>
                    </h1>

                    <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                        Trusted care, advanced treatment, and a team that truly cares — all in one place.
                        From routine checkups to specialized treatments, we ensure every patient receives personalized attention with empathy, expertise, and integrity.
                    </p>

                    <div className="flex flex-wrap justify-center md:justify-start gap-4">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-3 rounded-md flex items-center gap-2 shadow-md"
                        >
                            Contact Us <IoIosCall className="text-xl" />
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-3 rounded-md shadow-md"
                        >
                            Book Appointment
                        </motion.button>
                    </div>
                </motion.div>

                {/* Right - Image Section */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="w-full md:w-1/2 flex justify-center relative"
                >
                    {/* Decorative Background Shape */}
                    <div className="absolute -top-10 -left-10 w-60 h-60 sm:w-72 sm:h-72 bg-green-100 rounded-full blur-3xl opacity-50 z-0"></div>

                    {/* Floating Icons */}
                    <motion.div
                        className="absolute top-6 left-2 sm:left-[-40px] text-green-400 text-2xl sm:text-3xl z-20"
                        variants={floatingIconVariants}
                        animate="float"
                    >
                        <FaStethoscope />
                    </motion.div>

                    <motion.div
                        className="absolute bottom-12 right-2 sm:right-[-35px] text-red-400 text-3xl sm:text-4xl z-20"
                        variants={floatingIconVariants}
                        animate="float"
                        transition={{ delay: 1 }}
                    >
                        <FaHeartbeat />
                    </motion.div>

                    <motion.div
                        className="absolute top-16 right-2 sm:right-[-40px] text-blue-400 text-2xl sm:text-3xl z-20"
                        variants={floatingIconVariants}
                        animate="float"
                        transition={{ delay: 2 }}
                    >
                        <FaPlusCircle />
                    </motion.div>

                    {/* Doctor Image */}
                    <img
                        src={hero_cover}
                        alt="Doctor at Medicare Clinic"
                        className="relative z-10 max-w-full h-auto drop-shadow-xl rounded-xl"
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default Banner;
