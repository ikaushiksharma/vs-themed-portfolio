import React from 'react';
import CommentSyntaxHighlighter from './CommentSyntaxHighlighter';
import EdCard from './EdCard';
type currPage = {
  folder: string;
  file: string;
};
type Props = {
  currentPage: currPage;
};

const LeftContent = ({ currentPage }: Props) => {
  const bio = ` /**
    * I'm an accomplished MERN stack developer
    * with a proven track record of creating
    * exceptional web applications. With 
    * expertise in React, Next.js, Node.js, and Express.js,
    * 
    * I bring a unique blend of technical
    * skills and a keen eye for detail to
    * every project. With 1 year of
   * experience with React.js and its libraries/frameworks,
   * I have successfully delivered
   * cutting-edge solutions that exceed client
   * expectations. Continuously staying abreast
   * of the latest trends and technologies,
   * 
   * I thrive on solving challenges and
   * creating seamless user experiences.
   * Collaborate with me to bring your vision
   * to life and achieve extraordinary results."
   */
    `;
  const responsiveBio = `
    I&apos;m an accomplished MERN stack developer with a proven track record of creating
    exceptional web applications. With expertise in React, Next.js, Node.js, and Express.js, <br /> I bring
    a unique blend of technical skills and a keen eye for detail to every project. With 1 year of
   exeperience with React.js and its libraries/frameworks, <br />
    <br /> I have successfully delivered cutting-edge solutions that exceed client expectations.
    Continuously staying abreast of the latest trends and technologies. <br /><br /> I thrive on solving
    challenges and creating seamless user experiences. Collaborate with me to bring your vision to
    life and achieve extraordinary results.
  `;
  const interested = `
  * As a web developer,
  * I have a keen interest in emerging
  * technologies and innovative web 
  * solutions. 
  * I'm passionate about creating seamless
  * user experiences and leveraging the 
  * power of web development to bring 
  * ideas to life. Constantly learning
  * and exploring new trends, I thrive
  * on the dynamic nature of the web 
  * development industry. Let's collaborate
  * and build extraordinary digital
  * experiences together.
  */`;
  const responsiveInterested = `
      As a web developer, I have a keen interest in emerging technologies and innovative web
      solutions. <br /> I&apos;m passionate about creating seamless user experiences and leveraging
      the power of web development to bring ideas to life. Constantly learning and exploring new
      trends. <br /> I thrive on the dynamic nature of the web development industry. Let&apos;s
      collaborate and build extraordinary digital experiences together.
    `;

  return (
    <div className="overflow-y-scroll">
      {currentPage.folder === 'bio' && (
        <CommentSyntaxHighlighter responsiveContent={responsiveBio}>
          {bio}
        </CommentSyntaxHighlighter>
      )}
      {currentPage.folder === 'interests' && (
        <CommentSyntaxHighlighter responsiveContent={responsiveInterested}>
          {interested}
        </CommentSyntaxHighlighter>
      )}
      {currentPage.folder === 'education' &&
        currentPage.file === 'university' && (
          <EdCard
            icon="/icons/education/university.svg"
            institute="Chitkara University, Patiala"
            courses={[
              {
                title: 'Bachelor of Engineering in CSE',
                duration: '2021 - 2025',
                description: 'CGPA: 9.98',
              },
            ]}
          />
        )}
      {currentPage.folder === 'education' &&
        currentPage.file === 'high-school' && (
          <EdCard
            icon="/icons/education/school.svg"
            institute="Bright Land School, Amritsar"
            courses={[
              {
                title: 'Senior Secondary Education in PCM',
                duration: '2019 - 2021',
                description: '95% (CBSE)',
              },
              {
                title: 'Secondary Education',
                duration: '2018 - 2019',
                description: '97.8% (CBSE)',
              },
            ]}
          />
        )}
    </div>
  );
};

export default LeftContent;
