/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useParams } from 'react-router-dom';
import { data } from './data';

const SingleCamp = () => {
  const { single } = useParams();
  const camp = data.find(c => c.route === single);
console.log(single)
  if (!camp) {
    return <div>Camp's data not found</div>;
  }

  return (
   <div className='w-full '>
    <img src={camp.img} alt="" className='border border-red-500 w-full'/>
    <div className="p-[40px] sm:p-[10px]">
        <p className="text-inter font-bold text-[30px]">
          {camp.name}
        </p>
        <p className='my-3'>{camp.overview}</p>

        <div className='w-full'>
          <p className="text-inter font-bold text-[20px]">Benefits of {camp.name}</p>
          <ul className="list-none  my-4">
  {camp.benefit.map((item, index) => (
    <li key={index} className="mb-4">
      <h3 className="font-semibold my-2">{item.head}</h3>
      <p>{item.desc}</p>
    </li>
  ))}
</ul>
        </div>
{
  camp.safetyNorms &&(
<div className='w-full mt-[40px]'>
          <p className="text-inter font-bold text-[20px]">Safety Norms for Running a Student Outbound Adventure Camp</p>
          <ul className="list-none  my-4">
  {camp.safetyNorms.map((item, index) => (
    <li key={index} className="mb-4">
      <h3 className="font-semibold my-2">{item.head}</h3>
      <p>{item.desc}</p>
    </li>
  ))}
</ul>
        </div>
  )
}
<div className='mt-[40px]'>
<p className="text-inter text-[30px] font-bold text-center">Activities</p>
<p className='text-inter text-center'>
{camp.name} offers a valuable opportunity to develop essential life skills
</p>

<div className='mt-[40px] grid grid-cols-4 gap-5'>
{
  camp.activities.map((item,idx)=>(
    <div className='flex flex-col gap-3' key={idx}>
    <img src={item.img} alt="" />
    <p className='text-inter font-bold text-[18px]'>{item.head}</p>
    <p className='text-inter text-[16px]'>{item.desc}</p>
    </div>
  ))
}
</div>
</div>
        
    </div>
   </div>
  );
};

export { SingleCamp };



{/* <div className="p-5">
<h1 className="text-3xl font-bold mb-4">{camp.name}</h1>
<img src={camp.img} alt={camp.name} className="w-full h-auto mb-4" />
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
      <img src={item.img} alt={item.head} className="w-full h-auto mb-2" />
      <h3 className="font-semibold">{item.head}</h3>
      <p>{item.desc}</p>
    </li>
  ))}
</ul>
</div> */}
