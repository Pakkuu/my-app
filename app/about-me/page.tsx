import Image from "next/image";

export default function AboutMe() {
  return (
    <>
      <div className="flex max-w-[70%] mx-auto">
        <div className="shadow-[#00000039] shadow-sm flex flex-col justify-center items-center border-[0.1vw] border-secondary rounded-[0.6vw] mt-[1.5vh] w-[50vw] h-[57vh] bg-primary">
          <div className="font-quicksand text-accent font-[500] text-[1.8vw] mr-auto ml-[2vw] mb-[1vh]">
            Hi! My name is Ethan Varghese...
          </div>
          <div className="font-quicksand text-accent font-[500] text-justify mx-[2vw] text-[1.1vw] leading-[3.7vh]">
          I&apos;m a sophmore studying computer science at UTD. In my free time I love to workout, play video games, and watch anime (some of my favorites are Bleach, FMAB, and Samurai Champloo). My interests within computer science lie in Cloud Services, RAG (Retrieval Augmented Generation), AI, and web development, particularly in the backend. I am skilled in C++, Java, Python, HTML/JS/CSS and have had experience with React, NextJS, and AWS.
          </div>
        </div>
        <div className="shadow-[#00000039] shadow-sm order-[0.1vw] border-secondary rounded-[0.6vw] mt-[1.5vh] w-[23vw] ml-[1.8vh] h-[57vh] bg-primary">
        <div className="mt-[4vh] mx-auto w-[17vw] h-[17vw] relative">
          <Image
            className="shadow-[#00000039] shadow-sm border-[0.07vw] border-secondary rounded-[0.6vw] opacity-90"
            src="/me.jpg"
            alt="me.jpg"
            fill
            sizes="17vw"
          />
        </div>
          <div className="flex flex-col justify-center items-center">
            <div className="mt-[1.8vh] font-quicksand text-accent font-[700] text-[1vw]">
              Contact Me:
            </div>
            <div className="shadow-[#00000039] shadow-sm mt-[0.9vh] font-[500]font-quicksand text-accent bg-[#f4f4f48c] border-[0.06vw] border-[#ffffff43] rounded-[0.45vw] text-[0.8vw] p-[0.28vw]">
                469-986-8928
            </div>
            <div className="shadow-[#00000039] shadow-sm mt-[0.9vh] font-[500] font-quicksand text-accent bg-[#f4f4f48c] border-[0.06vw] border-[#ffffff43] rounded-[0.45vw] text-[0.8vw] p-[0.28vw]">
                ethan.pvarghese@gmail.com
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
