'use client';
import InfoSection from '@/components/InfoSection';
import React, { useEffect, useState } from 'react';
import { data, sections } from '@/utils/data';
import Link from 'next/link';

type Props = {};

const AboutPage = (props: Props) => {
  const [contactDetailsOpen, setContactDetailsOpen] = useState(false);
  const [currSection, setCurrSection] = useState('professional-info');
  const [currData, setCurrData] = useState({ ...sections[0] });
  const [activeFolders, setActiveFolders] = useState<Array<String>>([]);
  const selectSectionHandler = (section: string) => {
    setCurrSection(section);
    setActiveFolders([]);
  };
  useEffect(() => {
    let currData = sections.filter(({ title }) => title === currSection)[0];
    setCurrData(currData);
  }, [currSection]);
  console.log(currData);
  console.log([...activeFolders]);

  return (
    <main
      data-aos="fade-in"
      className="h-full w-full flex flex-row lg:flex-col flex-auto overflow-hidden"
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
        <div className="hidden lg:block w-full h-full border-right">
          <div className="flex items-center px-5 w-full h-[35px] bg-gray-theme mb-1 lg:mb-0 lg:bg-transparent border-b cursor-pointer border-gray-theme lg:hover:bg-gray-theme">
            <img className="arrow rotate-90" src="/icons/arrow.svg" />
            <h3>{currSection}</h3>
          </div>
          <div>
            {currData.info.map((item, idx) => (
              <div
                key={idx}
                className="grid grid-cols-2 px-5 items-center my-2 font-fira_regular text-menu-text"
                onClick={() => {
                  activeFolders.includes(item.title)
                    ? setActiveFolders((prev) =>
                        prev.filter((currItem) => item.title !== currItem)
                      )
                    : setActiveFolders((prev) => [...prev, item.title]);
                }}
              >
                <div className="flex col-span-2 text-sm hover:text-white hover:cursor-pointer">
                  <img
                    src="/icons/diple.svg"
                    alt=""
                    className={`mx-3 w-2 max-w-fit ${
                      activeFolders.includes(item.title) && 'rotate-90'
                    }`}
                  />
                  <img
                    src={'/icons/folder' + (idx + 1) + '.svg'}
                    alt=""
                    className="mr-3"
                  />
                  <p
                    className={`${
                      activeFolders.includes(item.title) && 'text-white'
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
                        className="hover:text-white hover:cursor-pointer flex my-2"
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
      </div>
    </main>
  );
};

export default AboutPage;
