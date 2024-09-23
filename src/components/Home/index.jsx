/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { useEffect, useRef, useState } from "react"
import Conc from "../../utils/conc.jsx"
// import FadeUpAnimation from "../../utils/FadeUp.jsx"
import { Button } from "../Button/index.jsx"
import { motion,AnimatePresence } from "framer-motion"
import "./style.css"
import HomeMobile from "./HomeMobile.jsx"
import { btns, fadeIn, slideIn, slideInRight } from "../../utils/data.jsx"
import { Schools } from "../schools/index.jsx"
// import { Fade } from "@chakra-ui/react"



const textAnimate = [
    {
        head: 'Cultural Immersion',
        desc:(<>
        Understanding Local Traditions, living on a houseboat and visiting local crafts units provide firsthand insight into Kashmiri culture and traditions. <br /><br />

Interaction with Locals, engaging with local artisans and residents helps students understand the daily life, challenges, and customs of the people in Kashmir.
        </>)
    },
    {
        head: 'Culture & Heritage',
        desc:(<>
       Kashmir's unique cultural blend, encompassing diverse religions, languages, and cultures, showcases India's unity in diversity. Srinagar, as a part of this region, reflects this blend through its historical and religious sites.
       <br />
       <br />
        The region's rich cultural heritage, from Sanskrit and Persian learning centers to Islamic influences, exemplifies the harmonious coexistence of different traditions.
        </>)
    },
    {
        head: 'Kashmir Folk Music Chakri',
        desc:(<>
       It is most popular form of Kashmiri folk music. It has some resemblance with chakra of mountaineous regions of Uttar Pradesh. <br /> <br />
        Normally Garaha, Sarangi, Rabab were the musical instruments used in the past. But now thw harmonium too has made its way in its presentation.
        </>)
    },
//     {
//         head: 'National Immersion',
//         desc:(<>
//         Understanding Local Traditions, living on a houseboat and visiting local crafts units provide firsthand insight into Kashmiri culture and traditions. <br /><br />

// Interaction with Locals, engaging with local artisans and residents helps students understand the daily life, challenges, and customs of the people in Kashmir.
//         </>)
//     },
]
// const variants = {
//     initial: { opacity: 0, y: -50 },
//     animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
//   };

