import React from 'react';

type Props = {
  title: string;
  icon: string;
  isActive: boolean;
  selectSection: (section: string) => void;
};

const InfoSection = ({ selectSection, title, icon, isActive }: Props) => {
  return (
    <div
      className={`${
        isActive ? 'opacity-100' : 'opacity-40'
      } my-6  hover:cursor-pointer hover:opacity-100 flex justify-center transition-opacity`}
    >
      <img
        src={'/icons/' + icon + '.svg'}
        alt={title}
        onClick={() => selectSection(title)}
      />
    </div>
  );
};
export default InfoSection;
