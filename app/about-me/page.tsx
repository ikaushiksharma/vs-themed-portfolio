import Sidebar from '@/components/Sidebar';
import React from 'react';

type Props = {};

const AboutPage = (props: Props) => {
  return (
    <div className="h-full w-full flex flex-row">
      <Sidebar />
      AboutPage
    </div>
  );
};

export default AboutPage;
