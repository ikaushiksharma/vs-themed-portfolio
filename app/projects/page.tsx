import Sidebar from '@/components/Sidebar';
import React from 'react';

type Props = {};

const ProjectPage = (props: Props) => {
  return (
    <div className="h-full w-full flex flex-row">
      <Sidebar />
      ProjectPage
    </div>
  );
};

export default ProjectPage;
