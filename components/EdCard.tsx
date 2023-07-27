import React from 'react';

type Props = {
  icon: string;
  institute: string;
  courses: Array<{ title: string; duration: string; description: string }>;
};

const EdCard = ({ icon, institute, courses }: Props) => {
  return (
    <div
      data-aos="fade-right"
      className="w-full flex flex-col space-y-4 justify-evenly text-menu-text px-6 py-12"
    >
      <h1 className="text-2xl pl-12 font-bold underline underline-offset-4 decoration-purplefy text-glitch-green">
        {institute}
      </h1>
      <div className="flex">
        <img src={icon} alt="" className="p-2 w-10 h-10" />

        <div className="border border-gray-theme rounded-lg">
          {courses.map((course, idx) => (
            <div key={idx} className="p-4">
              <h2 className="text-xl text-neon-blue-xs font-semibold">
                {course.title}
              </h2>
              <h1 className="text-lg font-bold">{course.duration}</h1>
              <p className="text-base text-glitch-rose">{course.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EdCard;
