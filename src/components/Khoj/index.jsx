/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Conc from '../../utils/conc';
import AdventureActivities from './Grid';
const inclExp = [
    {
        icon:'/camps/gadget.svg',
        name:'Gadget Free Camp',
    },
    {
        icon:'/camps/Leadership.svg',
        name:'Safety & Leadership',
    },
    {
        icon:'/camps/Discover.svg',
        name:'Self discovery',
    },
    {
        icon:'/camps/licencing.svg',
        name:'(IAYP) Licensed Activity Provider',
    },
    {
        icon:'/camps/Adventure.svg',
        name:'Adventure',
    },
    {
        icon:'/camps/Food.svg',
        name:'Food',
    },
]

const data = [
    {  head: 'Content for first object',desc:'Late night pick-up from Delhi and drive to Haldwani, with a transit dinner at Gajrola.',num:1 },
    { img: '/camps/img2.png', head: 'Content for second object',desc:'Late night pick-up from Delhi and drive to Haldwani, with a transit dinner at Gajrola.',num:2 },
    { img: '/camps/img3.png', head: 'Content for third object',desc:'Late night pick-up from Delhi and drive to Haldwani, with a transit dinner at Gajrola.',num:3 },
    { img: '/camps/img4.png', head: 'Content for third object',desc:'Late night pick-up from Delhi and drive to Haldwani, with a transit dinner at Gajrola.',num:4 },
    { img: '/camps/img5.png', head: 'Content for third object',desc:'Late night pick-up from Delhi and drive to Haldwani, with a transit dinner at Gajrola.',num:5 },
    { img: '/camps/img6.png', head: 'Content for third object',desc:'Late night pick-up from Delhi and drive to Haldwani, with a transit dinner at Gajrola.',num:6 },
    { img: '/camps/img7.png', head: 'Content for third object',desc:'Late night pick-up from Delhi and drive to Haldwani, with a transit dinner at Gajrola.',num:7 },
    // Add more objects...
  ];
  const ImageTextSection = ({ img, day, head, desc, reverse }) => {
    return (
      <div className={`flex sm:flex-col ${img ? (reverse ? 'flex-row-reverse' : '') : ''} items-center my-4`}>
        {img && (
          <div className="flex-1">
            <img src={img} alt="description" className="w-full h-auto" />
          </div>
        )}
        <div className={`flex-1 ml-[40px] ${img ? '' : 'w-full'}`}>
          <button className='p-3 px-5 bg-[#DE8500] rounded-lg text-white'>
            Day {day}
          </button>
          <div className='flex gap-4 mt-4 items-center '>
            <Conc />
            <p className="font-bold font-inter text-[20px]">{head}</p>
          </div>
          <p className='ml-[60px] w-[40%]'>
            {desc}
          </p>
        </div>
      </div>
    );
  };
  
const CaptainKhoj = () => {

  return (
    <div className='w-full'>
<img src="/camps/khoj.png" alt="" className='w-full'/>
<div className="m-[40px] flex gap-[30px] sm:flex-col sm:mx-[20px]">
<div className="flex-1 flex flex-col gap-3">
<p className="font-inter font-bold text-[30px]">
Captain Khoj Mukteshwar Camp
</p>
<p>
Mukteshwar, at 2171 meters, is a nature lover's paradise with stunning views, rich flora and fauna, and the Mukteshwar Temple dedicated to Lord Shiva. Just 51 km from Nainital, it offers panoramic vistas of Nanda Devi and the Himalayas, and the serene sounds of forest birds.
</p>
<p>
Embark on the ultimate summer adventure with our 6-night, 7-day camp, where excitement, exploration, and self-discovery await amidst the breathtaking landscapes of Nainital and Jim Corbett. Your journey will include all meals, both vegetarian and non-vegetarian, prepared with care and attention to dietary preferences. Travel between locations will be facilitated in an AC bus, ensuring comfort and convenience throughout the camp.
</p>

<div className='flex flex-col gap-3 mt-[20px]'>
<p className='font-inter font-bold text-[20px]'>
Location and Accomodation
</p>
<p>Accommodation will be a blend of group tents in Mukteshwar and deluxe hotels in Nainital and Jim Corbett, all on a triple occupancy basis. The deluxe hotels provide a comfortable and relaxing retreat after a day filled with adventure, while the tented accommodations with attached washrooms in Mukteshwar offer a unique connection with nature. </p>
<p>
This perfect blend of living arrangements fosters a sense of tranquility and wonder, enhancing your overall experience. Join us for an unforgettable week filled with thrilling activities, camaraderie, and memories that will last a lifetime, all set in the picturesque surroundings of Nainital and Jim Corbett.
</p>
</div>
</div>
<div className="flex-1">
    <p className='font-inter ml-[60px] text-[18px] font-bold sm:text-left sm:ml-0'>
    All-Inclusive Experience
    </p>
    <div className='w-[90%] ml-auto grid grid-cols-2 mt-[20px] sm:grid-cols-1 sm:w-full'>
    {
        inclExp.map((item,idx)=>(
            <div key={idx} className="flex my-[10px] items-center gap-5">
                <img src={item.icon} alt="" />
                <p className='font-bold font-inter'>{item.name}</p>
        </div>
        ))
    }
    </div>
</div>
</div>
<div className='w-full my-[40px]'>
<p className='mx-[40px] font-bold font-inter text-[30px] sm:text-[25px] sm:mx-[20px]' >The Itinerary</p>

<div className='w-full my-[40px] sm:w-full'>
{data.map((item, index) => (
        <ImageTextSection
          key={index}
          img={item.img || ''}
          day={item.num}
          head={item.head}
          desc = {item.desc}
          reverse={index % 2 !== 0}
        />
      ))}
</div>
</div>
<div className='w-full '>
<AdventureActivities/>
</div>
    </div>
  )
}

export  {CaptainKhoj}