import React from 'react';
import hero_cover from '../../../../assets/cover.png'
import { IoIosCall } from 'react-icons/io';
import { PiHospitalFill } from 'react-icons/pi';
import { PiPhoneCallFill } from "react-icons/pi";
import { MdMedicalServices } from "react-icons/md";



const Banner = () => {
    return (
        <div>
        <div className='max-w-7xl bg-gradient-to-br from-blue-200 px-10 py-6 mx-auto'>
            <div className='relative flex justify-end items-start  h-screen '>
                <img src={hero_cover} alt="" className='pr-20 ' />
                <div className='absolute top-1/4 left-1/12'>
                    <h1 className='text-5xl font-bold w-96'>We are care life about your health</h1>
                    <p className='font-semibold py-4 w-96 text-gray-500'>Welcome to a place where care meets compassion. Dr. [Name] is dedicated to providing expert medical care with a personal touch.</p>
                    <div className='flex gap-5 items-center'>
                        <button className='bg-green-600 text-white font-semibold border px-5 py-2 rounded-md  flex gap-2 items-center'>Contact Us <IoIosCall className='text-xl' />
                        </button>
                        <button className='bg-green-600 text-white font-semibold border px-5 py-2 rounded-md shadow'>Learn More...</button>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex gap-6 group justify-center items-center relative bottom-20'>
                {/* card-1 */}
                <div className='flex flex-col gap-2 items-center bg-green-300 p-5 shadow-lg rounded transition  hover:-translate-y-5 hover:duration-1000'>
                    <PiHospitalFill className='text-4xl text-red-600' />
                    <h1 className='text-xl font-medium'>Hospital</h1>
                    <p className='text-sm'>Clinical excellent must be the priority</p>
                </div>
                {/* card-2 */}
                <div className='flex flex-col gap-2 items-center bg-green-400 p-5 shadow-lg rounded 
                transition  hover:-translate-y-5 hover:duration-1000 '>
                    <PiPhoneCallFill className='text-4xl text-red-600' />
                    <h1 className='text-xl font-medium'>Emergency call</h1>
                    <p className='text-sm'>Clinical excellent must be the priority</p>
                </div>
                {/* card-3 */}
                <div className='flex flex-col gap-2 items-center bg-blue-300 p-5 shadow-lg rounded 
                transition  hover:-translate-y-5 hover:duration-1000'>
                    <MdMedicalServices  className='text-4xl text-red-500' />
                    <h1 className='text-xl font-medium'>Chember services</h1>
                    <p className='text-sm'>Clinical excellent must be the priority</p>
                </div>

            </div>
        </div>
    );
};

export default Banner;