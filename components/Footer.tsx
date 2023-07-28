import React from 'react';

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="flex border-t border-gray-theme md:justify-between text-menu-text font-fira_retina min-h-[40px] h-[40px] text-[13px]">
      <div className="w-2/3 flex justify-between md:justify-start">
        <span
          id="social-title"
          className="h-full flex justify-center items-center border-right px-5"
        >
          find me in:
        </span>
        <div id="social-icons" className="flex">
          <a
            href="https://twitter.com/ikaushiksharma"
            rel="noopener noreferrer"
            target="_blank"
            className="flex justify-center items-center"
          >
            <img src="/icons/social/twitter.svg" />
          </a>
          <a
            href="https://instagram.com/ikaushiksharma"
            rel="noopener noreferrer"
            target="_blank"
            className="flex justify-center items-center"
          >
            <img src="/icons/social/instagram.svg" />
          </a>
          <a
            href="https://linkedin.com/in/ikaushiksharma"
            rel="noopener noreferrer"
            target="_blank"
            className="flex justify-center items-center"
          >
            <img src="/icons/social/linkedin.svg" />
          </a>
          <a
            href="https://github.com/ikaushiksharma"
            rel="noopener noreferrer"
            target="_blank"
            className="flex md:hidden justify-center items-center"
          >
            <img src="/icons/social/github.svg" />
          </a>
        </div>
      </div>
      <div className="flex text-sm items-center hover:opacity-0 transition-opacity cursor-not-allowed w-full">
        cmd + k / ctrl + k for command menu
      </div>

      <a
        href="https://github.com/ikaushiksharma"
        rel="noopener noreferrer"
        target="_blank"
        className="hidden md:flex items-center px-5 border-l border-gray-theme hover:bg-gray-theme/60"
      >
        @ikaushiksharma
        <img className="py-2 px-4" src="/icons/social/github.svg" />
      </a>
    </footer>
  );
};

export default Footer;
