'use client'
import Image from "next/image";
import { useEffect } from 'react';

export default function Project() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (window.location.hash) {
        const id = window.location.hash.substring(1);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  }, []);

  return (
    <div>
      <div id="cyphera" className="mx-auto mt-[1.5vh] mb-[5rem] w-min h-auto flex flex-col justify-center items-center">
        <div className="lg:w-[57rem] lg:h-[30rem] sm:w-[35rem] sm:h-[20rem] w-[20rem] h-[10rem] relative">
          <Image className="" src="/cyphera.png" alt="cyphera" fill unoptimized/>
        </div>
        <div className="sm:w-[30rem] w-[15rem]">
          <div className="font-quicksand font-[400] sm:text-[1.6rem] mt-[1.5vh] mb-[0.7vh] text-[#000000d8]">
            Cyphera
          </div>
          <div className="text-[#000000a6] font-[400] font-quicksand sm:text-[1.1rem] text-[0.8rem] text-justify">
            A durable, high performance file storage solution - secured with
            Enterprise Grade AES-256 bit end-to-end encryption. Files are encrypted locally on the client machine before upload, ensuring inflight data protection. EC2 instances are attached to an Elastic Load Balancer, enabling efficient routing of traffic between servers.
          </div>
        </div>
      </div>
      <div id="sage" className="mx-auto mt-[1.5vh] mb-[1.5rem] w-min h-auto flex flex-col justify-center items-center px-[3vw]">
        <div className="lg:w-[44rem] lg:h-[30rem] sm:w-[34rem] sm:h-[23rem] w-[19rem] h-[13rem] relative">
          <Image className="" src="/sage.png" alt="sage" fill unoptimized/>
        </div>
        <div className="sm:w-[30rem] w-[15rem]">
          <div className="font-quicksand font-[400] sm:text-[1.6rem] mt-[1.5vh] mb-[0.7vh] text-[#000000d8]">
            SAGE
          </div>
          <div className="text-[#000000a6] font-[400] font-quicksand sm:text-[1.1rem] text-[0.8rem] text-justify">
            An AI-powered advising and guidance system designed to help students
            navigate through the difficult academic maze. The two main features
            are a chatbot to answer student&apos;s questions, and also a degree plan
            generator that provides a student with a complete timeline of their
            college classes that they have left to complete based on their
            major.
          </div>
        </div>
      </div>
      <div id="slidescribe" className="mx-auto mt-[6rem] mb-[10rem] w-min h-auto flex flex-col justify-center items-center px-[3vw]">
        <div className="lg:w-[35rem] lg:h-[8rem] sm:w-[28rem] sm:h-[7rem] w-[15rem] h-[4rem] relative">
          <Image className="" src="/ss.png" alt="slidescribe" fill unoptimized/>
        </div>
        <div className="sm:w-[30rem] w-[15rem]">
          <div className="font-quicksand font-[400] sm:text-[1.6rem] mt-[2rem] mb-[0.7vh] text-[#000000d8]">
            SlideScribe
          </div>
          <div className="text-[#000000a6] font-[400] font-quicksand sm:text-[1.1rem] text-[0.8rem] text-justify">
            SlideScribe is a web app that aids students in their lecture
            comprehension. The program utilizes Google&apos;s Vision AI as an OCR
            Engine for transcribing text from uploaded images of lecture slides.
            Users can have the text read out loud with synchronized
            text-highlighting, and also have a summarized notes text file
            generated using OpenAI&apos;s api.
          </div>
        </div>
      </div>
    </div>
  );
}