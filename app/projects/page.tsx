/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { getProjects, getTechs } from '@/utils/cmsFetch';
import { metadata } from 'app/layout';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

type Props = {};
//   {
//     title: 'Lorem Ipsum',
//     url: 'https://github.com/ikaushiksharma',
//     tech: ['react', 'javascript'],
//     img: 'https://picsum.photos/536/354',
//     description: 'Duis aute irure dolor in velit esse cillum dolore.',
//   },
//   {
//     title: 'Lorem Ipsum',
//     url: 'https://github.com/ikaushiksharma',
//     tech: ['react', 'html'],
//     img: 'https://picsum.photos/536/354',
//     description: 'Duis aute irure dolor in velit esse cillum dolore.',
//   },
//   {
//     title: 'Lorem Ipsum',
//     url: 'https://github.com/ikaushiksharma',
//     tech: ['react', 'html'],
//     img: 'https://picsum.photos/536/354',
//     description: 'Duis aute irure dolor in velit esse cillum dolore.',
//   },
//   {
//     title: 'Lorem Ipsum',
//     url: 'https://github.com/ikaushiksharma',
//     tech: ['react', 'html'],
//     img: 'https://picsum.photos/536/354',
//     description: 'Duis aute irure dolor in velit esse cillum dolore.',
//   },
//   {
//     title: 'Lorem Ipsum',
//     url: 'https://github.com/ikaushiksharma',
//     tech: ['react', 'html'],
//     img: 'https://picsum.photos/536/354',
//     description: 'Duis aute irure dolor in velit esse cillum dolore.',
//   },
//   {
//     title: 'Lorem Ipsum',
//     url: 'https://github.com/ikaushiksharma',
//     tech: ['react', 'html'],
//     img: 'https://picsum.photos/536/354',
//     description: 'Duis aute irure dolor in velit esse cillum dolore.',
//   },
// ];
type Project = {
  title: string;
  githubLink: string;
  liveLink: string;
  tech: Array<string>;
  image: string;
  description: string;
};
const ProjectPage = (props: Props) => {
  // let projects: Array<Project> = [];
  const [projects, setProjects] = useState([] as Array<Project>);
  useEffect(() => {
    const getProjectData = async () => {
      return await getProjects();
    };
    getProjectData().then((data) => {
      const projectObjects = data.objects;
      setProjects(
        //@ts-ignore
        projectObjects.map((project) => {
          const { metadata } = project;
          return {
            title: metadata.title,
            githubLink: metadata.githublink,
            liveLink: metadata.livelink,
            tech: metadata.technologies[0].tech.map(
              //@ts-ignore
              (tech) => tech.metadata.title
            ),
            image: metadata.image,
            description: metadata.description,
          };
        })
      );
    });
  }, []);

  useEffect(() => {
    const getTechData = async () => {
      return await getTechs();
    };
    const techData = getTechData().then((data) => {
      const techObjects = data.objects;
      setTechs(
        //@ts-ignore
        techObjects.map((tech) => {
          const { metadata } = tech;
          return {
            title: metadata.title,
            icon: metadata.url,
          };
        })
      );
    });
  }, []);
  const [techs, setTechs] = useState<Array<{ title: string; icon: string }>>(
    []
  );
  const [techListOpen, setTechListOpen] = useState(true);
  const [selectedTechs, setSelectedTechs] = useState([] as Array<string>);
  const [selectedProjects, setSelectedProjects] = useState([
    ...projects,
  ] as Array<Project>);
  useEffect(() => {
    setSelectedProjects([...projects]);
  }, [projects]);
  useEffect(() => {
    if (selectedTechs.length === 0) {
      setSelectedProjects([...projects]);
    } else {
      setSelectedProjects(
        projects.filter((project) =>
          project.tech.some((tech) => selectedTechs.includes(tech))
        )
      );
    }
  }, [selectedTechs]);
  return (
    <main
      data-aos="fade-in"
      className="h-full w-full flex flex-col lg:flex-row flex-auto overflow-y-scroll"
    >
      <div id="mobile-page-title">
        <h2>_projects</h2>
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
            {techs.map((item, idx) => (
              <div
                key={idx}
                className="flex text-sm opacity-75 justify-between items-center py-2 px-6"
              >
                <input
                  type="checkbox"
                  checked={selectedTechs.includes(item.title)}
                  onClick={() => {
                    if (selectedTechs.includes(item.title)) {
                      setSelectedTechs(
                        selectedTechs.filter((tech) => tech !== item.title)
                      );
                    } else {
                      setSelectedTechs([...selectedTechs, item.title]);
                    }
                  }}
                  id={item.title}
                  className="bg-[#011221] border-2 mr-4 text-menu-text border-gray-theme rounded-lg"
                />
                <div className="flex flex-1 items-center">
                  <img
                    className="w-4 h-4 mr-3"
                    src={'/icons/techs/' + item.icon + '.svg'}
                  />
                  <span className="font-fira_retina capitalize text-menu-text hover:text-white">
                    {item.title}
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

        {selectedProjects.length === 0 ? (
          <div className="flex flex-col font-fira_retina text-menu-text mt-4 mb-5 h-full justify-center items-center">
            <span className="flex justify-center text-4xl pb-3">X__X</span>
            <span className="text-white flex justify-center text-xl">
              No matching projects
            </span>
            <span className="flex justify-center">for these technologies</span>
          </div>
        ) : (
          <div className="grid grid-cols-1 max-md:px-6 max-md:pb-10 md:px-12 md:py-10 md:grid-cols-2 min-[1350px]:px-20 min-[1350px]:grid-cols-3 max-w-full h-full overflow-scroll lg:self-center">
            {(selectedProjects as Array<Project>).map(
              (
                {
                  title,
                  tech,
                  githubLink,
                  liveLink,
                  image,
                  description,
                }: Project,
                index: number
              ) => (
                <div
                  key={index}
                  className="lg:mx-5 max-md:min-w-full md:w-full md:min-w-full md:p-[5px] min-[1350px]:p-[5px] min-w-[400px] mb-1"
                >
                  <span className="flex text-sm my-3">
                    <h3 className="text-purplefy font-fira_bold mr-3">
                      Project {index + 1}
                    </h3>
                    <h4 className="font-fira_retina text-menu-text">
                      {'// '}
                      {title}
                    </h4>
                  </span>
                  <div className="flex flex-col border max-w-[400px] rounded-2xl border-gray-theme bg-[#011221]">
                    <div className="max-h-[120px] relative overflow-hidden">
                      <div className="absolute flex right-3 top-3">
                        {tech.map((techo: string, index: number) => (
                          <img
                            key={index}
                            src={
                              '/icons/techs/filled/' +
                              techo.toLowerCase() +
                              '.svg'
                            }
                            alt=""
                            className="w-6 h-6 mx-1 hover:opacity-75"
                          />
                        ))}
                      </div>
                      <img
                        src={image}
                        alt=""
                        className="rounded-tr-2xl rounded-tl-2xl"
                      />
                    </div>

                    <div className="pb-8 pt-6 px-6 border-t border-gray-theme">
                      <p className="text-menu-text font-fira_retina text-sm mb-5">
                        {description}
                      </p>
                      <div className="flex items-center justify-evenly">
                        <Link
                          href={githubLink}
                          target="_blank"
                          className="text-white bg-[#1C2B3A] hover:bg-[#263B50] font-fira_retina py-2 px-2 w-fit text-xs rounded-lg"
                        >
                          view-source
                        </Link>
                        <Link
                          href={liveLink}
                          target="_blank"
                          className="text-white bg-[#1C2B3A] hover:bg-[#263B50] font-fira_retina py-2 px-2 w-fit text-xs rounded-lg"
                        >
                          view-project
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        )}
      </div>
    </main>
  );
};

export default ProjectPage;
