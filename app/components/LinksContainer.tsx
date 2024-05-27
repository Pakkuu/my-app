'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function LinksContainer() {
  return (
    <div className="ml-auto w-[20vw] md:w-[8vw] mr-[0.5vw] md:mr-[0.9vw]">
      <div className="flex justify-evenly mx-[-0.3vw]">
        <Link
          href="https://github.com/pakkuu"
          target="_blank"
          rel="noopener noreferrer"
          className="w-[5vw] md:w-[2vw] h-[5vw] md:h-[2vw] relative"
        >
          <Image
            className="opacity-30 hover:opacity-50 transition-all duration-200 hover:scale-105"
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
          className="w-[5vw] md:w-[2vw] h-[5vw] md:h-[2vw] relative"
        >
          <Image
            className="opacity-30 hover:opacity-50 transition-all duration-200 hover:scale-105"
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
          className="w-[5vw] md:w-[2vw] h-[5vw] md:h-[2vw] relative"
        >
          <Image
            className="opacity-30 hover:opacity-50 transition-all duration-200 hover:scale-105"
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