import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { LuTwitter } from 'react-icons/lu'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
    const navigate = useNavigate()
  return (
    <div className='w-full bg-[#001E32] mt-[20px] sm:w-full '>
        <div className='flex gap-2 py-[40px] px-[30px] flex-row sm:flex-col'>
            <div className='w-[20%] flex flex-col gap-5  sm:w-full'>
                <img loading="lazy" src="/Home/logo.svg" alt="" className='w-[60%] '/>
                <p className='font-inter text-[16px] text-white '>
                Join EruditeXL in exploring and discovering your inner strength.
                </p>
            </div>
            <div className='w-[20%] ml-[50px] flex flex-col gap-3 sm:w-full sm:ml-0  sm:mt-8'>
                <p className='font-semibold font-inter text-white'>Quick Links</p>
                <ul>
                    <li onClick={()=>navigate('/')} className='text-white mb-2 cursor-pointer hover:text-[#dfdddd] duration-200 ease-in-out'>Home</li>
                    <li onClick={()=>navigate('/about-us')} className='text-white mb-2 cursor-pointer hover:text-[#dfdddd] duration-200 ease-in-out'>About us</li>
                    {/* <li onClick={()=>navigate('/')} className='text-white mb-2 cursor-pointer hover:text-[#dfdddd] duration-200 ease-in-out'>Camps</li> */}
                    <li onClick={()=>navigate('/national-trips')} className='text-white mb-2 cursor-pointer hover:text-[#dfdddd] duration-200 ease-in-out'>National Trips</li>
                    <li onClick={()=>navigate('/gallery')} className='text-white mb-2 cursor-pointer hover:text-[#dfdddd] duration-200 ease-in-out'>Gallery</li>
                    <li onClick={()=>navigate('/contact-us')} className='text-white mb-2 cursor-pointer hover:text-[#dfdddd] duration-200 ease-in-out'>Contact us</li>
                </ul>
            </div>
            <div className=' flex flex-col gap-3  sm:mt-6'>
                <p className='font-semibold font-inter text-white'>Contact us </p>
                <div className='flex flex-col gap-4'>
                    <div className='flex gap-4'>
                        <img loading="lazy" src="/Home/location.svg" alt="" className=''/>
                        <p className='font-inter text-white text-[16px]'>
                        T Hub, Hyderabad, Telangana, 500081
                        </p>
                    </div>
                    <div className='flex gap-4'>
                        <img loading="lazy" src="/Home/Call.svg" alt="" className=''/>
                        <p className='font-inter text-white text-[16px]'>+91 9247121026</p>
                    </div>
                    <div className='flex gap-4'>
                        <img loading="lazy" src="/Home/Mail.svg" alt="" className=''/>
                        <p className='font-inter text-white text-[16px]'>Info@eruditexl.com</p>
                    </div>
                </div>
            </div>
            <div className=' flex flex-col gap-3 ml-[50px] sm:ml-0 sm:mt-8'>
                <p className='font-semibold font-inter text-white'>Social Media</p>
                <div className='flex gap-4'>
                    <div className='w-10 h-10 hover:bg-[#000] cursor-pointer bg-[#DE8500] rounded-full flex items-center justify-center'>
                        <FaInstagram color='#fff'/>
                    </div>
                    <div className='w-10 h-10 hover:bg-[#000] cursor-pointer bg-[#DE8500] rounded-full flex items-center justify-center'>
                        <FaFacebook color='#fff'/>
                    </div>
                    <div className='w-10 h-10 hover:bg-[#000] cursor-pointer bg-[#DE8500] rounded-full flex items-center justify-center'>
                        <LuTwitter color='#fff'/>
                    </div>
                    <div className='w-10 h-10 hover:bg-[#000] cursor-pointer bg-[#DE8500] rounded-full flex items-center justify-center'>
                        <FaLinkedinIn color='#fff'/>
                    </div>
                </div>
            </div>
        </div>
        <div className='sm:mt-[-40px]'>
            <p className='text-white font-inter text-center py-[40px]'>All © rights are reserved by Eruditexl.com | Developed By Rayformula</p>
        </div>
    </div>
  )
}

export { Footer}