const setting = {
    initial:{ opacity: 0, y: 100 },
                            animate:{ opacity: 1, y: 0 },
                            // exit:{ opacity: 0, y: -10 },
                             transition:{ duration: 0.5 }
}
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

    const intervalRef = useRef(null);  // useRef to store the interval ID

    // Function to reset and start the timer
    const resetInterval = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);  // Clear the existing interval
      }
      intervalRef.current = setInterval(() => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % textAnimate.length);  // Move to next text
      }, 5000);  // 5 seconds interval
    };
  
    // Call resetInterval whenever currentIndex changes or component mounts
    useEffect(() => {
      resetInterval();  // Start the timer when component mounts
      return () => clearInterval(intervalRef.current);  // Cleanup on unmount
    }, [currentIndex]);
  
    // Handle dot click or other interaction
    const handleInteraction = (index) => {
      setCurrentIndex(index);  // Update the current index
      resetInterval();  // Reset the interval timer on interaction
    };
  return (
    <div className='w-full'>
        <div className="sm:hidden w-full">

       
        <div className='w-full h-[80vh]  bg-[#01497B] flex '>
            <motion.div
            initial="hidden"
            variants={slideIn}
            whileInView={'visible'}
            className=" flex justify-center items-center w-[40%]">
                <div className="flex gap-[20px] flex-col  w-[78%] ">
                    <p className="font-inter leading-[55px] text-white font-bold text-[45px]">We Embark On Adventures, With Purpose</p>
                    <p className="font-inter leading-7 text-[#ffffffE6] ">At Eruditexl we firmly believe that the world is a classroom waiting to be explored.</p>
                </div>
            </motion.div>
            <motion.div
            initial="hidden"
            variants={slideInRight}
            whileInView={'visible'}
            className=" w-[60%] relative">
                <img loading="lazy" className="z-10 absolute top-[40%]" src="/Home/ils1.png" alt="" />
                <img loading="lazy" className="z-10 absolute left-[45%] top-[10%]" src="/Home/ils2.png" alt="" />
                <img loading="lazy" className="z-10 absolute top-[40%] right-[0%]" src="/Home/ils_left.png" alt="" />
                <img loading="lazy" className="z-10 absolute bottom-[5%] left-[35%]" src="/Home/ils_bottom.png" alt="" />
                <HeroButton className={'z-10 absolute top-[20%] right-[20%]'} Text={'Skill Building'}/>
                <HeroButton className={'z-10 absolute top-[50%] left-[30%]'} Text={'Personalised Experience'}/>
                <HeroButton className={'z-10 absolute bottom-[10%] left-[5%]'} Text={'Personality Development'}/>
                <HeroButton className={'z-10 absolute bottom-[15%] right-[0%]'} Text={'Educational Adventure '}/>
            </motion.div>
        </div>
        
        <div className="w-full mt-[50px] ">
            <div className="mx-[40px] sm:mx-[20px] flex justify-between sm:flex-col">
                <motion.div
                initial="hidden"
                variants={fadeIn}
                whileInView={'visible'}
                className="w-[35%] flex flex-col gap-[25px] sm:w-full ">
                    <p className="text-black text-[40px] font-bold font-inter sm:text-[25px] ">
                    Your Ultimate Camping Adventure Awaits
                    </p>
                    <p className="text-[16px]">
                    Our camps offer hands on learning experiences in settings where campers can connect with nature acquire life skills and forge lifelong friendships.
                    </p>
                   
                    <div className=" mx-[40px] items-center flex flex-col  gap-10">
                <img loading="lazy" src="/Home/inschool.svg" alt="" className="w-[250px]"/>
                <div className="flex flex-col gap-3">

                    <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.5 }}
                    className="flex gap-5 items-center">
                        <Conc/>
                        <p className="font-bold font-inter text-20px">In school camp</p>
                    </motion.div>
                    <p className="w-[85%] mr-2 ml-9">An in-campus outdoor learning overnight adventure camp provides students with a safe, enriching experience that fosters life skills, creativity, physical activity, and social connections.</p>
                    <div className="self-start ml-9">

                        <Button onClick={'camps/inschool'} text={'More'}/>
                        </div>
                </div>
            </div>
                    
                </motion.div>
                <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.5 }}
                className="w-[60%]  flex  sm:w-full ">
                    <div className="w-full flex flex-col gap-3 flex-1 ">
                        <img loading="lazy" src="/Home/astro1.svg" alt="" className="w-[60%] mx-auto"/>
                        <div className="flex gap-4 items-center">
                            <Conc/>
                        <p className="font-bold font-inter text-20px">Space Settlement camp</p>
                        </div>
                        <p className="w-[85%] mr-2 ml-9">
                        The NSS/NASA Space Settlement Contest invites students in grades 6-12 to design space habitats, fostering interdisciplinary learning and offering international recognition and future opportunities.  
                        </p>
                        <div className="self-start ml-9">

                        <Button onClick={'camps/space-settlement-contest'} text={'More'}/>
                        </div>
                    </div>
                    <div className="w-full flex flex-col gap-5 flex-1 mt-[120px]">
                        <div className="flex gap-4 items-center">
                            <Conc/>
                        <p className="font-bold font-inter text-20px">Student outbound camp</p>
                        </div>
                        <p className="w-[85%] mr-2 ml-9">
                        A student outbound adventure camp provides experiential learning through outdoor activities, promoting personal growth, leadership, confidence, resilience, and teamwork in an adventurous setting.
                        </p>
                        <div className="self-start ml-9">

                        <Button onClick={'camps/student-outbound'} text={'More'}/>
                        </div>
                        <img loading="lazy" src="/Home/outbound.svg" alt="" className="w-[60%] mx-auto"/>
                    </div>
                </motion.div>
            </div>
            
        </div>


        <div
        
        className="w-full flex ">
            <motion.div
            initial="hidden"
            variants={slideIn}
            whileInView={'visible'}
            className="w-[60%] ">
                <img src="/Home/mukteshwar.webp" alt="" />
            </motion.div>
            <motion.div
            initial="hidden"
            variants={slideInRight}
            whileInView={'visible'}
            className="w-[40%] ">
                <div className="m-[50px] flex flex-col gap-5 ">
                <p className="font-bold text-[40px] font-inter">Captain Khoj Mukteshwar Camp</p>
                <p>Join us for a six night, Seven day summer camp in the scenic beauty of Nainital and Jim Corbett. Enjoy thrilling activities, self-discovery, and a deep connection with nature for an unforgettable adventure.</p>
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
                    <div className=" self-start">

                    <Button onClick='camp/captain-khoj'  text={'Explore Now'}/>
                    </div>
                    
                </div>
            </motion.div>
        </div>
      
        {/* Kashmir quest starts */}
           

        <motion.div 
       initial="hidden"
       variants={fadeIn}
       whileInView={'visible'}
        className=" w-full">
            <div className="flex flex-col gap-4 items-center justify-center">
                <p className="font-bold text-[40px] font-inter">Kashmir Quest</p>
                <p className="w-[50%] text-center">
                Experience the magic of Kashmir in six days stay on Dal Lake houseboats, ride the Gulmarg Gondola, visit saffron fields, and explore Sonamarg and Pahalgam.
                </p>
            </div>
            <div className="w-full relative">
            <img loading="lazy" src="/Home/kashmir.webp" alt="" className="w-full" />

            <motion.div
            initial="hidden"
            variants={slideIn}
            whileInView={'visible'}
            className="w-[526px] h-[326px] bg-transparent-black absolute top-[25%] left-[8%]">
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
                <Dots imgIndex={currentIndex} setImgIndex={handleInteraction} arrayName={textAnimate}/>
            </motion.div>
        </div>
        </motion.div>
           

        <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="w-full ">
        <div className="flex flex-col gap-4 items-center justify-center">
                <p className="font-bold text-[40px] font-inter">Welcome To Eruditexl</p>
                <p className="w-[50%] text-center">
                Erudite Initiatives, particularly through Erudite Experiential Learning, began its journey in 1998 with a unique outbound overnight camp for Oakridge International School. 
                </p>
                <div className="mt-[20px]">
                <Button onClick='about-us' text={'Know More'}/>
                </div>

            </div>
            <div className="h-[1000px] relative">
                <motion.div
                 initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
                className="absolute w-[351px] top-[30%] left-[5%] flex flex-col gap-4 ">
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
                       
                </motion.div>
                <motion.div
                 initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
                className="absolute w-[351px] top-[10%] left-[20%] flex flex-col gap-4 ">
                    <div className="w-full flex flex-col gap-2  ">

                            <div className="flex gap-4 items-center">
                            <Conc/>
                        <p className="font-bold font-inter text-20px">
                        Certified educators
                        </p>
                            </div>
                        
                        <p className="w-[85%] ml-9">
                        Led by certified experiential educators ensuring engaging activities with meaningful learning outcomes.                        </p>
                    </div>
                       
                </motion.div>
                <motion.div
                 initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
                className="absolute w-[351px] top-[25%] left-[45%] flex flex-col z-100 gap-4 ">
                    <div className="w-full flex flex-col gap-2 ">

                            <div className="flex gap-4 items-center">
                            <Conc/>
                        <p className="font-bold font-inter text-20px">
                        Reflective learning
                        </p>
                            </div>
                        
                        <p className="w-[85%] ml-9">
                        A focus on reflective learning helps participants absorb, understand, and apply lessons from each experience.                       </p>
                    </div>
                       
                </motion.div>
                <motion.div
                 initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
                className="absolute w-[351px] top-[10%] left-[70%] flex flex-col gap-4 ">
                    <div className="w-full flex flex-col gap-2  ">

                            <div className="flex gap-4 items-center">
                            <Conc/>
                        <p className="font-bold font-inter text-20px">
                        Top quality equipments 
                        </p>
                            </div>
                        
                        <p className="w-[85%] ml-9">
                        Equipped with the highest quality gear, enhancing the safety and effectiveness of outdoor experiential learning.                    </p>
                    </div>
                       
                </motion.div>
                <motion.div
                 initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
                className="absolute z-100 w-[351px] top-[35%] right-[1%] flex flex-col gap-4 ">
                    <div className="w-full flex flex-col gap-2  ">

                            <div className="flex gap-4 items-center">
                            <Conc/>
                        <p className="font-bold font-inter text-20px">
                        Safety First
                        </p>
                            </div>
                        
                        <p className="w-[85%] ml-9 z-10">
                        High focus on both the physical and psychological safety of participants.                        </p>
                    </div>
                       
                </motion.div>

            <img loading="lazy" src="/Home/erudite.png" alt="" className="absolute bottom-0 w-full"/>
            </div>
        </motion.div>
        <div
        
        className="w-full ">
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-4 items-center justify-center">
                <p className="font-bold text-[40px] font-inter">Trained activity provider’s license </p>
                <p className="w-[50%] text-center">
                Erudite initiatives Hyderabad is licensed to operate the IAYP ( International Award Of Young People) as a trained activity provider in India.
                </p>

            </motion.div>
            <div className="flex justify-around gap-5 ">
                <motion.img
                initial="hidden"
            variants={slideIn}
            whileInView={'visible'}
                loading="lazy"  src="/Home/iayp.png" alt="" className="h-[80%] my-auto"/>
                <motion.img
                initial="hidden"
                variants={fadeIn}
                whileInView={'visible'}
                loading="lazy"  src="/Home/india.png" alt="" />
                <motion.img
                initial="hidden"
            variants={slideInRight}
            whileInView={'visible'}
                loading="lazy"  src="/Home/iayp.png" alt="" className="h-[80%] my-auto"/>

            </div>
        </div>
        <motion.div
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         transition={{ duration: 0.5 }}
        className=" w-full py-10">
        <Schools/>
        </motion.div>
        <div className="w-full">
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-4 items-center justify-center">
                <p className="font-bold text-[40px] font-inter">Upcoming Events </p>
                <p className="w-[50%] text-center">
                Our camps offer hands on learning experiences in settings where campers can connect with nature acquire life skills and forge lifelong friendships.
                </p>

            </motion.div>

           
            <div className="w-full relative">
  <img loading="lazy" src="/Home/mount.png" alt="" className="w-full" />

  <div className="flex gap-10   absolute top-12 left-[50%] transform -translate-x-1/2 space-x-8 md:flex-row items-center">
    {/* First Card */}
    <motion.div
    variants={slideIn}
    initial='hidden'
    whileInView={'visible'}
    className="flex gap-3 flex-col items-center">
      <img loading="lazy" src="/Home/sky.png" alt="" className="w-[247px]  h-[237px] mt-[-20px]" />
      <p className="text-[18px] font-bold font-inter">Sky Gazing</p>
      <p className="text-[16px] font-inter text-center w-[80%]">With 25 years of rich experience in outbound experiential learning.</p>
    </motion.div>

    {/* Second Card */}
    <motion.div
    variants={slideInRight}
    initial='hidden'
    whileInView={'visible'}
    className="flex  gap-3 flex-col items-center">
    <img loading="lazy" src="/mobile/space.jpg" alt="" className="w-[247px] h-[237px] rounded-md" />
    <p className="text-[18px] font-bold font-inter">Space Settlement Contest</p>
      <p className="text-[16px] font-inter text-center w-[70%]">Join us in exploring new frontiers through exciting challenges in space science and technology.</p>
    </motion.div>
  </div>
</div>

        </div>
        <div className="w-full bg-[#E9F9FE] flex mt-[100px]">
            <motion.div
             variants={slideIn}
    initial='hidden'
    whileInView={'visible'}
            className="flex-1">
            <img loading="lazy" src="/camps/tailored.webp" alt="" className="w-full"/>
            </motion.div>
            <motion.div
            
 variants={slideInRight}
    initial='hidden'
    whileInView={'visible'}

            className="flex-1 flex  items-center">
                <div className="ml-[64px]">
                    <p className="  font-inter font-bold text-[40px] w-[60%] leading-[45px]">
                    Tailored Camp Inquiry
                    </p>
                    <p className="  font-inter text-[16px] w-[60%] mt-[20px]">
                    Are you looking for a tailored camp experience? Contact us and share your preferences. We'll create a unique adventure just for you.
                    </p>

                    <div className="mt-[30px] ">
                    <Button onClick={'contact-us'} text={'Contact Now'}/>
                    </div>
                </div>
            </motion.div>
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


