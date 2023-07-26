/* eslint-disable @next/next/no-img-element */
'use client';
import InfoSection from '@/components/InfoSection';
import React, { useEffect, useState } from 'react';
import { data, sections } from '@/utils/data';
import Link from 'next/link';
import MobileAboutMenu from '@/components/MobileAboutMenu';

type Props = {};

const AboutPage = (props: Props) => {
  const [contactDetailsOpen, setContactDetailsOpen] = useState(false);
  const [currSection, setCurrSection] = useState('personal-info');
  const [currData, setCurrData] = useState({ ...sections[1] });
  const [activeFolders, setActiveFolders] = useState<Array<String>>([
    currData.info[0].title,
  ]);
  const [currentPage, setCurrentPage] = useState({
    folder: currData.info[0].title,
    file: currData.info[0].files.length !== 0 ? currData.info[0].files[0] : '',
  });

  // mobile states
  const [sectionsOpen, setSectionsOpen] = useState([sections[1].title]);

  const selectSectionHandler = (section: string) => {
    setCurrSection(section);
  };
  useEffect(() => {
    let currData = sections.filter(({ title }) => title === currSection)[0];
    setCurrData(currData);
    setActiveFolders([currData.info[0].title]);
  }, [currSection]);
  useEffect(() => {
    if (activeFolders.length === 0) {
      if (currData.info[0].files.length === 0)
        setCurrentPage({ folder: currData.info[0].title, file: '' });
      else
        setCurrentPage({
          folder: currData.info[0].title,
          file: currData.info[0].files[0],
        });
    } else {
      const activeFolder = activeFolders.at(activeFolders.length - 1);
      const activeFolderData = currData.info.filter(
        ({ title }) => title === activeFolder
      )[0];
      if (activeFolderData?.files.length === 0)
        setCurrentPage({ folder: activeFolderData.title, file: '' });
      else {
        setCurrentPage({
          folder: activeFolderData
            ? activeFolderData.title
            : currData.info[0].title,
          file: activeFolderData
            ? activeFolderData.files[0]
            : currData.info[0].files.length === 0
            ? ''
            : currData.info[0].files[0],
        });
      }
    }
  }, [activeFolders, currSection, currData]);

  const selectPage = (folder: string, file: string) => {
    setCurrentPage({ folder, file });
  };
  console.log({ activeFolders });
  console.log({ currData });
  console.log({ currentPage });
  return (
    <main
      data-aos="fade-in"
      className="h-full w-full flex flex-row max-lg:flex-col flex-auto overflow-hidden"
    >
      <div id="mobile-page-title">
        <h2>_about-me</h2>
      </div>
      <div className="page-menu w-full lg:h-full flex border-r border-gray-theme">
        <div className="w-12 h-full hidden lg:block border-r border-gray-theme">
          {sections.map((section, idx) => (
            <InfoSection
              key={idx}
              title={section.title}
              icon={section.icon}
              isActive={currSection === section.title}
              selectSection={selectSectionHandler}
            />
          ))}
        </div>
        <div className="hidden lg:block w-full h-full border-r border-gray-theme">
          <div className="flex items-center px-5 w-full h-[35px] bg-gray-theme mb-1 lg:mb-0 lg:bg-transparent border-b cursor-pointer border-gray-theme lg:hover:bg-gray-theme">
            <img className="arrow rotate-90" src="/icons/arrow.svg" />
            <h3>{currSection}</h3>
          </div>
          <div>
            {currData.info.map((item, idx) => (
              <div
                key={idx}
                className="grid grid-cols-2 px-5 items-center my-2 font-fira_regular text-menu-text"
              >
                <div
                  className="flex col-span-2 text-sm hover:text-white hover:cursor-pointer"
                  onClick={() => {
                    activeFolders.includes(item.title)
                      ? setActiveFolders((prev) =>
                          prev.filter((currItem) => item.title !== currItem)
                        )
                      : setActiveFolders((prev) => [...prev, item.title]);
                  }}
                >
                  {item.files.length === 0 ? (
                    <div className="mx-3 w-2"></div>
                  ) : (
                    <img
                      src="/icons/diple.svg"
                      alt=""
                      className={`mx-3 w-2 max-w-fit ${
                        activeFolders.includes(item.title) ||
                        currentPage.folder === item.title
                          ? 'rotate-90'
                          : ''
                      } )
                      }`}
                    />
                  )}

                  <img
                    src={'/icons/folder' + (idx + 1) + '.svg'}
                    alt=""
                    className="mr-3"
                  />
                  <p
                    className={`transition-all ${
                      currentPage.folder === item.title && 'text-white'
                    }`}
                  >
                    {item.title}
                  </p>
                </div>
                {item.files.length === 0 ||
                !activeFolders.includes(item.title) ? (
                  <></>
                ) : (
                  <div className="col-span-2">
                    {item.files.map((file, idx) => (
                      <div
                        key={idx}
                        className={`hover:text-white hover:cursor-pointer flex my-2 ${
                          currentPage.file === file && 'text-white'
                        }`}
                        onClick={() => selectPage(item.title, file)}
                      >
                        <img
                          src="/icons/markdown.svg"
                          alt=""
                          className="ml-8 mr-3"
                        />
                        <p>{file}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div id="contacts">
            <div
              className="flex items-center px-5 w-full h-[35px] bg-gray-theme mb-1 lg:mb-0 lg:bg-transparent border-b cursor-pointer border-gray-theme lg:hover:bg-gray-theme"
              onClick={() => setContactDetailsOpen(!contactDetailsOpen)}
            >
              <img
                className={`arrow ${contactDetailsOpen ? 'rotate-90' : ''}`}
                src="/icons/arrow.svg"
              />
              <h3>contacts</h3>
            </div>
            <div
              className={`py-[10px] ${contactDetailsOpen ? 'block' : 'hidden'}`}
            >
              {data.contact.map((item, idx) => (
                <div key={idx} className="flex text-xs items-center py-1 px-2">
                  <img
                    className="w-3 h-3 mr-[2px]"
                    src={'/icons/' + item.key + '.svg'}
                  />
                  <Link
                    target={'_blank'}
                    href={item.href}
                    className="font-fira_retina text-menu-text hover:text-white"
                  >
                    {item.source}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="max-lg:w-full lg:hidden">
          <div className="lg:hidden w-full font-fira_regular">
            {sections.map((section, idx) => (
              <div key={idx} className="w-full bg-gray-theme mb-1">
                <div
                  className="flex lg:hidden py-1.5 px-5"
                  onClick={() => {
                    sectionsOpen.includes(section.title)
                      ? setSectionsOpen((prev) =>
                          prev.filter((item) => item !== section.title)
                        )
                      : setSectionsOpen((prev) => [...prev, section.title]);
                    setCurrData(section);
                  }}
                >
                  <img
                    src="/icons/arrow.svg"
                    alt=""
                    className={`mr-[10px] transition ' ${
                      sectionsOpen.includes(section.title) ? 'rotate-90' : ''
                    }`}
                  />
                  <p className="text-white text-sm">{section.title}</p>
                </div>
                {sectionsOpen.includes(section.title) && (
                  <div className="flex flex-col w-full bg-blue-background">
                    {section.info.map((item, idx) => (
                      <div
                        key={idx}
                        className="grid grid-cols-2 px-5 items-center my-2 font-fira_regular text-menu-text"
                      >
                        <div
                          className="flex col-span-2 text-sm hover:text-white hover:cursor-pointer"
                          onClick={() => {
                            activeFolders.includes(item.title)
                              ? setActiveFolders((prev) =>
                                  prev.filter(
                                    (currItem) => item.title !== currItem
                                  )
                                )
                              : setActiveFolders((prev) => [
                                  ...prev,
                                  item.title,
                                ]);
                          }}
                        >
                          {item.files.length === 0 ? (
                            <div className="mx-3 w-2"></div>
                          ) : (
                            <img
                              src="/icons/diple.svg"
                              alt=""
                              className={`mx-3 w-2 max-w-fit ${
                                activeFolders.includes(item.title)
                                  ? 'rotate-90'
                                  : ''
                              } )
                      }
                      `}
                            />
                          )}

                          <img
                            src={'/icons/folder' + (idx + 1) + '.svg'}
                            alt=""
                            className="mr-3"
                          />
                          <p
                            className={`transition-all ${
                              currentPage.folder === item.title ||
                              activeFolders.includes(item.title)
                                ? 'text-white'
                                : ''
                            }`}
                          >
                            {item.title}
                          </p>
                        </div>
                        {item.files.length === 0 ||
                        !activeFolders.includes(item.title) ? (
                          <></>
                        ) : (
                          <div className="col-span-2">
                            {item.files.map((file, idx) => (
                              <div
                                key={idx}
                                className={`hover:text-white hover:cursor-pointer flex my-2 ${
                                  currentPage.file === file && 'text-white'
                                }`}
                                onClick={() => {
                                  setCurrentPage({
                                    folder: item.title,
                                    file: file,
                                  });
                                }}
                              >
                                <img
                                  src="/icons/markdown.svg"
                                  alt=""
                                  className="ml-8 mr-3"
                                />
                                <p>{file}</p>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="w-full border mb-1">
              <div
                className="flex lg:hidden py-1.5 px-5"
                onClick={() => setContactDetailsOpen(!contactDetailsOpen)}
              >
                <img
                  src="/icons/arrow.svg"
                  alt=""
                  className="mr-[10px] transition"
                />
                <p className="text-white text-sm">contacts</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-2xl lg:text-9xl flex items-center justify-center w-full h-full">
        {currentPage.folder + ' and ' + currentPage.file}
      </h1>
    </main>
  );
};

export default AboutPage;
