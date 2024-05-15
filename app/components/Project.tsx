'use client';
import { useState } from "react";
import Image from "next/image";
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { RxDotFilled } from "react-icons/rx";

interface ProjectProps {
  title: string;
  images: string[];
  skills: string;
  desc: string;
}

export default function Project({ title, images, skills, desc }: ProjectProps) {

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length-1 : currentIndex-1;
    setCurrentIndex(newIndex);
  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length-1;
    const newIndex = isLastSlide ? 0 : currentIndex+1;
    setCurrentIndex(newIndex)
  }

  return (
    <div className="shadow-[#00000039] shadow-sm  border-2 border-secondary rounded-[0.6vw] mx-auto mt-[1.5vh] mb-[1.5vh] max-w-[70%] h-auto bg-primary flex flex-col justify-center items-center">
      <div className="font-quicksand font-[700] text-[2vw] mt-[1.5vh] mb-[0.7vh] text-[#00000085]">
        {title}
      </div>
      <div className="w-[45vw] h-[45vh] relative group">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              className="shadow-[#00000039] shadow-sm rounded-[1vw] object-cover w-full h-full"
              src={image}
              alt=""
              fill
            />
          </div>
        ))}
        <div onClick={ prevSlide } className="flex items-center justify-center ml-auto absolute left-[0vw] top-[50%] transform translate-y-[-50%] rounded-tl-[1vw] rounded-bl-[1vw] w-[5vw] h-[45vh] cursor-pointer text-black/50 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
          <BsChevronCompactLeft  
            size={40} 
            className="ml-[-1.8vw]"
          />
        </div>
        <div onClick={ nextSlide } className="flex items-center justify-center absolute right-[0vw] top-[50%] transform translate-y-[-50%] rounded-tr-[1vw] rounded-br-[1vw] w-[5vw] h-[45vh] cursor-pointer text-black/50 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
          <BsChevronCompactRight 
            size={40} 
            className="mr-[-1.8vw]"
          />
        </div>
        <div className="absolute bottom-[1vh] flex justify-center w-full transition-opacity duration-300 opacity-0 group-hover:opacity-100">
          {images.map((image, index) => (
            <RxDotFilled
              key={index}
              className={`mx-1 text-white ${
                index === currentIndex ? "text-black/50" : "text-black/10"
              } hover:text-white/80 transition-colors duration-300 cursor-pointer`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
      <div className="shadow-[#00000015] shadow-sm font-[700] my-[0.6vw] font-quicksand text-accent bg-[#f4f4f48c] border-[0.04vw] border-[#ffffff43] rounded-[0.6vw] text-[0.75vw] px-[0.5vw] py-[0.4vh]">
        {skills}
      </div>
      <div className="text-accent font-quicksand font-[500] w-[38vw] text-justify mb-[3vh] leading-[3.3vh]">
        {desc}
      </div>
    </div>
  );
}