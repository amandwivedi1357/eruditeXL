
/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState, useRef } from "react";
import HeroButton, { Dots } from "."
import { AnimatePresence, motion } from "framer-motion";
import Conc from "../../utils/conc";
import { btns, eruditeXl, images, textAnimate, textAnimate2 } from "../../utils/data";
import { Schools } from "../schools";

const setting = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const HomeMobile = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  // Refs to store the interval IDs
  const imageIntervalRef = useRef(null);
  const textIntervalRef = useRef(null);
  const textAnimate2IntervalRef = useRef(null);

  // Function to reset the interval for the image slider
  const resetImageInterval = () => {
    if (imageIntervalRef.current) clearInterval(imageIntervalRef.current);
    imageIntervalRef.current = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000);
  };

  // Function to reset the interval for the first text animation
  const resetTextInterval = () => {
    if (textIntervalRef.current) clearInterval(textIntervalRef.current);
    textIntervalRef.current = setInterval(() => {
      setCurrentTextIndex(prevIndex => (prevIndex + 1) % textAnimate.length);
    }, 5000);
  };

  // Function to reset the interval for the second text animation
  const resetTextAnimate2Interval = () => {
    if (textAnimate2IntervalRef.current) clearInterval(textAnimate2IntervalRef.current);
    textAnimate2IntervalRef.current = setInterval(() => {
      setCurrentIndex2(prevIndex => (prevIndex + 1) % textAnimate2.length);
    }, 5000);
  };

  // Effect for image slider
  useEffect(() => {
    resetImageInterval();
    return () => clearInterval(imageIntervalRef.current);
  }, [currentIndex]);

  // Effect for the first text animation
  useEffect(() => {
    resetTextInterval();
    return () => clearInterval(textIntervalRef.current);
  }, [currentTextIndex]);

  // Effect for the second text animation
  useEffect(() => {
    resetTextAnimate2Interval();
    return () => clearInterval(textAnimate2IntervalRef.current);
  }, [currentIndex2]);

  // Handlers for user interaction to reset intervals when they click a dot or interact
  const handleImageDotClick = (index) => {
    setCurrentIndex(index);
    resetImageInterval();  // Reset the image interval
  };

  const handleTextDotClick = (index) => {
    setCurrentTextIndex(index);
    resetTextInterval();  // Reset the first text interval
  };

  const handleTextAnimate2DotClick = (index) => {
    setCurrentIndex2(index);
    resetTextAnimate2Interval();  // Reset the second text interval
  };

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
              <img loading="lazy" src={images[currentIndex].img} alt="" className="h-[200px]" />
            </motion.div>
          </AnimatePresence>
          <HeroButton className={'absolute top-[60%] left-[40%]'} Text={images[currentIndex].title} />
          <div className="mt-7 mb-1">
            <Dots imgIndex={currentIndex} setImgIndex={handleImageDotClick} arrayName={images} />
          </div>
        </div>
        <div className="mx-[20px] flex flex-col gap-[10px] pb-[10px] ">
          <p className="text-[30px] w-[80%] text-white font-bold">We Embark On Adventures, With Purpose</p>
          <p className="w-[80%] text-[16px] text-white font-normal">At Eruditexl we firmly believe that the world is a classroom waiting to be explored.</p>
        </div>
      </div>

      <div className="m-[20px] flex flex-col gap-[10px]">
        <p className="text-[25px] w-full text-black font-bold">Your Ultimate Camping Adventure Awaits</p>
        <p className="text-[16px] w-full text-black font-normal">Our camps offer hands on learning experiences in settings where campers can connect with nature, acquire life skills, and forge lifelong friendships.</p>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentTextIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
          >
            <img loading="lazy" src={textAnimate[currentTextIndex].img} alt="" className="w-[250px] mx-auto" />
            <div className="flex gap-4 items-center mt-6">
              <Conc />
              <p className="font-bold font-inter text-20px">{textAnimate[currentTextIndex].head}</p>
            </div>
            <p className="ml-9">{textAnimate[currentTextIndex].desc}</p>
          </motion.div>
        </AnimatePresence>

        <Dots arrayName={textAnimate} imgIndex={currentTextIndex} setImgIndex={handleTextDotClick} />
      </div>

      <div className="w-full my-[20px]">
        <img loading="lazy" src="/mobile/hm4.png" alt="" className="w-full" />
        <motion.div variants={setting} initial='initial' whileInView='animate' className="mx-[20px] flex flex-col gap-5">
          <p className="text-black font-bold text-[25px] w-[80%]">Captain Khoj Mukteshwar Camp</p>
          <p className="text-black text-[16px] w-full">Join us for a six night, seven day summer camp in the scenic beauty of Nainital and Jim Corbett. Enjoy thrilling activities, self-discovery, and a deep connection with nature for an unforgettable adventure.</p>

          <div className="flex flex-wrap gap-3">
            {btns.map((item, idx) => (
              <motion.button key={idx} variants={setting} initial='initial' whileInView='animate' className="p-3 border text-gray-600 hover:text-white hover:border-white border-gray-600 rounded-full hover:bg-[#DE8500] group:">
                {item.text}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div className="mt-[40px] gap-[20px] flex flex-col">
          <p className="mx-[20px] text-black text-[25px] font-bold">Kashmir Quest</p>
          <p className="mx-[20px] text-black text-[16px]">Experience the magic of Kashmir in six days stay on Dal Lake houseboats, ride the Gulmarg Gondola, visit saffron fields, and explore Sonamarg and Pahalgam.</p>
          <img loading="lazy" src="/mobile/hm5.png" alt="" className="w-full" />
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
                  <p className="text-white font-bold text-[30px] mb-[20px]">{textAnimate2[currentIndex2].head}</p>
                  <p className="text-white font-inter text-[16px] opacity-90">{textAnimate2[currentIndex2].desc}</p>
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="pb-10">
              <Dots imgIndex={currentIndex2} setImgIndex={handleTextAnimate2DotClick} arrayName={textAnimate2} />
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

            <img loading="lazy" src="/mobile/hm6.png" alt="" className="w-full mt-20"/>
            <div className="mx-[20px] flex flex-col gap-5">
                <p className="text-[25px] font-bold w-[80%]">Trained Activity Provider’s License</p>
                <p className="text-[16px]">
                Erudite initiatives Hyderabad is licensed to operate the IAYP ( International Award Of Young People) as a trained activity provider in India.
                </p>
            <img loading="lazy" src="/mobile/hm7.png" className="w-full" alt="" />
            </div>
            {/* slider */}
            <motion.div
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         transition={{ duration: 0.5 }}
        className=" w-full py-10">
        <Schools/>
        </motion.div>
            <div className="w-full mt-3">
  {/* <img loading="lazy" src="/Home/mount.png" alt="" className="w-full" /> */}

            <p className="text-[24px] m-[20px] font-bold">Upcoming Events</p>
  <div className="flex gap-10 items-center w-[90%]  mx-auto mb-6">
    {/* First Card */}
    <div className="flex gap-3 flex-col items-center sm:items-start">
      <img loading="lazy" src="/Home/skygaze.png" alt="" className="w-[287px]" />
      <p className="text-[18px] sm:text-[12px] font-bold font-inter">Sky Gazing</p>
      <p className="text-[16px] sm:hidden font-inter text-center w-[70%]">With 25 years of rich experience in outbound experiential learning.</p>
    </div>

    {/* Second Card */}
    <div className="flex gap-3 flex-col items-center">
      <img loading="lazy" src="/mobile/space.jpg" alt="" className="w-[287px] rounded-md" />
      <p className="text-[18px] sm:text-[12px] font-bold font-inter">Space Settlement Contest</p>
      <p className="text-[16px] sm:hidden font-inter text-center w-[70%]">Join us in exploring new frontiers through exciting challenges in space science and technology.</p>
    </div>
  </div>
</div>

            {/* last */}
            <div className="flex flex-col">
                <img loading="lazy" src="/mobile/hm8.png" alt="" />
                <div className="p-[20px] bg-[#E9F9FE]">
                    <p className="text-[25px] font-bold ">Tailored Camp Inquiry</p>
                    <p className="mt-4">Are you looking for a tailored camp experience? Contact us and share your preferences. We'll create a unique adventure just for you.</p>
                    {/* button */}
                </div> 
    </div>
    
</div>
  );
};

export default HomeMobile;