'use client';
import ContactForm from '@/components/ContactForm';
import FormContentCode from '@/components/FormContentCode';
import Link from 'next/link';
import React, { useState } from 'react';

type Props = {};

const data = {
  contact: [
    {
      source: 'kaushik445566@gmail.com',
      key: 'email',
      href: 'mailto:kaushik445566@gmail.com',
    },
    {
      source: '+91 7837988677',
      key: 'phone',
      href: 'tel:+91 7837988677',
    },
  ],
  find_me_also_in: [
    {
      title: 'Github Profile',
      url: 'https://github.com/ikaushiksharma',
    },
    {
      title: 'Linkedin Profile',
      url: 'https://linkedin.com/in/ikaushiksharma',
    },
    {
      title: 'Instagram Profile',
      url: 'https://instagram.com/ikaushiksharma',
    },
    {
      title: 'Twitter Profile',
      url: 'https://twitter.com/ikaushiksharma',
    },
  ],
};

const ContactPage = (props: Props) => {
  const [contactDetailsOpen, setContactDetailsOpen] = useState(false);
  const [otherDetailsOpen, setOtherDetailsOpen] = useState(false);
  return (
    <main
      data-aos="fade-in"
      className="h-full w-full flex flex-col lg:flex-row flex-auto overflow-y-scroll"
    >
      <div id="mobile-page-title">
        <h2>_contact-me</h2>
      </div>
      <div className="page-menu w-full lg:h-full flex flex-col border-r border-gray-theme">
        {/*   <!-- contacts --> */}
        <div id="contacts">
          <div
            className="flex items-center px-6 w-full h-[35px] bg-gray-theme mb-1 lg:mb-0 lg:bg-transparent border-b cursor-pointer border-gray-theme lg:hover:bg-gray-theme"
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
              <div key={idx} className="flex items-center py-1 px-6">
                <img
                  className="w-4 h-4 mr-[10px]"
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

        {/*     <!-- find me also in --> */}

        <div id="find-me-also" className="border-t border-gray-theme">
          <div
            className="flex items-center px-6 w-full h-[35px] bg-gray-theme mb-1 lg:mb-0 lg:bg-transparent border-b cursor-pointer border-gray-theme lg:hover:bg-gray-theme"
            onClick={() => setOtherDetailsOpen(!otherDetailsOpen)}
          >
            <img
              className={`arrow ${otherDetailsOpen ? 'rotate-90' : ''}`}
              src="/icons/arrow.svg"
            />
            <h3>find-me-also-in</h3>
          </div>
          <div className={`py-[10px] ${otherDetailsOpen ? 'block' : 'hidden'}`}>
            {data.find_me_also_in.map((item, idx) => (
              <div key={idx} className="flex items-center py-1 px-6">
                <img className="w-4 h-4 mr-[10px]" src="/icons/link.svg" />
                <Link
                  target={'_blank'}
                  href={item.url}
                  className="font-fira_retina text-menu-text hover:text-white"
                >
                  {item.title}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full">
        {/*     <!-- windows tab --> */}

        <div className="min-h-[35px] max-h-[35px] w-full hidden lg:flex border-b border-r border-gray-theme items-center">
          <div className="flex items-center border-r border-gray-theme h-full">
            <p className="font-fira_regular text-menu-text text-sm px-3">
              contacts
            </p>
            <img src="/icons/close.svg" alt="" className="m-3" />
          </div>
        </div>
        {/* <!-- main --> */}
        <div className="flex lg:grid lg:grid-cols-2 h-full w-full">
          <div className="h-full w-full flex py-8 px-6 lg:pt-12 lg:pb-0 lg:px-6 min-[1920px]:pt-24 overflow-hidden flex-col lg:border-r border-gray-theme items-center">
            <ContactForm />
          </div>

          <div className="h-full w-full overflow-hidden hidden lg:flex">
            <div className="pt-[75px] w-full h-full overflow-y-auto text-[15px] pl-2 2xl:pl-[75px] pb-0 2xl:pr-[50px] min-[1920px]:p-24 min-[1920px]:text-base">
              <FormContentCode />
            </div>
            {/* <!-- scroll bar --> */}
            <div className="h-full w-[20px] border-l border-gray-theme flex justify-center py-1">
              <div className="w-[14px] h-[7px] bg-menu-text"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default ContactPage;
