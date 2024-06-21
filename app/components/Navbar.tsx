'use client';

import Button from "./button";
import { usePathname } from "next/navigation";
import LinksContainer from "./LinksContainer";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="flex items-center mx-auto sm:mt-[5rem] mt-[1rem] lg:w-[61%] sm:w-[80%] h-[6rem]">
      <Button text="ABOUT" active={pathname === '/'} href="/" />
      <Button text="PROJECTS" active={pathname === '/projects'} href="/projects" />
      <LinksContainer/>
    </div>
  );
};