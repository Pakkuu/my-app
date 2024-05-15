'use client';

import Button from "./button";
import { usePathname } from "next/navigation";
import LinksContainer from "./LinksContainer";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="shadow-[#00000039] shadow-sm flex items-center border-[0.1vw] border-secondary rounded-[0.6vw] mx-auto mt-[10vh] max-w-[70%] h-[5.3vw] bg-primary">
      <Button text="About Me" active={pathname === '/about-me'} href="/about-me" />
      <Button text="Skills" active={pathname === '/skills'} href="/skills" />
      <Button text="Projects" active={pathname === '/projects'} href="/projects" />
      <LinksContainer/>
    </div>
  );
};