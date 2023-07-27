import { Courses } from '@/utils/types';
import React from 'react';

type Props = {
  icon: string;
  institute: string;
  courses: Courses;
};

const AboutCard = ({ icon, institute, courses }: Props) => {
  return (
    <div className="w-full flex flex-col space-y-4 justify-evenly text-menu-text px-6 pt-12">
      <h1 className="text-2xl pl-12 font-bold underline underline-offset-4 decoration-purplefy text-white">
        {institute}
      </h1>
      <div className="flex">
        <img src={icon} alt="" className="p-2 h-10 max-w-[3rem]" />

        <div className="border border-gray-theme rounded-lg">
          {courses.map((course, idx) => (
            <div key={idx} className="p-4 flex flex-col gap-y-2">
              <h2 className="text-xl text-neon-blue-xs font-semibold">
                {course.title}
              </h2>
              <h1 className="text-lg font-bold">{course.duration}</h1>
              <p className="text-base text-codeline-link">
                {course.description}
              </p>
              <div className="flex flex-wrap">
                {course.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="text-sm bg-neon-blue-s transition-colors hover:bg-neon-blue-m cursor-pointer text-glitch-rose font-semibold mr-2 my-1 px-1 py-0.5 rounded-lg"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
