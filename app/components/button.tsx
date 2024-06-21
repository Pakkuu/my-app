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
      className={`font-quicksand font-[400] flex items-center justify-center sm:ml-[2rem] ml-[0.9rem] sm:text-[1.6rem] text-[1.2rem] transition-all duration-[200ms] ${
        active
          ? 'cursor-default text-[#2080c5d9] scale-[110%] transition-transform duration-200'
          : 'text-[#000000a1] hover:scale-[103%] hover:text-[#00000062] hover:cursor-pointer transition-all duration-200'
      }`}
      onClick={handleClick}>
      <div>{text}</div>
    </div>
  );
}