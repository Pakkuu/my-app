import Image from "next/image";

export default function AboutMe() {
  return (
    <>
      <div className="flex-col sm:mt-[6.0rem] lg:w-[53%] sm:w-[70%] w-[90%] mx-auto lg:pr-[7%] sm:p-0">
        <div className="font-quicksand text-[#545454d5] font-[400] text-[1.8rem] mr-auto mb-[2rem]">
          Hi! My name is Ethan Varghese
        </div>
        <div className="flex relative">
          <div className="font-quicksand text-[#000000ac] font-[300] text-justify w-full mr-auto lg:text-[1.3rem] md:text-[1.1rem] sm:text-[1rem] text-[0.8rem] sm:leading-[3rem] leading-[2rem] pr-[1.5rem] lg:border-r-2 lg:bg-[#F5F5F5] border-0 z-10">
            I&apos;m a sophmore studying computer science at UTD. In my free
            time I love to workout, play video games, and watch anime (some of
            my favorites are Bleach, FMAB, and Samurai Champloo). My interests
            within computer science lie in Cloud Services, RAG (Retrieval
            Augmented Generation), AI, and web development, particularly in the
            backend. I am skilled in C++, Java, Python, HTML/JS/CSS and have had
            experience with React, NextJS, and AWS.
          </div>
          <div className="aspect-square w-[4rem] h-[4rem] relative mt-auto ml-[-2rem] z-0 lg:block hidden">
            <Image
              className="opacity-[70%] hover:ml-[0.50rem] transition-all duration-200"
              src="/astro.svg"
              alt="astro"
              fill
            />
          </div>
        </div>
      </div>
    </>
  );
}