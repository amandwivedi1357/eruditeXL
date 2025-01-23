/* eslint-disable react/no-unescaped-entities */

import { useParams } from 'react-router-dom';
import { data } from './data';
import Conc from '../../utils/conc';
import { motion } from 'framer-motion';
import { fadeIn, slideIn, slideInRight } from '../../utils/data';
import { FiDownload } from "react-icons/fi"
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

{single==='space-settlement-contest' &&(
  <div>
    <ConfirmationDisplay />
  </div>
)}

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



const ConfirmationDisplay = () => {

  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = "/Erudite Initiatives.pdf"
    link.download = "ISRO_Space_Education_Program_Certification.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="w-full py-12">
      <motion.div 
        variants={slideIn}
        initial="hidden"
        whileInView="visible"
        className="container mx-auto px-4"
      >
        <div className="text-center mb-12">
          <h2 className="text-inter font-bold text-[30px] sm:text-[25px] text-black">
            ISRO Space Education Program Certification
          </h2>
        </div>

       

        <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-8 items-start">
          {/* Certification Image */}
          <div className="hidden sm:block flex justify-start p-4">
                  <button
                    onClick={handleDownload}
                    className="bg-[#4285F4] text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-blue-600 transition-colors"
                  >
                    <FiDownload className="w-5 h-5" />
                    <span>Download PDF</span>
                  </button>
                </div>
          <motion.div 
            variants={slideIn}
            initial="hidden"
            whileInView="visible"
            className="bg-white sm:hidden shadow-lg rounded-lg h-[80%] border border-gray-100"
          >
            <div className="p-4">
              <div className="aspect-[3/4] relative rounded-lg overflow-hidden border border-gray-100">
                <iframe 
                  src="/Erudite Initiatives.pdf" 
                  width="100%" 
                  height="80%" 
                  className="w-full h-[80%]"
                  title="Erudite Initiatives PDF"
                />
              </div>
            </div>
          </motion.div>

          {/* Certification Details */}
          <motion.div 
            variants={slideIn}
            initial="hidden"
            whileInView="visible"
            className="space-y-6 mt-[-14rem] sm:mt-0"
          >
            <div>
              <h3 className="font-inter font-bold text-[20px] mb-4 text-blue-600">
                Registered Space Tutor Certification
              </h3>
              <p className="text-inter text-[16px] text-gray-600 leading-relaxed">
                This certification represents a prestigious appointment as a Registered Space Tutor by ISRO, 
                demonstrating commitment to space education and inspiring the next generation of space enthusiasts.
              </p>
            </div>

            <div>
              <h3 className="font-inter font-bold text-[20px] mb-4 text-blue-600">
                Key Responsibilities
              </h3>
              <ul className="list-disc list-inside text-inter text-[16px] text-gray-600 space-y-2">
                <li>Conduct space education workshops</li>
                <li>Promote space science awareness</li>
                <li>Guide students in space-related careers</li>
                <li>Align educational activities with ISRO's mission</li>
              </ul>
            </div>

            <div className="flex justify-end mt-4">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Indian_Space_Research_Organisation_Logo.svg/800px-Indian_Space_Research_Organisation_Logo.svg.png"
                alt="ISRO Logo"
                className="h-12"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default ConfirmationDisplay
