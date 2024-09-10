import Image from "next/image";

export default function AboutMe() {
  return (
    <>
      <div className="flex-col sm:mt-[6.0rem] lg:w-[53%] sm:w-[70%] w-[90%] mx-auto lg:pr-[7%] sm:p-0">
        <div className="font-quicksand text-[#323232d5] font-[400] text-[1.8rem] mr-auto mb-[2rem]">
          Hi! My name is Ethan Varghese
        </div>
        <div className="flex relative">
          <div className="font-quicksand text-[#000000ac] font-[400] text-justify w-full mr-auto lg:text-[1.3rem] md:text-[1.1rem] sm:text-[1rem] text-[0.8rem] sm:leading-[3rem] leading-[2rem] pr-[1.5rem] z-10">
            I&apos;m a sophmore studying computer science at UTD. In my free
            time I love to workout, play video games, and watch anime (some of
            my favorites are Steins;Gate, FMAB, and Samurai Champloo). My interests
            within computer science lie in Cloud Services, RAG (Retrieval
            Augmented Generation), AI, and full-stack development. I am skilled in C++, Java, Python, HTML/JS/CSS and have
            experience with React, Next, Express, and AWS!
          </div>

        </div>
      </div>
    </>
  );
}
