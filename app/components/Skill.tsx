import Image from "next/image";

interface SkillProps {
  src: string;
  name: string;
}

export default function Skill({ src, name }: SkillProps) {
  return (
    <div className="shadow-[#00000039] shadow-sm w-[20vw] md:w-[11vw] aspect-square bg-primary border-[0.1vw] border-secondary rounded-[1.6vw] md:rounded-[0.6vw] opacity-80 flex flex-col justify-center items-center transition-transform duration-300 md:hover:scale-105">
      <div className="mt-0">
        <div className="md:mt-[4vh] mx-auto w-[9vw] md:w-[3.5vw] h-[9vw] md:h-[3.5vw] relative">
          <Image src={src} alt="" fill sizes="17vw" />
        </div>
      </div>
      <div className="font-quicksand font-[500] text-accent mt-[2vw] md:mt-[3vh] text-center text-[2.2vw] md:text-[1vw]">
        {name}
      </div>
    </div>
  );
}
