/* eslint-disable react/no-unescaped-entities */
import { motion } from 'framer-motion';


import Conc from '../../utils/conc'

const Trips = () => {
    
const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } }
  };
  
  const slideIn = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } }
  };
  const slideInRight = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } }
  };
    const benefits = [
        {
            head:'Cultural Immersion',
            desc:'Understanding local traditions through houseboat living and visiting craft units offers firsthand insights into Kashmiri culture. Interacting with local artisans and residents helps students appreciate daily life, challenges, and customs in Kashmir. This immersive experience enriches their cultural understanding and empathy.'
        },
        {
            head:'Educational Experience',
            desc:"Visiting historical sites in Kashmir enriches students' understanding of the region's rich history. Exploring saffron fields and learning about their cultivation provides unique insights into local agricultural practices and the economic significance of saffron."
        },
        {
            head:'Adventure and Nature Exploration',
            desc:"The Gondola ride in Gulmarg offers spectacular views of the Himalayas, providing an exhilarating experience and a deeper appreciation of nature's beauty. Exploring Sonamarg and Pahalgam allows students to witness stunning landscapes, diverse flora and fauna, and pristine natural environments."
        },
        {
            head:'Skill Development',
            desc:"Traveling teaches organizational and logistical skills, enhancing students' travel planning abilities. Interacting with peers and locals improves communication and social skills, fostering better interpersonal relationships."
        },
        {
            head:'Personal Growth',
            desc:"Navigating a new environment and overcoming travel-related challenges boosts confidence and independence. Exposure to different cultures fosters empathy, tolerance, and cultural sensitivity, essential in a globalized world."
        },
        {
            head:'Recreation and Relaxation',
            desc:"The picturesque landscapes of Kashmir provide a serene environment for relaxation, reducing stress and promoting mental well-being. Engaging in outdoor activities like trekking, horse riding, and sightseeing offers physical exercise and recreation."
        },
        {
            head:'Unique Accommodations',
            desc:'Staying on a houseboat on Dal Lake offers a unique blend of comfort and traditional living, enhancing the overall travel experience.'
        }
    ]
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
      };
    
      const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
      };
  return (
    <div className='w-full'>
    <img loading="lazy" src='/trips/top (1).webp' alt="" className='w-full sm:w-full'/>
    <motion.div
      variants={slideIn}
      initial="hidden"
      whileInView="visible"
    //   viewport={{ once: true }}
    //  transition={{ duration: 0.5 }}
    className="p-[40px] sm:p-[20px]">
        <p className="text-inter font-bold text-[30px]">
        Kashmir Quest
        </p>
        <p className='my-3'>A six-day trip to Kashmir offers unique and enriching experiences, including staying on a Dal Lake houseboat, riding the Gulmarg Gondola, visiting saffron fields, exploring houseboat-making units, and touring Sonamarg and Pahalgam. Kashmir's stunning landscapes, from the serene Dal Lake to the majestic peaks of Gulmarg, provide a backdrop for unforgettable adventures. </p>
    <p className='my-3'>
    Visiting the saffron fields offers a glimpse into the region's rich agricultural heritage, while exploring houseboat-making units highlights the craftsmanship behind the iconic houseboats. Trips to Sonamarg and Pahalgam showcase Kashmir's diverse natural beauty, from lush valleys to snow-capped mountains, making the journey a truly immersive cultural and scenic experience.
    </p>
        <div className='w-full mt-8'>
          <p className="text-inter font-bold text-[20px]">Benefits of Trips</p>
          <ul className="list-none  my-4">
  {benefits.map((item, index) => (
    <motion.li
    variants={slideIn}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    key={index} className="mb-6">
      <h3 className="font-semibold my-2">{item.head}</h3>
      <p>{item.desc}</p>
    </motion.li>
  ))}
</ul>
        </div>

   </motion.div>
   <p className='font-inter font-bold text-[30px] p-[40px] sm:p-[20px] sm:mt-[-40px]'>
        The Itinerary
    </p>
   <div className=''>
   
    <div className='w-full h-[115rem] sm:h-[180rem] mt-[30px] sm:mt-0 relative'>
        <motion.img
         variants={slideInRight}
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true }}
        loading="lazy" src="/trips/day1.webp" alt="" className='w-[40%] sm:w-full absolute right-0'/>
        <motion.div
          variants={fadeIn}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
        className="w-[22%]  sm:w-full absolute top-[5%] right-[28%] sm:left-2 sm:top-[12%] flex flex-col gap-2  ">

                        <div 
                       
                        className='py-4 text-white bg-[#DE8500] w-[7rem] rounded-md text-center'>
                            Day-1
                        </div>

                            <div className="flex gap-4 items-center">
                            <Conc/>
                        <p className="font-bold font-inter text-20px">
                        Arrival and Houseboat Stay on Dal Lake
                        </p>
                            </div>
                        
                        <p className="w-[85%] ml-9 sm:ml-9">
                        Enjoy the Famous Shikara Ride in Dal Lake                        </p>
                    </motion.div>
        <motion.div 
         variants={slideIn}
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true }}
        className="w-[22%]  absolute top-[20%] sm:w-full sm:top-[28%] left-[4%] flex flex-col gap-2  ">

                        <div className='py-4 text-white bg-[#DE8500] w-[7rem] rounded-md text-center'>
                            Day-2
                        </div>

                            <div className="flex gap-4 items-center">
                            <Conc/>
                        <p className="font-bold font-inter text-20px">
                        Excursion to Gulmarg
                        </p>
                            </div>
                        
                        <p className="w-[85%] ml-9 sm:ml-9">
                        Admire the Panoramic Views from Asia's Highest Cable Car                    </p>
                    </motion.div>
                    <img loading="lazy" src="/trips/zipline.png" alt="" className='absolute top-[28%] left-[35%] sm:top-[18%] sm:left-2' />
                    <img loading="lazy" src="/trips/zip-1.png" alt="" className='absolute top-[28%] left-[35%] sm:hidden' />
                    <img loading="lazy" src="/trips/zip-2.png" alt="" className='absolute top-[29.5%] right-[35%] sm:left-2 sm:top-[18%]' />
                    <img loading="lazy" src="/trips/zip-3.png" alt="" className='absolute top-[31%] right-[2%] sm:right-2 sm:top-[19%] sm:w-[40%]' />
                    < motion.img
                     variants={slideIn}
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true }}
                    loading="lazy" src="/trips/day3.webp" alt="" className='absolute top-[38%] left-[0] sm:w-full sm:top-[33%]  ' />
                    < motion.img
                     variants={slideIn}
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true }}
                    loading="lazy" src="/trips/day5.webp" alt="" className='absolute bottom-[12%] left-[0] sm:w-full sm:bottom-[36%]' />
                    < motion.img
                     variants={slideIn}
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true }}
                    loading="lazy" src="/trips/day6.webp" alt="" className='absolute bottom-[0%] right-[0] sm:w-full sm:bottom-[15%]' />
                    <div className="w-[22%] sm:top-[45%] sm:left-4 absolute sm:w-full top-[40%] left-[34%] flex flex-col gap-2  ">

