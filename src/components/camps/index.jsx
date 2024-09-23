/* eslint-disable react/no-unescaped-entities */

import { useParams } from 'react-router-dom';
import { data } from './data';
import Conc from '../../utils/conc';
import { motion } from 'framer-motion';
import { fadeIn, slideIn, slideInRight } from '../../utils/data';

const SingleCamp = () => {
  const { single } = useParams();
  const camp = data.find(c => c.route === single);
console.log(single)
  if (!camp) {
    return <div>Camp's data not found</div>;
  }

  return (
   <div className='w-full '>
    <motion.img
    variants={slideIn}
    initial="hidden"
    whileInView="visible"
    loading="lazy" src={camp.img} alt="" className='border border-red-500 w-full'/>
    <div className="p-[40px] sm:p-[10px]">
        <motion.p 
        variants={slideIn}
        initial='hidden'
        whileInView={'visible'}
        className="text-inter font-bold text-[30px]">
          {camp.name}
        </motion.p>
        <motion.p 
              initial="hidden"
             variants={slideIn}
              whileInView={'visible'}
        className='my-3'>{camp.overview}</motion.p>

        <div className='w-full'>
          <p className="text-inter font-bold text-[20px]">Benefits of {camp.name}</p>
          <ul className="list-none  my-4">
  {camp.benefit.map((item, index) => (
    <motion.li
          variants={slideIn}
          initial='hidden'
          whileInView={'visible'}
    key={index} className="mb-4">
      <h3 className="font-semibold my-2">{item.head}</h3>
      <p>{item.desc}</p>
    </motion.li>
  ))}
</ul>
        </div>
{
  camp.safetyNorms &&(
<div className='w-full mt-[40px]'>
          <motion.p 
          variants={slideIn}
      initial="hidden"
      whileInView="visible"
          className="text-inter font-bold text-[20px]">Safety Norms for Running a Student Outbound Adventure Camp</motion.p>
          <ul className="list-none  my-4">
  {camp.safetyNorms.map((item, index) => (
    <motion.li 
    variants={slideIn}
      initial="hidden"
      whileInView="visible"
    key={index} className="mb-4">
      <h3 className="font-semibold my-2">{item.head}</h3>
      <p>{item.desc}</p>
    </motion.li>
  ))}
</ul>
        </div>
  )
}

{
  camp.CAS && (
    <div className='mt-[3rem]'>

    
    <div className='mt-[40px]  flex sm:block '>
                <motion.div
                variants={slideIn}
      initial="hidden"
      whileInView="visible"
                className="flex flex-col gap-[20px] flex-1 ">
                    <p className='font-inter font-bold text-[30px] sm:text-[25px]'>
                      CAS Initiative 
                    </p>
                    <p className='font-inter text-[16px]'>
                   {camp.CAS.overview}
                    </p>
                </motion.div>
               
                <motion.div
                variants={slideInRight}
      initial="hidden"
      whileInView="visible"
                className="flex-1  flex flex-col gap-[20px]   sm:mt-7">
                <p className='font-inter font-bold text-[30px] sm:text-[25px] ml-5 sm:ml-0'>
                       Some Key Points For CAS Initiatives:
                 </p>
                <ul className='w-full flex flex-col gap-[20px] ml-5 sm:ml-0'>

                  {
                    camp.CAS.keyPoints.map((item,idx)=>(
                      <li key={idx} className='flex items-center gap-[30px] sm:gap-6'>
                      <Conc/>
                      <p className='font-inter text-[16px]'>{item}</p>
                    </li>
                    ))
                  }
                 
                </ul>
                </motion.div>
               </div>
               <motion.div
               variants={fadeIn}
               initial="hidden"
               whileInView="visible"
               className='w-full mb-[40px] mt-[5rem] sm:mt-[2rem]'>
                <p className='font-inter text-center text-[16px]'>{camp.CAS.conclusion}</p>
               </motion.div>
               </div>
  )
}
{
  camp.activities && (
<div className='mt-[40px]'>
<p className="text-inter text-[30px] font-bold text-center">Activities</p>
<p className='text-inter text-center'>
{camp.name} offers a valuable opportunity to develop essential life skills
</p>

<div className='mt-[40px] grid grid-cols-4 sm:grid-cols-2 gap-5'>
{
  camp.activities.map((item,idx)=>(
    <motion.div
    variants={fadeIn}
      initial="hidden"
      whileInView="visible"
    className='flex flex-col gap-3' key={idx}>
    <img loading="lazy" src={item.img} alt="" />
    <p className='text-inter font-bold text-[18px]'>{item.head}</p>
    <p className='text-inter text-[16px]'>{item.desc}</p>
    </motion.div>
  ))
}
</div>
</div>
  )
}

        
    </div>
   </div>
  );
};

export { SingleCamp };



{/* <div className="p-5">
<h1 className="text-3xl font-bold mb-4">{camp.name}</h1>
<img loading="lazy" src={camp.img} alt={camp.name} className="w-full h-auto mb-4" />
<p className="mb-4">{camp.overview}</p>
<h2 className="text-2xl font-semibold mb-2">Benefits</h2>
<ul className="list-disc ml-5 mb-4">
  {camp.benefit.map((item, index) => (
    <li key={index} className="mb-2">
      <h3 className="font-semibold">{item.head}</h3>
      <p>{item.desc}</p>
    </li>
  ))}
</ul>
<h2 className="text-2xl font-semibold mb-2">Safety Norms</h2>
<ul className="list-disc ml-5 mb-4">
  {camp.safetyNorms.map((item, index) => (
    <li key={index} className="mb-2">
      <h3 className="font-semibold">{item.head}</h3>
      <p>{item.desc}</p>
    </li>
  ))}
</ul>
<h2 className="text-2xl font-semibold mb-2">Activities</h2>
<ul className="list-disc ml-5 mb-4">
  {camp.activities.map((item, index) => (
    <li key={index} className="mb-2">
      <img loading="lazy" src={item.img} alt={item.head} className="w-full h-auto mb-2" />
      <h3 className="font-semibold">{item.head}</h3>
      <p>{item.desc}</p>
    </li>
  ))}
</ul>
</div> */}
