/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react"
import Conc from "../../utils/conc.jsx"
import FadeUpAnimation from "../../utils/FadeUp.jsx"
import { Button } from "../Button/index.jsx"
import { motion,AnimatePresence } from "framer-motion"
import "./style.css"
import HomeMobile from "./HomeMobile.jsx"



const textAnimate = [
    {
        head: 'Cultural Immersion',
        desc:(<>
        Understanding Local Traditions, living on a houseboat and visiting local crafts units provide firsthand insight into Kashmiri culture and traditions. <br /><br />

Interaction with Locals, engaging with local artisans and residents helps students understand the daily life, challenges, and customs of the people in Kashmir.
        </>)
    },
    {
        head: 'Cultural Immersion',
        desc:(<>
        Understanding Local Traditions, living on a houseboat and visiting local crafts units provide firsthand insight into Kashmiri culture and traditions. <br /><br />

Interaction with Locals, engaging with local artisans and residents helps students understand the daily life, challenges, and customs of the people in Kashmir.
        </>)
    },
    {
        head: 'Regional Immersion',
        desc:(<>
        Understanding Local Traditions, living on a houseboat and visiting local crafts units provide firsthand insight into Kashmiri culture and traditions. <br /><br />

Interaction with Locals, engaging with local artisans and residents helps students understand the daily life, challenges, and customs of the people in Kashmir.
        </>)
    },
    {
        head: 'National Immersion',
        desc:(<>
        Understanding Local Traditions, living on a houseboat and visiting local crafts units provide firsthand insight into Kashmiri culture and traditions. <br /><br />

Interaction with Locals, engaging with local artisans and residents helps students understand the daily life, challenges, and customs of the people in Kashmir.
        </>)
    },
]



export const HeroButton = ({className,Text}) => {
  return (
    <div className={className}>

    <button className="HeroButton"> {Text}
</button>
    </div>
  )
}

