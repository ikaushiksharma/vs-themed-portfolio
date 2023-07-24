'use client';
import Game from '@/components/Game';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
export default function Home() {
  useEffect(() => {
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    });
  }, []);
  return (
    <main data-aos="fade-in" className="h-full w-full">
      <div className="flex h-full w-full flex-auto max-lg:pl-0 lg:pl-[135px] xl:pl-[275px] min-[1920px]:pl-[310px] overflow-hidden">
        <div className="css-blurry-gradient-blue"></div>
        <div className="css-blurry-gradient-green"></div>
        <section className="w-full lg:w-1/2 flex flex-col m-7 md:m-0 justify-between md:justify-center">
          <div className="pb-12">
            <span className="text-lg text-hello-name">Hi all, I am</span>
            <h1 className="text-5xl py-4 text-hello-name font-fira_regular leading-[1]">
              Kaushik Sharma
            </h1>
            <h2 className="md:text-3xl text-xl leading-[1] text-codeline-name md:text-codeline-tag font-fira_retina">
              {'>'} Full-stack web developer
            </h2>
          </div>
          <div className="flex flex-col text-sm py-10">
            <span className="text-sm pb-4 leading-[1] text-menu-text hidden md:flex">
              {'// complete the game to continue'}
            </span>
            <span className="text-sm pb-4 leading-[1] text-menu-text hidden lg:inline">
              {'// you can also see it on my Github page'}
            </span>
            <span className="text-sm pb-4 leading-[1] text-menu-text inline lg:hidden">
              {'// find my profile on Github:'}
            </span>
            <p className="code pb-4 font-fira_medium text-hello-name">
              <span className="text-purple-text">const </span>
              <span className="text-codeline-name">githubLink </span>
              <span className="text-white">= </span>
              <a
                className="underline underline-offset-4 text-codeline-link"
                href="https://github.com/ikaushiksharma"
              >
                &quot;https://github.com/ikaushiksharma&quot;
              </a>
            </p>
          </div>
        </section>

        <section
          data-aos="fade-up"
          className="flex-col w-1/2 h-full justify-center z-20 hidden lg:flex"
        >
          {/* <SnakeGame /> */}
          <Game />
        </section>
      </div>
    </main>
  );
}
