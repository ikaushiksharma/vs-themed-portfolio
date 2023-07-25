import Sidebar from '@/components/Sidebar';
import React from 'react';

type Props = {};

const ProjectPage = (props: Props) => {
  return (
    <main
      data-aos="fade-in"
      className="h-full w-full flex flex-row lg:flex-col flex-auto overflow-hidden"
    >
      <div id="mobile-page-title">
        <h2>projects</h2>
      </div>
    </main>
  );
};

export default ProjectPage;
