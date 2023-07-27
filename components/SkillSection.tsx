import { Skill } from '@/utils/types';
import React from 'react';

const SkillSection = ({ title, items }: Skill) => {
  return (
    <div className="lg:px-10 px-5 lg:py-6 w-full">
      <h2 className="text-2xl mb-5 text-menu-text flex items-center">
        {`//_${title} skills`}
      </h2>
      <div className="flex justify-around lg:justify-between items-center flex-wrap">
        {items.map(({ title, icon }, idx) => (
          <figure
            key={idx}
            className="text-center flex flex-col items-center justify-center m-3"
          >
            <img src={icon} alt={title} className="h-20" />
            <p className="pt-2">{title}</p>
          </figure>
        ))}
      </div>
    </div>
  );
};

export default SkillSection;
