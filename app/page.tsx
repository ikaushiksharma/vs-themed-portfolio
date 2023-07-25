'use client';
import Game from '@/components/Game';
export default function Home() {
  return (
    <main data-aos="fade-in" className="h-full w-full">
      <div className="flex h-full w-full flex-auto max-lg:pl-0 lg:pl-[135px] xl:pl-[275px] min-[1920px]:pl-[310px] overflow-hidden">
        <div className="css-blurry-gradient-blue"></div>
        <div className="css-blurry-gradient-green"></div>
        <section className="w-full lg:w-1/2 flex flex-col m-7 md:m-0 justify-between md:justify-center">
          <div className="pb-12 max-md:pt-16">
            <span className="text-lg text-hello-name">Hi all, I am</span>
            <h1 className="text-5xl py-4 text-hello-name font-fira_regular leading-[1]">
              Kaushik Sharma
            </h1>
            <h2 className="md:text-3xl text-xl leading-[1] text-codeline-name md:text-codeline-tag font-fira_retina">
              {'>'} Full-stack web developer
            </h2>
          </div>
          <div className="flex flex-col text-sm py-10">
            <span className="text-sm pb-4 leading-[1] text-menu-text flex">
              {'// Pre Final Year Student - BE CSE'}
            </span>
            <span className="text-sm pb-4 lg:leading-[1] text-menu-text break-words leading-relaxed inline">
              {'// Proficient in ReactJs, NodeJs, TailwindCSS and more...'}
            </span>
            <span className="text-sm pb-4 leading-[1] text-menu-text inline">
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
