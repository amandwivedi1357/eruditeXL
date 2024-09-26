/* eslint-disable react/no-unescaped-entities */
import { motion } from 'framer-motion'
import Conc from '../../utils/conc'
import { fadeIn, members, slideIn, slideInRight } from '../../utils/data'
import { SwipeCarousel } from './Carousel'

const About = () => {
    // const [count, setCount] = useState(0);

    // useEffect(() => {
    //     console.log('useEffect is called')
    //     const intervalId = setInterval(() => {
    //         setCount((prev)=>prev+1)
    //     }, 1000);

    //     return(()=>{
    //         console.log('cleanUp function called')
    //         clearInterval(intervalId)
    //     })
    // }, [count]);
    
  return (
    <div className='w-full overflow-hidden'>
               <div className='m-[40px]  flex sm:block sm:m-[20px] '>
                <motion.div
               initial='hidden'
               variants={slideIn}
               whileInView={'visible'}
                className="flex flex-col gap-[20px] flex-1 ">
                    <p className='font-inter font-bold text-[30px] sm:text-[25px]'>
                    Erudite Journey 1998
                    </p>
                    <p className='font-inter text-[16px]'>
                    Erudite began its journey in 1998 with a unique outbound overnight camp for Oakridge International School. Initially, the company focused on organising the GHAT (Great Himalayan Adventure Trek) in collaboration with a Delhi-based company approved by the Indian Mountaineering Foundation.
                    </p>
                    <p className='font-inter text-[16px]'>
                    These treks included destinations such as Dayara Bugyal, Patalsu Peak, Beas Kund, and Pabbar Valley, emphasizing exploratory adventures that challenged participants' endurance levels.
                    </p>
                    <p className='font-inter text-[16px]'>
                    Over time, the company expanded its offerings to include outbound experiential learning activities, developing approximately 60 team-building activities designed to foster deeper learning, engagement, and insights into team dynamics and behavior. 
                    </p>

                </motion.div>
                <motion.div
               initial='hidden'
               variants={slideInRight}
               whileInView={'visible'}
                className="flex-1 sm:mt-7">
                    <img loading="lazy" src="/about/top.webp" alt="" className='w-full'/>
                </motion.div>
               </div>
               <div className='my-[40px]  flex sm:block '>
                <motion.div
                 initial='hidden'
                 variants={slideIn}
                 whileInView={'visible'}
                className="flex-1 ">
                    <img loading="lazy" src="/about/vision.webp" alt="" className='w-full'/>
                </motion.div>
                <motion.div
                initial='hidden'
                variants={slideInRight}
                whileInView={'visible'}
                className="flex justify-center flex-col gap-[20px] flex-1 sm:mx-[20px]">
                    <p className='font-inter font-bold text-[30px] sm:text-[25px] sm:mt-5'>
                    Vision
                    </p>
                    <p className='font-inter text-[16px] w-[60%] sm:w-full'>
                    To inspire participant to discover themselves through immersive experiences in nature, fostering appreciation for the environment and the diverse cultures of the locations they visit.
                    </p>
                    <p className='font-inter font-bold text-[30px] sm:text-[25px]'>
                    Mission
                    </p>
                    <p className='font-inter text-[16px] w-[70%] sm:w-full'>
                    To challenge students to step out of their comfort zones and enter the development zone, promoting personal growth and lifelong learning.
                    Our safety norms. 
                    </p>
                </motion.div>
               </div>
               <div className="h-[1000px] relative sm:hidden">
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
                    <div className="w-full flex flex-col gap-2  ">

                            <div className="flex gap-4 items-center">
                            <Conc/>
                        <p className="font-bold font-inter text-20px">
                        Reflective learning                        </p>
                            </div>
                        
                        <p className="w-[85%] ml-9">
                        A focus on reflective learning helps participants absorb, understand, and apply lessons from each experience.                          </p>
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
                        Equipped with the highest quality gear, enhancing the safety and effectiveness of outdoor experiential learning.                       </p>
                    </div>
                       
                </motion.div>
                <motion.div
                initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
                className="absolute z-10 w-[351px] top-[37%] right-[1%] flex flex-col gap-4 ">
                    <div className="w-full flex flex-col gap-2">

                            <div className="flex gap-4 items-center">
                            <Conc/>
                        <p className="font-bold font-inter text-20px">
                        Safety First
                        </p>
                            </div>
                        
                        <p className="w-[85%] ml-9">
                        High focus on both the physical and psychological safety of participants.                        </p>
                    </div>
                       
                </motion.div>

            <img loading="lazy" src="/Home/erudite.png" alt="" className="w-full absolute bottom-0"/>
            </div>
            <div className='hidden sm:block sm:w-full mx-[20px] mt-[-15px]'>
            <p className='text-[25px] font-bold '>Why Choose us</p>
            <p className='text-[16px] mt-3'>Erudite Initiatives, particularly through Erudite Experiential Learning, began its journey in 1998 with a unique outbound overnight camp for Oakridge International School. </p>
            <div className=" w-full  flex flex-col gap-4 mt-5">
                    <motion.div
                    initial='hidden'
                    variants={slideIn}
                    whileInView={'visible'}
                    className="w-full flex flex-col gap-2  ">

                            <div className="flex gap-4 items-center">
                            <Conc/>
                        <p className="font-bold font-inter text-20px">
                        25 years of expertise
                        </p>
                            </div>
                        
                        <p className="w-[85%] ml-9">
                        With 25 years of rich experience in outbound experiential learning.
                        </p>
                    </motion.div>
                    <motion.div
                    initial='hidden'
                    variants={slideIn}
                    whileInView={'visible'}
                    className="w-full flex flex-col gap-2  ">

                            <div className="flex gap-4 items-center">
                            <Conc/>
                        <p className="font-bold font-inter text-20px">
                        Certified educators
                        </p>
                            </div>
                        
                        <p className="w-[85%] ml-9">
                        Led by certified experiential educators ensuring engaging activities with meaningful learning outcomes.                        </p>
                    </motion.div>
                    <motion.div
                    initial='hidden'
                    variants={slideIn}
                    whileInView={'visible'}
                    className="w-full flex flex-col gap-2  ">

                            <div className="flex gap-4 items-center">
                            <Conc/>
                        <p className="font-bold font-inter text-20px">
                        Reflective learning
                        </p>
                            </div>
                        
                        <p className="w-[85%] ml-9">
                        A focus on reflective learning helps participants absorb, understand, and apply lessons from each experience.                             </p>
                    </motion.div>
                    <motion.div
                    initial='hidden'
                    variants={slideIn}
                    whileInView={'visible'}
                    className="w-full flex flex-col gap-2  ">

                            <div className="flex gap-4 items-center">
                            <Conc/>
                        <p className="font-bold font-inter text-20px">
                        Top quality equipments
                        </p>
                            </div>
                        
                        <p className="w-[85%] ml-9">
                        Equipped with the highest quality gear, enhancing the safety and effectiveness of outdoor experiential learning.                       </p>
                    </motion.div>
                    <motion.div
                    initial='hidden'
                    variants={slideIn}
                    whileInView={'visible'}
                    className="w-full flex flex-col gap-2  ">

                            <div className="flex gap-4 items-center">
                            <Conc/>
                        <p className="font-bold font-inter text-20px">
                        Safety First
                        </p>
                            </div>
                        
                        <p className="w-[85%] ml-9">
                        High focus on both the physical and psychological safety of participants.
                        </p>
                    </motion.div>
                       
                </div>

            
            </div>
                <motion.img
                initial='hidden'
                variants={fadeIn}
                whileInView={'visible'}
                loading="lazy" src="/about/mob_mount.webp" alt="" className='w-full mt-20 hidden sm:block'/>

{/* PDF preview */}
<motion.div
initial='hidden'
variants={fadeIn}
whileInView={'visible'}
className='mx-[50px]'>
    <div className='flex flex-col gap-5'>
    <p className='text-[30px] font-inter font-bold'>Our Commitment to Excellence</p>
    <p className='text-[16px]'>At Erudite Initiatives, we pride ourselves on maintaining the highest standards in youth education and development. Our certification as a Trained Activity Provider is a testament to our unwavering dedication to fostering growth, leadership, and positive experiences for young people in India. This recognition reflects our commitment to delivering impactful programs and creating a better future for the next generation.</p>
 <img src="/erudite.jpg" alt="" className='w-64 mx-auto'/>
    </div>
</motion.div>
            <div className="m-[40px] ">
            <p className="text-center text-[30px] font-inter font-bold">
            Our Team Members                
            </p>
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
           
            transition={{ duration: 0.5 }}
            className='w-full grid grid-cols-4 mt-[40px] sm:grid-cols-1'>
                {
                    members.map((item,idx)=>(
                        <div className='flex  flex-col gap-[15px] ' key={idx}>
                            <img loading="lazy" src={item.img} alt="" />
                            <p className="font-bold font-inter">{item.name}</p>
                            <p className="font-inter">{item.post}</p>
                        </div>
                    ))
                }
            </motion.div>
            </div>
            <div className='hidden  mt-[30px]'>
                <p className='px-[20px] text-[25px] font-bold'>Our Team Members</p>
                <SwipeCarousel imgs={members}/>
            </div>
                
            
    </div>
  )
}

export  {About}


// P.Vishnu
// P. Rajeshwer
// Mohan Pyare
// Ganesh Acharya
// S. Gangadhar
// Msyed Mustafa
// Dr. K. R . Raghavan
// Ms. Vanaja Siriperendupuru
// Ashok Kalamkar
// Shantanu Pandit
// Saharbudhi Shireish