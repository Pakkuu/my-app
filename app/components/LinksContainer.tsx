'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function LinksContainer() {
  return (
    <div className="ml-auto sm:w-[7.5rem] w-[4.6rem] sm:mr-[0.9rem] mr-[1rem]">
      <div className="flex justify-evenly mx-[-0.3vw]">
        <Link
          href="https://github.com/pakkuu"
          target="_blank"
          rel="noopener noreferrer"
          className="aspect-square sm:w-[1.8rem] w-[1.1rem] relative"
        >
          <Image
            className="opacity-10 hover:opacity-50 transition-all duration-200 hover:scale-105"
            src="/github.png"
            alt="GitHub"
            fill
            sizes="2vw"
          />
        </Link>
        <Link
          href="https://www.linkedin.com/in/pakkuu"
          target="_blank"
          rel="noopener noreferrer"
          className="aspect-square sm:w-[1.8rem] w-[1.1rem] relative"
        >
          <Image
            className="opacity-10 hover:opacity-50 transition-all duration-200 hover:scale-105"
            src="/linkedin.png"
            alt="LinkedIn"
            fill
            sizes="2vw"
          />
        </Link>
        <Link
          href="https://www.instagram.com/ethanv_17/"
          target="_blank"
          rel="noopener noreferrer"
          className="aspect-square sm:w-[1.8rem] w-[1.1rem] relative"
        >
          <Image
            className="opacity-10 hover:opacity-50 transition-all duration-200 hover:scale-105"
            src="/instagram.png"
            alt="Instagram"
            fill
            sizes="2vw"
          />
        </Link>
      </div>
    </div>
  );
}