export default HeroButton
const HomePage = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % textAnimate.length);
        }, 5000); // Switch every 5 seconds

        return () => clearInterval(interval); // Clean up the interval on unmount
    }, []);
    
  return (
    <div className='w-full'>
        <div className="sm:hidden w-full">

       
        <div className='w-full h-[80vh]  bg-[#01497B] flex '>
            <div className=" flex justify-center items-center w-[40%]">
                <div className="flex gap-[20px] flex-col  w-[78%] ">
                    <p className="font-inter leading-[55px] text-white font-bold text-[45px]">We Embark On Adventures, With Purpose</p>
                    <p className="font-inter leading-7 text-[#ffffffE6] ">At Eruditexl we firmly believe that the world is a classroom waiting to be explored.</p>
                </div>
            </div>
            <div className=" w-[60%] relative">
                <img className="z-10 absolute top-[40%]" src="/Home/ils1.png" alt="" />
                <img className="z-10 absolute left-[45%] top-[10%]" src="/Home/ils2.png" alt="" />
                <img className="z-10 absolute top-[40%] right-[0%]" src="/Home/ils_left.png" alt="" />
                <img className="z-10 absolute bottom-[5%] left-[35%]" src="/Home/ils_bottom.png" alt="" />
                <HeroButton className={'z-10 absolute top-[20%] right-[20%]'} Text={'Skill Building'}/>
                <HeroButton className={'z-10 absolute top-[50%] left-[30%]'} Text={'Personalised Experience'}/>
                <HeroButton className={'z-10 absolute bottom-[10%] left-[5%]'} Text={'Personality Development'}/>
                <HeroButton className={'z-10 absolute bottom-[15%] right-[0%]'} Text={'Educational Adventure '}/>
            </div>
        </div>
        
        <div className="w-full mt-[50px]">
            <div className="mx-[40px] sm:mx-[20px] flex justify-between sm:flex-col">
                <div className="w-[35%] flex flex-col gap-[25px] sm:w-full ">
                    <p className="text-black text-[40px] font-bold font-inter sm:text-[25px] ">
                    Your Ultimate Camping Adventure Awaits
                    </p>
                    <p className="text-[16px]">
                    Our camps offer hands on learning experiences in settings where campers can connect with nature acquire life skills and forge lifelong friendships.
                    </p>
                   
                    <div className=" self-start">

                    <Button  text={'Explore Now'}/>
                    </div>
                    
                </div>
                <div className="w-[60%]  flex  sm:w-full">
                    <div className="w-full flex flex-col gap-3 flex-1 ">
                        <img src="/Home/leadership.png" alt="" className="w-[60%] mx-auto"/>
                        <div className="flex gap-4 items-center">
                            <Conc/>
                        <p className="font-bold font-inter text-20px">Leadership camp</p>
                        </div>
                        <p className="w-[85%] mr-2 ml-9">
                        Led by certified experiential educators ensuring engaging activities with meaningful learning outcomes.  
                        </p>
                    </div>
                    <div className="w-full flex flex-col gap-5 flex-1 ">
                        <div className="flex gap-4 items-center">
                            <Conc/>
                        <p className="font-bold font-inter text-20px">Student outbound camp</p>
                        </div>
                        <p className="w-[85%] mr-2 ml-9">
                        Led by certified experiential educators ensuring engaging activities with meaningful learning outcomes.
                        </p>
                        <img src="/Home/outbound.png" alt="" className="w-[60%] mx-auto"/>
                    </div>
                </div>
            </div>
            <div className="w-[60%]  my-[70px] mx-[40px] flex items-center gap-10">
                <img src="/Home/school.png" alt="" />
                <div className="flex flex-col gap-3">

                    <div className="flex gap-5 items-center">
                        <Conc/>
                        <p className="font-bold font-inter text-20px">In school camp</p>
                    </div>
                    <p className="w-[85%] mr-2 ml-9">Led by certified experiential educators ensuring engaging activities with meaningful learning outcomes.</p>
                </div>
            </div>
        </div>

        {/* <div className="mx-[40px]">
            Mukteshwar khoj
        </div> */}

        {/* Kashmir quest starts */}
            <FadeUpAnimation>

        <div className=" w-full">
            <div className="flex flex-col gap-4 items-center justify-center">
                <p className="font-bold text-[40px] font-inter">Kashmir Quest</p>
                <p className="w-[50%] text-center">
                Experience the magic of Kashmir in six days stay on Dal Lake houseboats, ride the Gulmarg Gondola, visit saffron fields, and explore Sonamarg and Pahalgam.
                </p>
            </div>
            <div className="w-full relative">
            <img src="/Home/kashmir.png" alt="" className="w-full" />

            <div className="w-[526px] h-[326px] bg-transparent-black absolute top-[30%] left-[8%]">
                <div className="mx-[36px] my-[25px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.5 }}
                        >
                            <p className="text-white font-bold text-[30px] mb-[20px]">
                                {textAnimate[currentIndex].head}
                            </p>
                            <p className="text-white font-inter text-[16px] opacity-90">
                                {textAnimate[currentIndex].desc}
                            </p>
                        </motion.div>
                    </AnimatePresence>
                </div>
                <Dots imgIndex={currentIndex} setImgIndex={setCurrentIndex} arrayName={textAnimate}/>
            </div>
        </div>
        </div>
            </FadeUpAnimation>

        <div className="w-full ">
        <div className="flex flex-col gap-4 items-center justify-center">
                <p className="font-bold text-[40px] font-inter">Welcome To Eruditexl</p>
                <p className="w-[50%] text-center">
                Erudite Initiatives, particularly through Erudite Experiential Learning, began its journey in 1998 with a unique outbound overnight camp for Oakridge International School. 
                </p>
                <div className="mt-[20px]">
                <Button text={'Explore Now'}/>
                </div>

            </div>
            <div className="h-[800px] relative">
                <div className="absolute w-[351px] top-[30%] left-[10%] flex flex-col gap-4 ">
                    <div className="w-full flex flex-col gap-2  ">

                            <div className="flex gap-4 items-center">
                            <Conc/>
                        <p className="font-bold font-inter text-20px">
                        25 years of expertise
                        </p>
                            </div>
                        
                        <p className="w-[85%] ml-9">
                        With 25 years of rich experience in outbound experiential learning.
                        </p>
                    </div>
                       
                </div>
                <div className="absolute w-[351px] top-[10%] left-[25%] flex flex-col gap-4 ">
                    <div className="w-full flex flex-col gap-2  ">

                            <div className="flex gap-4 items-center">
                            <Conc/>
                        <p className="font-bold font-inter text-20px">
                        25 years of expertise
                        </p>
                            </div>
                        
                        <p className="w-[85%] ml-9">
                        With 25 years of rich experience in outbound experiential learning.
                        </p>
                    </div>
                       
                </div>
                <div className="absolute w-[351px] top-[25%] left-[45%] flex flex-col z-100 gap-4 ">
                    <div className="w-full flex flex-col gap-2 ">

                            <div className="flex gap-4 items-center">
                            <Conc/>
                        <p className="font-bold font-inter text-20px">
                        25 years of expertise
                        </p>
                            </div>
                        
                        <p className="w-[85%] ml-9">
                        With 25 years of rich experience in outbound experiential learning.
                        </p>
                    </div>
                       
                </div>
                <div className="absolute w-[351px] top-[10%] left-[70%] flex flex-col gap-4 ">
                    <div className="w-full flex flex-col gap-2  ">

                            <div className="flex gap-4 items-center">
                            <Conc/>
                        <p className="font-bold font-inter text-20px">
                        25 years of expertise
                        </p>
                            </div>
                        
                        <p className="w-[85%] ml-9">
                        With 25 years of rich experience in outbound experiential learning.
                        </p>
                    </div>
                       
                </div>
                <div className="absolute w-[351px] top-[40%] right-[1%] flex flex-col gap-4 ">
                    <div className="w-full flex flex-col gap-2  ">

                            <div className="flex gap-4 items-center">
                            <Conc/>
                        <p className="font-bold font-inter text-20px">
                        25 years of expertise
                        </p>
                            </div>
                        
                        <p className="w-[85%] ml-9">
                        With 25 years of rich experience in outbound experiential learning.
                        </p>
                    </div>
                       
                </div>

            <img src="/Home/erudite.png" alt="" className="absolute bottom-0 w-full"/>
            </div>
        </div>
        <div className="w-full ">
        <div className="flex flex-col gap-4 items-center justify-center">
                <p className="font-bold text-[40px] font-inter">Trained activity provider’s license </p>
                <p className="w-[50%] text-center">
                Erudite initiatives Hyderabad is licensed to operate the IAYP ( International Award Of Young People) as a trained activity provider in India.
                </p>

            </div>
            <div className="flex justify-around gap-5 ">
                <img src="/Home/iayp.png" alt="" className="h-[80%] my-auto"/>
                <img src="/Home/india.png" alt="" />
                <img src="/Home/iayp.png" alt="" className="h-[80%] my-auto"/>

            </div>
        </div>
        <div className="w-full">
        <div className="flex flex-col gap-4 items-center justify-center">
                <p className="font-bold text-[40px] font-inter">Upcoming Events </p>
                <p className="w-[50%] text-center">
                Our camps offer hands on learning experiences in settings where campers can connect with nature acquire life skills and forge lifelong friendships.
                </p>

            </div>
            <div className="w-full relative ">
                <img src="/Home/mount.png" alt="" className="w-full"/>
                <div className="flex gap-3 flex-col absolute top-32 left-[40%]">
                    <img src="/Home/skygaze.png" alt="" className="w-[287px]"/>
                    <p className="text-[18px] font-bold font-inter">Sky Gazing</p>
                    <p className="text-[16px] font-inter w-[60%]">With 25 years of rich experience in outbound experiential learning.</p>
                </div>
            </div>
        </div>
        <div className="w-full bg-[#E9F9FE] flex mt-[100px]">
            <div className="flex-1">
            <img src="/camps/tailored.png" alt="" className="w-full"/>
            </div>
            <div className="flex-1 flex  items-center">
                <div className="ml-[64px]">
                    <p className="  font-inter font-bold text-[40px] w-[60%] leading-[45px]">
                    Tailored Camp Inquiry
                    </p>
                    <p className="  font-inter text-[16px] w-[60%] mt-[20px]">
                    Are you looking for a tailored camp experience? Contact us and share your preferences. We'll create a unique adventure just for you.
                    </p>

                    <div className="mt-[30px] ">
                    <Button text={'Contact Now'}/>
                    </div>
                </div>
            </div>
        </div>


 </div>
 <div className="hidden sm:block w-full">

 <HomeMobile/>
 </div>
    </div>
  )
}
export const Dots = ({ imgIndex, setImgIndex,arrayName }) => {
   
  
    return (
      <div className="mt-4 flex w-full justify-center gap-2">
        {arrayName.map((_, idx) => {
          
          return (
            <button
              key={idx}
              onClick={() => setImgIndex(idx)}
              className={`h-1 w-10 rounded-full transition-colors ${
                idx === imgIndex ? "bg-orange-500" : "bg-gray-300"
              }`}
            />
          );
        })}
      </div>
      
    );
  };
export  {HomePage}