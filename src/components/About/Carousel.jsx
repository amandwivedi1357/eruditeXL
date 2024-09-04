/* eslint-disable react/prop-types */
import  { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import { members } from "../../utils/data";



const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

export const SwipeCarousel = () => {
    const [imgIndex, setImgIndex] = useState(0);
    const dragX = useMotionValue(0);
  
    useEffect(() => {
      const intervalRef = setInterval(() => {
        const x = dragX.get();
  
        if (x === 0) {
          setImgIndex((prevIndex) => {
            if (prevIndex === members.length - 1) {
              return 0;
            }
            return prevIndex + 1;
          });
        }
      }, AUTO_DELAY);
  
      return () => clearInterval(intervalRef);
    }, []);
  
    const onDragEnd = () => {
      const x = dragX.get();
  
      if (x <= -DRAG_BUFFER && imgIndex < members.length - 1) {
        setImgIndex((prevIndex) => prevIndex + 1);
      } else if (x >= DRAG_BUFFER && imgIndex > 0) {
        setImgIndex((prevIndex) => prevIndex - 1);
      }
    };
  
    const goToPrevious = () => {
      setImgIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
    };
  
    const goToNext = () => {
      setImgIndex((prevIndex) =>
        prevIndex < members.length - 1 ? prevIndex + 1 : members.length - 1
      );
    };
  
    return (
      <div className="relative overflow-hidden py-8">
        <button
          onClick={goToPrevious}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-gray-300 rounded-full p-2"
        >
          &lt;
        </button>
        <motion.div
          drag="x"
          dragConstraints={{
            left: 0,
            right: 0,
          }}
          style={{
            x: dragX,
          }}
          animate={{
            translateX: `-${imgIndex * 100}%`,
          }}
          transition={SPRING_OPTIONS}
          onDragEnd={onDragEnd}
          className="flex cursor-grab items-center active:cursor-grabbing"
        >
          <Images imgIndex={imgIndex} />
        </motion.div>
        <button
          onClick={goToNext}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-gray-300 rounded-full p-2"
        >
          &gt;
        </button>
        <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} />
      </div>
    );
  };
  

const Images = ({ imgIndex }) => {
  return (
    <>
      {members.map((member, idx) => (
        <motion.div
          key={idx}
          style={{
            backgroundImage: `url(${member.img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          animate={{
            scale: imgIndex === idx ? 0.95 : 0.85,
          }}
          transition={SPRING_OPTIONS}
          className="aspect-video w-screen shrink-0 rounded-xl bg-neutral-800 object-cover relative flex items-end p-4"
        >
          <div className="bg-white bg-opacity-80 p-2 rounded-md text-center">
            <h3 className="text-lg font-bold">{member.name}</h3>
            <p className="text-sm">{member.post}</p>
          </div>
        </motion.div>
      ))}
    </>
  );
};

 const Dots = ({ imgIndex, setImgIndex }) => {
    const visibleDots = 5; // Number of dots to show at a time
    const start = Math.max(0, imgIndex - Math.floor(visibleDots / 2));
    const end = Math.min(members.length, start + visibleDots);
  
    return (
      <div className="mt-4 flex w-full justify-center gap-2">
        {members.slice(start, end).map((_, idx) => {
          const actualIdx = start + idx;
          return (
            <button
              key={actualIdx}
              onClick={() => setImgIndex(actualIdx)}
              className={`h-1 w-10 rounded-full transition-colors ${
                actualIdx === imgIndex ? "bg-orange-500" : "bg-gray-300"
              }`}
            />
          );
        })}
      </div>
    );
  };
  
  
