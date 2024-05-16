import Image from "next/image";
import { prefix } from "../../prefix";

interface SkillProps {
  src: string;
  name: string;
}

export default function Skill({ src, name }: SkillProps) {
  return (
    <div className="shadow-[#00000039] shadow-sm w-[11vw] aspect-square bg-primary border-[0.1vw] border-secondary rounded-[0.6vw] opacity-80 flex flex-col justify-center items-center transition-transform duration-300 hover:scale-105">
      <div className={`${name === "Tailwind" ? "mt-[0vh] mb-[0.1vh]" : ""} mt-0`}>
        <div className="mt-[4vh] mx-auto h-[3.5vw] relative" style={{ width: name === "Tailwind" ? "5vw" : "3.5vw" }}>
          <Image src={`${prefix}${src}`} alt="" fill sizes="17vw" />
        </div>
      </div>
      <div className="font-quicksand font-[500] text-accent mt-[3vh] text-center text-[1vw]">
        {name}
      </div>
    </div>
  );
}