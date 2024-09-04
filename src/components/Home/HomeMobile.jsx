/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import HeroButton, { Dots } from "."
import { AnimatePresence,motion } from "framer-motion";
import Conc from "../../utils/conc";
import { btns, eruditeXl, images, textAnimate, textAnimate2 } from "../../utils/data";


const setting = {
    initial:{ opacity: 0, y: 100 },
                            animate:{ opacity: 1, y: 0 },
                            // exit:{ opacity: 0, y: -10 },
                             transition:{ duration: 0.5 }
}


const HomeMobile = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentIndex2, setCurrentIndex2] = useState(0);
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    // const textAnimate = [
    //     {
    //         img:'/mobile/hm1.png',
    //         head:'In school camp',
    //         desc:'Led by certified experiential educators ensuring engaging activities with meaningful learning outcomes.'
    //     },
    //     {
    //         img:'/mobile/hm2.png',
    //         head:'In school camp',
    //         desc:'Led by certified experiential educators ensuring engaging activities with meaningful learning outcomes.'
    //     },
    //     {
    //         img:'/mobile/hm3.png',
    //         head:'In school camp',
    //         desc:'Led by certified experiential educators ensuring engaging activities with meaningful learning outcomes.'
    //     },
    // ]
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); 

        return () => clearInterval(interval); 
    }, []);


    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textAnimate.length);
        }, 5000); 

        return () => clearInterval(interval); 
    }, []);


    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex2((prevIndex) => (prevIndex + 1) % textAnimate2.length);
        }, 5000); 

        return () => clearInterval(interval); 
    }, []);
  return (
    <div className="w-full overflow-hidden">
        <div className="bg-[#01497B] flex flex-col w-full pb-[20px]">
            <div className="relative m-[40px] mb-[20px]">
            
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                           <img src={images[currentIndex].img} alt="" className="h-[200px]"/>
                        </motion.div>
                    </AnimatePresence>
                <HeroButton className={'absolute top-[60%] left-[40%]'} Text={images[currentIndex].title}/>
                <div className="mt-7 mb-1">

                <Dots imgIndex={currentIndex} setImgIndex={setCurrentIndex} arrayName={images}/>
                </div>
            </div>
            <div className="mx-[20px] flex flex-col gap-[10px] pb-[10px] ">
                <p className="text-[30px] w-[80%] text-white font-bold">We Embark On Adventures, With Purpose</p>
                <p className="w-[80%] text-[16px] text-white font-normal">At Eruditexl we firmly believe that the world is a classroom waiting to be explored.</p>
                {/* button */}
            </div>
        </div>
        <div className="m-[20px] flex flex-col gap-[10px] ">
        <p className="text-[25px] w-full text-black font-bold">Your Ultimate Camping Adventure Awaits</p>
        <p className="text-[16px] w-full text-black font-normal">Our camps offer hands on learning experiences in settings where campers can connect with nature acquire life skills and forge lifelong friendships.</p>
{/* button */}

<AnimatePresence mode="wait">
                        <motion.div className=""
                            key={currentTextIndex}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.5 }}
                        >
                           <img src={textAnimate[currentTextIndex].img} alt="" className="w-full"/>
                          
                        <div className="flex gap-4 items-center mt-6 ">
                            <Conc/>
                        <p className="font-bold font-inter text-20px">{textAnimate[currentTextIndex].head}</p>
                        </div>
                        <p className=" ml-9 ">
                        {textAnimate[currentTextIndex].desc}
                        </p>
                    
                        </motion.div>
            
                    </AnimatePresence>
            <Dots arrayName={textAnimate} imgIndex={currentTextIndex} setImgIndex={setCurrentTextIndex}/>

           
        </div>
        <div 
        className="w-full my-[20px] ">
                <img src="/mobile/hm4.png" alt="" className="w-full"/>

                <motion.div  variants={setting}
        initial='initial'
        whileInView='animate' className="mx-[20px] flex flex-col gap-5">
                    <p className="text-black font-bold text-[25px] w-[80%]">
                    Captain Khoj Mukteshwar Camp
                    </p>
                    <p className="text-black text-[16px] w-full ">
                    Join us for a six night, Seven day summer camp in the scenic beauty of Nainital and Jim Corbett. Enjoy thrilling activities, self-discovery, and a deep connection with nature for an unforgettable adventure.
                    </p>

                    <div className="flex flex-wrap gap-3">
                    {
                    btns.map((item,idx)=>(
                        <motion.button key={idx}  variants={setting}
                        initial='initial'
                        whileInView='animate'
                        className="p-3 border text-gray-600 hover:text-white hover:border-white border-gray-600 rounded-full hover:bg-[#DE8500] group:"
                        >
                            
                                {item.text}
                        </motion.button>
                    ))
                    }
                    </div>
                    {/* button */}
                </motion.div>

                <motion.div className="mt-[40px] gap-[20px] flex flex-col">

                    <p className="mx-[20px] text-black text-[25px] font-bold ">
                        Kashmir Quest
                    </p>
                    <p className="mx-[20px] text-black text-[16px]">
                    Experience the magic of Kashmir in six days stay on Dal Lake houseboats, ride the Gulmarg Gondola, visit saffron fields, and explore Sonamarg and Pahalgam.
                    </p>

                    
                <img src="/mobile/hm5.png" alt="" className="w-full"/>
                <div className="w-full bg-[#090707]">
                <div className="mx-[20px] py-[20px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex2}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.5 }}
                        >
                            <p className="text-white font-bold text-[30px] mb-[20px]">
                                {textAnimate2[currentIndex2].head}
                            </p>
                            <p className="text-white font-inter text-[16px] opacity-90">
                                {textAnimate2[currentIndex2].desc}
                            </p>
                        </motion.div>
                    </AnimatePresence>
                </div>
                <div className="pb-10">

                <Dots imgIndex={currentIndex2} setImgIndex={setCurrentIndex2} arrayName={textAnimate2}/>
                </div>
            </div>
                </motion.div>
            </div>
            <div className="m-[20px] flex flex-col gap-5">
            <p className="text-[25px] font-bold text-black">Welcome To Eruditexl</p>
            <p className="text-[16px] text-black">Erudite Initiatives, particularly through Erudite Experiential Learning, began its journey in 1998 with a unique outbound overnight camp for Oakridge International School. </p>
            </div>

            {
                eruditeXl.map((item,idx)=>(
                    <motion.div key={idx} variants={setting}
                    initial='initial'
                    whileInView={'animate'}
                    transition={'transition'}
                    className="w-full mx-[20px]"
                    >
                        <div className="flex gap-5 items-center">
                            <Conc/>
                            <p className="font-bold text-[20px]">{item.title}</p>
                        </div>
                        <p className="w-[80%] ml-10 mt-3 mb-5">{item.description}</p>
                        
                    </motion.div>
                ))
            }
            {/* buttons */}

            <img src="/mobile/hm6.png" alt="" className="w-full mt-20"/>
            <div className="mx-[20px] flex flex-col gap-5">
                <p className="text-[25px] font-bold w-[80%]">Trained Activity Provider’s License</p>
                <p className="text-[16px]">
                Erudite initiatives Hyderabad is licensed to operate the IAYP ( International Award Of Young People) as a trained activity provider in India.
                </p>
            <img src="/mobile/hm7.png" className="w-full" alt="" />
            </div>
            {/* slider */}


            {/* last */}
            <div className="flex flex-col">
                <img src="/mobile/hm8.png" alt="" />
                <div className="p-[20px] bg-[#E9F9FE]">
                    <p className="text-[25px] font-bold ">Tailored Camp Inquiry</p>
                    <p className="mt-4">Are you looking for a tailored camp experience? Contact us and share your preferences. We'll create a unique adventure just for you.</p>
                    {/* button */}
                </div>
            </div>
    </div>
  )
}

export default HomeMobile