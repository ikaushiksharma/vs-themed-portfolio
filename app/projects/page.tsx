'use client';
import React, { useState } from 'react';

type Props = {};
const data = [
  { name: 'react', icon: 'react' },
  { name: 'nextjs', icon: 'react' },
  { name: 'nodejs', icon: 'react' },
  { name: 'typescript', icon: 'react' },
  { name: 'tailwind', icon: 'react' },
  { name: 'prisma', icon: 'react' },
  { name: 'html', icon: 'react' },
  { name: 'javascript', icon: 'react' },
];
const ProjectPage = (props: Props) => {
  const techs = data.map((item) => item.name);
  const [techListOpen, setTechListOpen] = useState(true);
  const [selectedTechs, setSelectedTechs] = useState([] as Array<string>);
  console.log(selectedTechs);
  return (
    <main
      data-aos="fade-in"
      className="h-full w-full flex flex-col lg:flex-row flex-auto overflow-y-scroll"
    >
      <div id="mobile-page-title">
        <h2>projects</h2>
      </div>
      <div className="page-menu w-full lg:h-full flex flex-col border-r border-gray-theme">
        <div>
          <div
            className="flex items-center px-6 w-full h-[35px] bg-gray-theme mb-1 lg:mb-0 lg:bg-transparent border-b cursor-pointer border-gray-theme lg:hover:bg-gray-theme"
            onClick={() => setTechListOpen(!techListOpen)}
          >
            <img
              className={`arrow ${techListOpen ? 'rotate-90' : ''}`}
              src="/icons/arrow.svg"
            />
            <h3>projects</h3>
          </div>
          <div className={`py-[10px] ${techListOpen ? 'block' : 'hidden'}`}>
            {data.map((item, idx) => (
              <div
                key={idx}
                className="flex text-base justify-between items-center py-1 px-6"
              >
                <input
                  type="checkbox"
                  checked={selectedTechs.includes(item.name)}
                  onClick={() => {
                    if (selectedTechs.includes(item.name)) {
                      setSelectedTechs(
                        selectedTechs.filter((tech) => tech !== item.name)
                      );
                    } else {
                      setSelectedTechs([...selectedTechs, item.name]);
                    }
                  }}
                  id={item.name}
                  className="bg-[#011221] border-2 mr-4 text-menu-text border-gray-theme rounded-lg"
                />
                <div className="flex flex-1 items-center">
                  <img
                    className="w-4 h-4 mr-[10px]"
                    src={'/icons/techs/' + item.icon + '.svg'}
                  />
                  <span className="font-fira_retina capitalize text-menu-text hover:text-white">
                    {item.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full">
        <div className="min-h-[35px] max-h-[35px] w-full px-4 py-8 lg:p-0 flex lg:border-b lg:border-r border-gray-theme items-center">
          <div className="flex items-center lg:border-r border-gray-theme h-full">
            <p className="font-fira_regular leading-relaxed lg:leading-none flex flex-wrap break-words text-menu-text text-sm px-3">
              <span className="flex lg:hidden text-sm w-fit text-white">
                {'// projects'}
              </span>
              {selectedTechs.length === 0 ? (
                <span className="pl-4">all;</span>
              ) : (
                selectedTechs.map((item, idx) => (
                  <span key={idx} className="pl-4 capitalize">
                    {item};
                  </span>
                ))
              )}
            </p>
            <img
              src="/icons/close.svg"
              alt=""
              className="hidden lg:inline m-3"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProjectPage;