<div className='py-4   text-white bg-[#DE8500] w-[7rem] rounded-md text-center'>
Day 3
</div>

    <div className="flex gap-4 items-center ">
    <Conc/>
<p className="font-bold font-inter text-20px">
Visit to Saffron Fields and Houseboat Making Unit
</p>
    </div>

<p className="w-[85%] ml-9 sm:ml-9 ">
Learn about saffron cultivation and its significance, and understand the intricate process of houseboat construction.                       </p>
</div>
                    <div className="w-[22%] sm:w-full  absolute top-[50%] sm:top-[65%] sm:left-4 right-[14%] flex flex-col gap-2  ">

<div className='py-4 text-white bg-[#DE8500] w-[7rem] rounded-md text-center'>
Day 4
</div>

    <div className="flex gap-4 items-center">
    <Conc/>
<p className="font-bold font-inter text-20px">
Enchanting Sonamarg A Journey to Alpine Serenity</p>
    </div>

<p className="w-[85%] ml-9 sm:ml-9">
Enjoy a fun horse ride through picturesque landscapes to Thajiwas Glacier's viewpoint. You can also experience the adventurous white water rafting at the Sindh River.
                       </p>
</div>
<div className="w-[22%]  sm:w-full sm:left-4 sm:bottom-[7%]  absolute bottom-[25%] right-[34%] flex flex-col gap-2  ">

<div className='py-4 text-white bg-[#DE8500] w-[7rem] rounded-md text-center'>
Day 5
</div>

    <div className="flex gap-4 items-center">
    <Conc/>
<p className="font-bold font-inter text-20px">
Pahalgam: A picture-perfect escape
</p>
    </div>

<p className="w-[85%] ml-9 sm:ml-9">
Enjoy the lush greenery, rivers, and mountains, and explore local villages to interact with residents.                       </p>
</div>

<div className="w-[22%] sm:w-full sm:left-4 sm:bottom-[0%]  absolute bottom-[2%] right-[37%] flex flex-col gap-2  ">

<div className='py-4 text-white bg-[#DE8500] w-[7rem] rounded-md text-center'>
Day 6
</div>

    <div className="flex gap-4 items-center">
    <Conc/>
<p className="font-bold font-inter text-20px ">
Cultural and Recreational Activities
</p>
    </div>

<p className="w-[85%] ml-9 sm:ml-9 ">
Try traditional Kashmiri food and visit local markets, temples, and gardens.                       </p>
</div>
    </div>
   </div>
   </div>
  )
}

export  {Trips}