import Image from "next/image";

export default function AboutMe() {
  return (
    <>
      <div className="flex flex-col md:flex-row max-w-[93%] md:max-w-[70%] mx-auto mb-6">
        <div className="shadow-[#00000039] shadow-sm flex flex-col justify-center items-center border-[0.1vw] border-secondary rounded-[1.6vw] md:rounded-[0.6vw] mt-[1.5vh] w-full md:w-[50vw] h-[38vh] md:h-[57vh] bg-primary p-[3vw] md:p-0">
          <div className="font-quicksand text-accent font-[500] text-[5.2vw] md:text-[1.8vw] mr-auto ml-[2vw] mb-[1vh]">
            Hi! My name is Ethan Varghese...
          </div>
          <div className="font-quicksand text-accent font-[500] text-justify mx-[2vw] text-[3vw] md:text-[1.1vw] leading-[3.5vh] md:leading-[3.7vh]">
          I&apos;m a sophmore studying computer science at UTD. In my free time I love to workout, play video games, and watch anime (some of my favorites are Bleach, FMAB, and Samurai Champloo). My interests within computer science lie in Cloud Services, RAG (Retrieval Augmented Generation), AI, and web development, particularly in the backend. I am skilled in C++, Java, Python, HTML/JS/CSS and have had experience with React, NextJS, and AWS.
          </div>
        </div>
        <div className="shadow-[#00000039] shadow-sm order-[0.1vw] border-secondary rounded-[1.6vw] md:rounded-[0.6vw] mt-[1.5vh] w-full md:w-[23vw] md:ml-[1.8vh] h-[48vh] md:h-[57vh] bg-primary">
        <div className="mt-[3vh] md:mt-[4vh] mx-auto w-[65vw] md:w-[17vw] h-[65vw] md:h-[17vw] relative">
          <Image
            className="shadow-[#00000039] shadow-sm border-[0.07vw] border-secondary rounded-[1.6vw] md:rounded-[0.6vw] opacity-90"
            src="/me.jpg"
            alt="me.jpg"
            fill
            sizes="17vw"
          />
        </div>
          <div className="flex flex-col justify-center items-center">
            <div className="mt-[1.8vh] font-quicksand text-accent font-[700] text-[5.2vw] md:text-[1vw]">
              Contact Me:
            </div>
            <div className="mt-[0.9vh] font-[500]font-quicksand text-accent text-[3vw] md:text-[0.8vw] p-[0.28vw]">
                469-986-8928
            </div>
            <div className="mt-[0.9vh] font-[500] font-quicksand text-accent text-[3vw] md:text-[0.8vw] p-[0.28vw]">
                ethan.pvarghese@gmail.com
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
