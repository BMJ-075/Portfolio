import React from 'react';

import Image from 'next/image';
import LinkedIn from '../../public/socialmedia/linkedin.svg';
import Github from '../../public/tech/github.webp';

const Footer = () => {
  return (
    <div className="mt-20 h-full w-full bg-transparent p-[15px] text-gray-200 shadow-lg">
      <div className="m-auto flex w-full flex-col items-center justify-center">
        <div className="flex h-full w-full flex-row flex-wrap items-center justify-around">
          <div className="flex h-auto min-w-[200px] flex-col items-center justify-start">
            <div className="text-[16px] font-bold">Community</div>

            <p className="my-[15px] flex cursor-pointer flex-row items-center">
              <Image src={Github.src} alt={'linkedIn'} width={20} height={20} />
              <span className="ml-[6px] text-[15px]">Github</span>
            </p>
          </div>
          <div className="flex h-auto min-w-[200px] flex-col items-center justify-start">
            <div className="text-[16px] font-bold">Social Media</div>
            <p className="my-[15px] flex cursor-pointer flex-row items-center">
              <Image
                src={LinkedIn.src}
                alt={'linkedIn'}
                width={20}
                height={20}
              />
              <span className="ml-[6px] text-[15px]">LinkedIn</span>
            </p>
          </div>
          <div className="flex h-auto min-w-[200px] flex-col items-center justify-start">
            <div className="text-[16px] font-bold">About</div>
            <p className="my-[15px] flex cursor-pointer flex-row items-center">
              <span className="ml-[6px] text-[15px]">
                bhavyajain075@gmail.com
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
