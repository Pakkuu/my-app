import { useRouter } from 'next/navigation';

interface ButtonProps {
  text: string;
  active: boolean;
  href: string;
}

export default function Button({ text, active, href }: ButtonProps) {

  const router = useRouter();

  const handleClick = () => {
    router.push(href)
  }

  return (
    <div
      className={`shadow-[#00000039] shadow-sm font-quicksand font-[500] flex items-center justify-center rounded-[1.6vw] md:rounded-[0.6vw] ml-[2vw] md:ml-[1vw] text-[4vw] md:text-[1.55vw] transition-all duration-[200ms] ${
        active
          ? 'cursor-default bg-accent text-[#ffffffd0] w-[20vw] md:w-[9vw] h-[4vh] md:h-[6.5vh]'
          : 'text-accent bg-[#ffffff2a] border-[#54576a12] border-2 hover:bg-[#c1c1c12a] hover:text-[#365971] hover:cursor-pointer w-[19.7vw] md:w-[8vw] h-[3.5vh] md:h-[6.15vh]'
      }`}
      onClick={handleClick}>
      <div>{text}</div>
    </div>
  );
}